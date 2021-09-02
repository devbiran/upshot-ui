const radio = {
  primary: {
    bg: 'black',
    'input ~ &': {
      fill: 'grey-400', // Default: outline
    },
    'input:disabled ~ &': {
      fill: 'grey-600', // Disabled: outline
    },
    'input:checked ~ &': {
      fill: 'primary', // Checked: fill
    },
    'input:focus ~ &': {
      // Default: focused
      bg: 'black',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'primary',
    },
    'input:focus:checked ~ &': {
      borderWidth: '0px',
    },
  },
  error: {
    bg: 'black',
    'input ~ &': {
      fill: 'red', // Error: outline
    },
    'input:checked ~ &': {
      fill: 'red', // Error: fill
    },
    'input:focus ~ &': {
      // Error: focused
      bg: 'black',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'red',
    },
    'input:focus:checked ~ &': {
      borderWidth: '0px',
    },
  },
}

export default radio
