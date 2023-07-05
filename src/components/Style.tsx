import { useSelector } from "react-redux"
import { RootState } from "../stores"
import { setTextColor } from "../utilities/textColors"

const Style: React.FC = () => {

  const colors = useSelector((store: RootState) => store.Colors)

  return <style>{`
  body { background-color: ${colors.colSecond}; color: ${setTextColor(colors.colSecond)}; }
  .colFirst { background-color: ${colors.colFirst}; color: ${setTextColor(colors.colFirst)}; }
  .colSecond { background-color: ${colors.colSecond}; color: ${setTextColor(colors.colSecond)};}
  .colThird { background-color: ${colors.colThird};  color: ${setTextColor(colors.colThird)};}
  .colFourth { border-color: ${colors.colFourth}; }
  .colFifth { color: ${colors.colFifth}; }
`}</style>
}

export default Style
