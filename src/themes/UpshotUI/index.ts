import alerts from './alerts'
import avatars from './avatars'
import buttons from './buttons'
import colors from './colors'
import gradients from './gradients'
import transitions from './transitions'
import forms from './forms'
import text, { fonts, fontSizes, fontWeights, lineHeights } from './text'

export const breakpoints = ['23em', '43em', '80em']

export const sizes = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const radii = {
  square: '0',
  xs: '5px',
  sm: '10px',
  md: '20px',
  lg: '30px',
  pill: '9999px',
  circle: '50%',
}

export const styles = {
  root: {
    body: {
      margin: 0,
      backgroundColor: colors.black,
      color: colors.text,
    },
  },
}

const theme = {
  sizes,
  space: sizes,
  radii,
  breakpoints,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  colors,
  avatars,
  forms,
  alerts,
  buttons,
  gradients,
  transitions,
  text,
  styles,
}

export default theme
