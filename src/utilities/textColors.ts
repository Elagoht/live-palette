export const getLight: (color: string) => number = (color: string) => {
  return parseInt(color.split(",")[2].replace("%)", ""))
}
export const setTextColor: (color: string) => string = (color: string) => {
  return (getLight(color) < 70) ? "white" : "black"
}

