import { Save } from "lucide-react"
import { OpenModal } from "../stores/hooks"
import { saveModal } from "../utilities/modalTypes"

const SavePalette: React.FC = () => {

  const saveColors: () => void = () => {
    OpenModal(saveModal)
  }

  return <button className="colThird colFourth" onClick={saveColors}>
    <Save className="colFifth" />
    Save color palette.
  </button>
}

export default SavePalette