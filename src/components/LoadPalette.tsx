import { ArrowUpToLine } from "lucide-react"
import { OpenModal } from "../stores/hooks"
import { loadModal } from "../utilities/modalTypes"
import { motion } from "framer-motion"
import { animOpacity } from "../animations"

const LoadPalette: React.FC = () => {

  const loadColors: () => void = () => {
    OpenModal(loadModal)
  }

  return <motion.button
    variants={animOpacity}
    className="colThird colFourth" onClick={loadColors}
  >
    <ArrowUpToLine className="colFifth" />
    Load color palette.
  </motion.button>
}

export default LoadPalette
