import { useSelector } from "react-redux"
import { RootState } from "../stores"
import { setTextColor } from "../utilities/textColors"

const Style: React.FC = () => {

  const colors = useSelector((store: RootState) => store.colors)

  return <style>{`
  ::-webkit-scrollbar { background-color: ${colors.colFirst}; border: 1px solid ${colors.colSecond}; }
  ::-webkit-scrollbar-thumb { background-color: ${colors.colSecond}; }
  body { background-color: ${colors.colSecond}; color: ${setTextColor(colors.colSecond)}; }
  .colFirst { background-color: ${colors.colFirst}; color: ${setTextColor(colors.colFirst)}; }
  .colSecond { background-color: ${colors.colSecond}; color: ${setTextColor(colors.colSecond)};}
  .colThird { background-color: ${colors.colThird};  color: ${setTextColor(colors.colThird)};}
  .colFourth { border-color: ${colors.colFourth}; }
  .colFifth, div > a, p a { color: ${colors.colFifth}; }
`}</style>
}

export default Style
