/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4b1864',     // DizitalAdda Official Brand Purple
          secondary: '#6b2d8a',   // Lighter brand violet
          dark: '#2e0e3e',        // Deep brand purple
          accent: '#7c3aed',      // Purple accent
          light: '#f5edfa',       // Soft brand tint
        },
        da: {
          bg: '#faf7fc',          // Clean light background
          surface: '#ffffff',     // Card surface
          card: '#ffffff',        // White elevated card
          hover: '#f6effb',       // Soft hover
          border: '#e8d8f5',      // Soft purple border
          text: '#200e30',        // Deep purple text
          muted: '#665675',       // Muted text
          purple: {
            DEFAULT: '#4b1864',
            light: '#7c3aed',
            dark: '#340f47',
          },
          gold: {
            DEFAULT: '#d97706',
            light: '#f59e0b',
          },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
