import { ArrowUpToLine } from "lucide-react"
import { OpenModal } from "../stores/hooks"
import { loadModal } from "../utilities/modalTypes"

const LoadPalette: React.FC = () => {

  const loadColors: () => void = () => {
    OpenModal(loadModal)
  }

  return <button className="colThird colFourth" onClick={loadColors}>
    <ArrowUpToLine className="colFifth" />
    Load color palette.
  </button>
}

export default LoadPalette
