import convert from "color-convert"

const splitRgbToArray: (color: string) => [number, number, number] = (color) => {
  return color
    .replace("rgb(", "")
    .replace(")", "")
    .split(",", 3)
    .map(Number) as [number, number, number]
}

export const rgbToHex: (color: string) => string = (color) => {
  return "#" + convert.rgb.hex(splitRgbToArray(color))
}

export const rgbToHsl: (color: string) => string = (color) => {
  return "hsl(" + convert.rgb.hsl(splitRgbToArray(color)) + ")"
}

export const rgbToHsv: (color: string) => string = (color) => {
  return "hsv(" + convert.rgb.hsv(splitRgbToArray(color)) + ")"
}