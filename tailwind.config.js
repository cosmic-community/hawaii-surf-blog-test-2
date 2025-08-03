/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2196F3',
          50: '#E3F2FD',
          100: '#BBDEFB',
          500: '#2196F3',
          600: '#1976D2',
          700: '#1565C0',
          900: '#0D47A1'
        },
        ocean: {
          50: '#E0F7FA',
          100: '#B2EBF2',
          500: '#00BCD4',
          600: '#00ACC1',
          700: '#0097A7',
        },
        surf: {
          green: '#4CAF50',
          orange: '#FF9800',
          blue: '#2196F3'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'h2, h3, h4': {
              color: '#111827',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}