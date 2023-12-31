/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FCD535',
        primaryhv: '#fcd435ea',
        dark: '#181A20',
        header: '#e5e5e5',
        text: '#5e6673',
        link: '#e1b507',
        faq: 'rgb(40, 26, 0)',
        modal: '#20222a'
      },
      fontFamily: {
        textfont: ['REM', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
