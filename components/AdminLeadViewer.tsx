'use client';

import React, { useState, useEffect } from 'react';

interface AdminLeadViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminLeadViewer({ isOpen, onClose }: AdminLeadViewerProps) {
  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  const loadLeads = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('da_leads') || '[]');
      setLeads(stored);
    } catch {
      setLeads([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = leads.filter(
    (l) =>
      l.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      l.phone?.includes(search) ||
      l.email?.toLowerCase().includes(search.toLowerCase()) ||
      l.course?.toLowerCase().includes(search.toLowerCase())
  );

  const downloadCSV = () => {
    if (leads.length === 0) {
      alert('No leads to download.');
      return;
    }
    const headers = ['Full Name', 'Phone', 'Email', 'Course', 'Mode', 'Experience', 'Source', 'Date'];
    const rows = leads.map((l) => [
      `"${l.fullName || ''}"`,
      `"${l.phone || ''}"`,
      `"${l.email || ''}"`,
      `"${l.course || ''}"`,
      `"${l.mode || ''}"`,
      `"${l.experience || ''}"`,
      `"${l.source || ''}"`,
      `"${l.submittedAt || l.timestamp || ''}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DizitalAdda_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearLeads = () => {
    if (confirm('Are you sure you want to clear stored leads on this browser?')) {
      localStorage.removeItem('da_leads');
      setLeads([]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white border-2 border-[#ebdcf5] p-6 shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#ebdcf5]">
          <div>
            <h3 className="text-lg font-black text-[#200e30]">
              DizitalAdda Internal Lead Vault
            </h3>
            <p className="text-xs text-[#5e4b6d]">
              Total captured leads on this device: <span className="text-[#4b1864] font-bold">{leads.length}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadCSV}
              className="px-3.5 py-1.5 rounded-lg bg-[#4b1864] hover:bg-[#3d1252] text-white font-extrabold text-xs shadow-sm cursor-pointer"
            >
              Export CSV
            </button>
            <button
              onClick={clearLeads}
              className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-xs font-semibold cursor-pointer"
              title="Clear Local Leads"
            >
              Clear
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-[#faf7fc] hover:bg-[#f3e8fa] border border-[#ebdcf5] text-[#200e30] font-bold flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="py-3">
          <input
            type="text"
            placeholder="Search leads by name, phone, course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-xs text-[#200e30] placeholder-gray-400 focus:outline-none focus:border-[#4b1864]"
          />
        </div>

        {/* Leads Table */}
        <div className="flex-1 overflow-y-auto rounded-xl border border-[#ebdcf5] bg-white">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-[#8a7a99] text-xs">
              No leads found matching your criteria.
            </div>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f8f3fa] border-b border-[#ebdcf5] text-[#4b1864] sticky top-0 font-semibold">
                <tr>
                  <th className="p-3">#</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Course Track</th>
                  <th className="p-3">Mode</th>
                  <th className="p-3">Source</th>
                  <th className="p-3">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ebdcf5] text-[#3b234d]">
                {filtered.map((l, i) => (
                  <tr key={i} className="hover:bg-[#faf7fc]">
                    <td className="p-3 font-mono text-[#8a7a99]">{i + 1}</td>
                    <td className="p-3 font-bold text-[#200e30]">{l.fullName}</td>
                    <td className="p-3 font-mono text-[#4b1864] font-semibold">{l.phone}</td>
                    <td className="p-3 text-[#5e4b6d]">{l.email}</td>
                    <td className="p-3 font-medium">{l.course}</td>
                    <td className="p-3">{l.mode}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-[#f3e8fa] text-[10px] text-[#4b1864] border border-[#ebdcf5]">
                        {l.source || 'Website'}
                      </span>
                    </td>
                    <td className="p-3 text-[10px] text-[#8a7a99]">
                      {l.submittedAt || l.timestamp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
