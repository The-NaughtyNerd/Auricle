/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '36em',
      md: '48em',
      lg: '62em',
      xl: '75em',
    },
    extend: {
      colors: {
        primaryColor: '#1e72bc',
        secondaryColor: '#0aceb1',
        neutralColor1: '#333333',
        neutralColor2: '#eee',
        lightBackground: 'rgb(250, 250, 250)',
        darkBackground: '#061726',
        darkElement: '#092238',
        lightText: '#e9f1f8',
        // darkElement: 'rgb(43, 57, 69)',
      },
      fontFamily: {
        montserrat: [' "Montserrat" ', 'sans-serif'],
        clashDisplay: [' "Clash Display" ', 'sans-serif'],
        unicaOne: [' "Unica One" ', 'cursive'],
      },
    },
  },
  plugins: [],
};
