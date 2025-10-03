/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        surface: 'var(--surface)',
        surface2: 'var(--surface-2)',
        primary: 'var(--primary)',
        accent: '#facc15',
      },
      boxShadow: {
        soft: '0 6px 18px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl: '14px',
      }
    },
  },
  plugins: [],
}
