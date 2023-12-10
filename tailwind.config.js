/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {animation: {
      'scale-up-center': 'scale-up-center 0.6s',
    },
    keyframes: {
      'scale-up-center': {
        '0%': { transform: 'scale(.1)' },
        '100%': { transform: 'scale(1)' },
      },
    },
  },
  },
  plugins: [],
}

