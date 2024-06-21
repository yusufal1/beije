/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#F9F5F2",
        "secondary": "#343131"
      }
    },
    screens: {
      'sm': '552px',
      // => @media (min-width: 640px) { ... }

      'md': '852px',
      // => @media (min-width: 768px) { ... }

      'lg': '1152px',
      // => @media (min-width: 1024px) { ... }
    }
  },
  plugins: [],
};
