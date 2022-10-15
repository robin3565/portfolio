/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
      },
      colors: {
        'primary-black': '#0D0D0D',
        'primary-red': '#E8674D',
        'off-white': '#F5ECE9',
        'tomato' : '#ff6447',
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'large': '0.9rem',
      'full': '9999px',
    }
  },
  plugins: [],
}


