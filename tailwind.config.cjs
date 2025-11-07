module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#00ADB5',
        accent2: '#BB86FC'
      },
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
