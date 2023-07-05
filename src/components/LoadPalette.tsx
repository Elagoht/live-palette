import { ArrowUpToLine } from "lucide-react"
import { handleColFifth, handleColFirst, handleColFourth, handleColSecond, handleColThird } from "../stores/hooks"

const LoadPalette: React.FC = () => {

  const loadColors: () => void = () => {
    if (localStorage.getItem("SavedColors") === undefined) return
    const colors = JSON.parse(localStorage.getItem("SavedColors") as string)
    handleColFirst(colors.colFirst)
    handleColSecond(colors.colSecond)
    handleColThird(colors.colThird)
    handleColFourth(colors.colFourth)
    handleColFifth(colors.colFifth)
    location.reload()
  }

  return <button className="colThird colFourth" onClick={loadColors}>
    <ArrowUpToLine className="colFifth" />
    Load color palette.
  </button>
}

export default LoadPalette
