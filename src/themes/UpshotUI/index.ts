import alerts from './alerts'
import buttons from './buttons'
import colors from './colors'
import gradients from './gradients'
import text from './text'

export const breakpoints = ['23em', '43em', '80em']

export const sizes = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const fonts = {
  body: 'proxima-nova, sans-serif',
  heading: 'degular-display, sans-serif',
  serif: 'glysa, serif',
  monospace: 'Menlo, monospace',
}

export const fontSizes = [
  0.625, 0.75, 0.875, 1, 1.125, 1.438, 2, 2.188, 3.25,
].map((n) => n + 'rem')

export const fontWeights = {
  body: 400,
  heading: 500,
  bold: 700,
}

export const lineHeights = {
  body: '1.125rem',
  heading: '2.625rem',
}

const theme = {
  sizes,
  space: sizes,
  breakpoints,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  colors,
  alerts,
  buttons,
  gradients,
  text,
}

export default theme
