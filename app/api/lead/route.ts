import { NextResponse } from 'next/server';

const CRM_ENDPOINT = process.env.CRM_ENDPOINT || 'https://leads.dizitaladda.com/api/public/leads';
const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL || 'https://script.google.com/macros/s/AKfycbwdmPYObEhNaUpMi2LrY2ylEjpwjqU5zwX62yZ_vsH5avKabgYpSNu1NsR1AMXgorFi/exec';
const CRM_COURSE_NAME = 'Executive Certification in Digital Marketing & AI';
const CRM_API_KEY = process.env.CRM_API_KEY || '';

// Rate Limiter: Max 2 leads per 60 seconds per device/IP
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_LEADS_PER_WINDOW = 2;

const rateLimitCache = new Map<string, number[]>();

function getClientIdentifier(request: Request, bodyDeviceId?: string): string {
  if (bodyDeviceId && typeof bodyDeviceId === 'string' && bodyDeviceId.trim().length > 3) {
    return `device_${bodyDeviceId.trim()}`;
  }

  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const ip = forwarded.split(',')[0].trim();
    if (ip) return `ip_${ip}`;
  }

  const realIp = request.headers.get('x-real-ip') || request.headers.get('cf-connecting-ip');
  if (realIp) {
    return `ip_${realIp.trim()}`;
  }

  return 'device_default';
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      fullName,
      email,
      phone,
      course,
      mode,
      experience,
      date,
      message,
      source,
      deviceId,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      landing_page_url,
      timestamp,
    } = data;

    // Rate limiting check
    const clientId = getClientIdentifier(request, deviceId);
    const now = Date.now();

    const previousTimestamps = (rateLimitCache.get(clientId) || []).filter(
      (time) => now - time < RATE_LIMIT_WINDOW_MS
    );

    if (previousTimestamps.length >= MAX_LEADS_PER_WINDOW) {
      const oldestTimestamp = previousTimestamps[0];
      const waitSeconds = Math.max(1, Math.ceil((oldestTimestamp + RATE_LIMIT_WINDOW_MS - now) / 1000));

      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          message: `1 minute ke andar same device se maximum 2 baar lead submit ki ja sakti hai. Kripya ${waitSeconds} second baad try karein.`,
          retryAfter: waitSeconds,
        },
        {
          status: 429,
          headers: { 'Retry-After': String(waitSeconds) },
        }
      );
    }

    // Save timestamp
    previousTimestamps.push(now);
    rateLimitCache.set(clientId, previousTimestamps);

    // Basic validation
    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Full name and Phone number are required' },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/\D/g, '').slice(-10);

    let crmSource = 'LANDING_PAGE';
    if (utm_source) {
      const lower = utm_source.toLowerCase();
      if (lower.includes('fb') || lower.includes('meta') || lower.includes('instagram')) {
        crmSource = 'META';
      } else if (lower.includes('google') || lower.includes('adwords')) {
        crmSource = 'GOOGLE';
      }
    }

    const selectedCourse = course || CRM_COURSE_NAME;

    // 1. Prepare CRM Payload
    const crmPayload = {
      fullName: fullName.trim(),
      mobileNumber: cleanPhone,
      email: email && email.trim() ? email.trim() : null,
      domain: 'DizitalAdda',
      interestedCourse: selectedCourse,
      source: crmSource,
      preferredCentre: mode || 'Online & Offline (Delhi)',
      landing_page_url: landing_page_url || 'https://dizitaladda.com/digital-marketing',
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      utm_content: utm_content || null,
      remarks: `${experience ? `Profile: ${experience} | ` : ''}${date ? `Demo Date: ${date} | ` : ''}${message ? `Note: ${message} | ` : ''}Form: ${source || 'Hero Form'}`,
    };

    // Forward to CRM asynchronously
    let crmSyncStatus = false;
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      if (CRM_API_KEY) {
        headers['Authorization'] = `Bearer ${CRM_API_KEY}`;
      }
      const crmRes = await fetch(CRM_ENDPOINT, {
        method: 'POST',
        headers,
        body: JSON.stringify(crmPayload),
      });
      const crmData = await crmRes.json().catch(() => null);
      crmSyncStatus = !!crmData?.success || crmRes.ok;
    } catch (crmErr) {
      console.error('CRM sync error:', crmErr);
    }

    // 2. Also forward to DizitalAdda Google Sheets Webhook
    try {
      const sheetPayload = {
        name: fullName.trim(),
        phone: cleanPhone,
        email: email || '',
        course: selectedCourse,
        mode: mode || 'Hybrid (Online/Offline)',
        date: date || new Date().toISOString().split('T')[0],
        message: message || `Profile: ${experience || 'N/A'} - Source: ${source || 'Landing Page'}`,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        source: landing_page_url || 'https://dizitaladda.com/digital-marketing',
      };

      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(sheetPayload),
      });
    } catch (sheetErr) {
      console.error('Google Sheet webhook sync error:', sheetErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your counselling & syllabus request has been received.',
      crmSynced: crmSyncStatus,
      lead: {
        fullName,
        phone: cleanPhone,
        email,
        course: selectedCourse,
        mode,
        timestamp: timestamp || new Date().toISOString(),
      },
    });
  } catch (err: any) {
    console.error('Lead route error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err.message },
      { status: 500 }
    );
  }
}
