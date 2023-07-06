import { Save } from "lucide-react"
import { OpenModal } from "../stores/hooks"
import { saveModal } from "../utilities/modalTypes"
import { motion } from "framer-motion"
import { animOpacity } from "../animations"

const SavePalette: React.FC = () => {

  const saveColors: () => void = () => {
    OpenModal(saveModal)
  }

  return <motion.button
    variants={animOpacity}
    className="colThird colFourth" onClick={saveColors}
  >
    <Save className="colFifth" />
    Save color palette.
  </motion.button>
}

export default SavePalette