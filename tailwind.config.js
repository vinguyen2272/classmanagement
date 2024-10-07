/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/Layout/DefaultLayout/Header/Header.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3748',
        secondary: '#B9B9B9',
        orange: '#d45b13',
        blue: '#285D9A',
        brown: '#474747',
        gray: '#F1F1F1',
        white: '#FFFF',
        peach: '#FF7568',
        green: '#2F903F',
      },
    },
  },
  plugins: [],
}
