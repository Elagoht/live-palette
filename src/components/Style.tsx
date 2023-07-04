import { useSelector } from "react-redux"
import { RootState } from "../stores"


const Style: React.FC = () => {

  const getLight: (color: string) => number = (color: string) => {
    return parseInt(color.split(",")[2].replace("%)", ""))
  }
  const setTextColor: (light: number) => string = (light: number) => {
    console.log(light)
    return (light < 50) ? "white" : "black"
  }

  const colors = useSelector((store: RootState) => store.Colors)

  return <style>{`
  body { background-color: ${colors.colSecond}; color: ${setTextColor(getLight(colors.colSecond))}; }
  .colFirst { background-color: ${colors.colFirst}; color: ${setTextColor(getLight(colors.colFirst))}; }
  .colSecond { background-color: ${colors.colSecond}; }
  .colThird { background-color: ${colors.colThird}; }
  .colFourth { border-color: ${colors.colFourth}; color: ${colors.colFourth}; }
  .colFifth { border-color: ${colors.colFourth}; color: ${colors.colFifth}; }
`}</style>
}

export default Style
