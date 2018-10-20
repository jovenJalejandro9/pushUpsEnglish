export const TRANSLATE = 'TRANSLATE'
export const BAD = 'BAD'
export const RIGTH = 'RIGTH'
export const RESET = 'RESET'

export const translate = () => {
  return {
    type: TRANSLATE
  }
}

export const bad = () => {
  return {
    type: BAD
  }
}

export const right = () => {
  return {
    type: RIGTH
  }
}

export const reset = () => {
  return {
    type: RESET
  }
}