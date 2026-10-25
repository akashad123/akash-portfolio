/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FDD60A',
          yellowHover: '#E5C200',
          black: '#000000',
          darkSurface: '#0D0D0D',
          darkMuted: '#171717',
          darkBorder: 'rgba(255, 255, 255, 0.12)',
          lightBg: '#FFFFFF',
          lightSurface: '#F8F8F8',
          lightMuted: '#F2F2F2',
          lightBorder: 'rgba(0, 0, 0, 0.08)',
        }
      },
      fontFamily: {
        display: ['"Anton"', '"Oswald"', '"Barlow Condensed"', 'sans-serif'],
        serifDisplay: ['"Playfair Display"', '"Bodoni Moda"', 'Georgia', 'serif'],
        syne: ['"Syne"', 'sans-serif'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px', // Strict 0px radius rule
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em',
        widest: '0.25em',
      },
      lineHeight: {
        display: '0.86',
      }
    },
  },
  plugins: [],
}
