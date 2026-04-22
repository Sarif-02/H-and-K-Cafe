/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#672d00',
        'primary-container': '#8b4000',
        'primary-fixed': '#ffdbc8',
        'on-primary': '#ffffff',
        'accent-orange': '#FF7A00',
        surface: '#fff8f1',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f9f3eb',
        'surface-container': '#f3ede5',
        'surface-container-high': '#ede7df',
        'surface-container-highest': '#e8e1da',
        'on-surface': '#1e1b17',
        'on-surface-variant': '#52443c',
        'outline-variant': '#d4c3ba',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        xl: '3rem',
      },
      boxShadow: {
        'ambient': '0 8px 24px 0 rgba(30, 27, 23, 0.06)',
        'glow': '0 0 20px 5px rgba(255, 219, 200, 0.15)',
      }
    },
  },
  plugins: [],
}
