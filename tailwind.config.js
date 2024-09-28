/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#87CEEB", // You can adjust this color as needed
      },
      animation: {
        wave: "wave 10s ease-in-out infinite",
      },

      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounce: {
          // "0%, 100%": {
          //   transform: "rotate(-360deg)",
          //   animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          //   opacity: "1",
          // },
          "50%": {
            opacity: "0",
          },
          "100%": {
            rotate: "10deg",
          },
        },
      },
      animation: {
        bounce: "spin 1s 0s",
      },
    },
  },
  plugins: [],
};
