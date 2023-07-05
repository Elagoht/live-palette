export const validateHexInput: (input: HTMLInputElement) => void = (input) => {
  input.value = input.value.replace(/[^0-9A-Fa-f]/g, "")
  if (input.value.length > 6) input.value = input.value.substring(0, 6)
}

export const validateHex: (color: string) => boolean = (color) => {
  return /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
}