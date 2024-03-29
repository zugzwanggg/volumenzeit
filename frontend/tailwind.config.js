/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        x: '0.625rem',
      },
      colors: {
        gray: '#939393',
        blue: '#735CFF',
        red: '#FF8585',
        customWhite: '#EAECF5',
      },
      boxShadow: {
        shadowBox: '0px 40px 40px 0px rgba(114, 117, 119, 0.25);',
      },
      screens: {
        sm: '640px',
        md: '1025px',
        lg: '1280px',
      },
      height: {
        smScreen: '90vh',
        x: '0.0625rem',
      },
      width: {
        x: '0.0625rem',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      rotate: {
        360: '360deg',
      },
      backgroundImage: {
        signUpBg: "url('./img/signBg.png')",
        authBg: "url('./img/authBg.png')",
      },
      zIndex: {
        60: '60',
      },
    },
  },
  plugins: [],
};
