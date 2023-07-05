import { Trash } from "lucide-react"
import { OpenModal } from "../stores/hooks"
import { clearModal } from "../utilities/modalTypes"

const ClearPalette: React.FC = () => {

  const clearLocalStorage: () => void = () => {
    OpenModal(clearModal)
  }

  return <button onClick={clearLocalStorage} className="colThird colFourth">
    <Trash className="colFifth" />
    Clear color palette.
  </button>
}

export default ClearPalette
