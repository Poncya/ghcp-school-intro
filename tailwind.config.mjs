/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111111',
          soft: '#2b2b2b',
          muted: '#6b6b6b',
        },
        paper: {
          DEFAULT: '#fafaf7',
          warm: '#f3efe7',
        },
        accent: {
          DEFAULT: '#0f766e', // teal-700 寄り: 徳島/自然を想起
          soft: '#14b8a6',
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"Noto Sans JP"',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: ['"Inter"', '"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      spacing: {
        section: 'clamp(4rem, 10vw, 8rem)',
      },
      maxWidth: {
        prose: '68ch',
        page: '1200px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};
