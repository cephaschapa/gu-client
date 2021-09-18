module.exports = {
  mode: "JIT",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backdropBlur: {
        'none': 'none',
        'blur': 'blur(20px)',
      }
    },
  },
  variants: {
    extend: {
      backdropBlur: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-filters')
  ],
}
