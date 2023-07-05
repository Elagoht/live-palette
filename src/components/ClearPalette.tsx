import { Trash } from "lucide-react"
import { handleColFifth, handleColFirst, handleColFourth, handleColSecond, handleColThird } from "../stores/hooks"

const ClearPalette: React.FC = () => {

  const clearLocalStorage: () => void = () => {
    if (!window.confirm("Do you really want to clear your awesome palette?")) return
    handleColFirst("rgb(38, 38, 38)")
    handleColSecond("rgb(196, 196, 196)")
    handleColThird("rgb(238, 238, 238)")
    handleColFourth("rgb(255, 153, 53)")
    handleColFifth("rgb(207, 24, 109)")
    location.reload()
  }

  return <button onClick={clearLocalStorage} className="colThird colFourth">
    <Trash className="colFifth" />
    Clear color palette.
  </button>
}

export default ClearPalette
