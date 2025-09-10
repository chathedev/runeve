/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coal: '#111827',
        stone: '#374151',
        sand: '#F3F4F6',
        brand: {
          gold: '#F59E0B',
          orange: '#FB923C',
          blue: '#0EA5E9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        header: '0 8px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}

