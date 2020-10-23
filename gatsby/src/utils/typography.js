import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Spectral',
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Poppins', 'Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Spectral',
      styles: ['400', '700'],
    },
    {
      name: 'Poppins',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
})

export const { scale, rhythm } = typography

export default typography
