import { Trash } from "lucide-react"
import { OpenModal } from "../stores/hooks"
import { clearModal } from "../utilities/modalTypes"
import { motion } from "framer-motion"
import { animOpacity } from "../animations"

const ClearPalette: React.FC = () => {

  const clearLocalStorage: () => void = () => {
    OpenModal(clearModal)
  }

  return <motion.button
    variants={animOpacity}
    onClick={clearLocalStorage} className="colThird colFourth"
  >
    <Trash className="colFifth" />
    Clear color palette.
  </motion.button >
}

export default ClearPalette
