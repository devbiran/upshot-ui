const swatches = {
  blue: '#0091FF',
  pink: '#D356B9',
  red: '#FF562B',
  orange: '#D87C22',
  yellow: '#FFC503',
  green: '#1BB441',
  greenLabel: '#2dab6e',
  purple: '#7B61FF',
  black: '#000',
  white: '#FFF',
  'grey-200': '#F5F5F5',
  'grey-300': '#E4E4E4',
  'grey-400': '#C0C0C0',
  'grey-500': '#A7A7A7',
  'grey-600': '#7C7C7C',
  'grey-700': '#545454',
  'grey-800': '#231F20',
  'grey-900': '#151515',
  transparent: 'transparent',
}

const colors = {
  ...swatches,
  /* Aliases */
  primary: swatches.blue,
  secondary: swatches.pink,
  background: swatches.black,
  error: swatches.red,
  text: swatches['grey-300'],
  disabled: swatches['grey-700'],
}

export default colors
