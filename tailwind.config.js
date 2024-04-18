/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '36px': '36px',
        '24px': '24px'
      },
      width: {
        'calc-2': 'calc((100% - 228px) / 2)',
      },
    },
  },
  plugins: [],
}

