export const formDefault = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

export const defaultValidator = {
  required: "Field is required",
  minLength: {
    value: 2,
    message: 'Enter at least 2 characters'
  },
}

export const nameValidator =  {
  ...defaultValidator, 
  pattern: {
    value: /[a-zA-Z]+$/,
    message: "Enter a valid name"
  }  
}

export const emailValidator = {
  ...defaultValidator, 
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Enter a valid email address"
  }
}

