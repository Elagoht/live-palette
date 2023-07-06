import { useSelector } from "react-redux"
import { RootState } from "../stores"
import { handleColFifth, handleColFirst, handleColFourth, handleColSecond, handleColThird } from "../stores/hooks"
import ColorSelector from "./ColorSelector"
import { motion } from "framer-motion"
import { animContainer } from "../animations"
const Controller: React.FC = () => {

  const colors = useSelector((store: RootState) => store.colors)

  return <>
    <div className="colFirst">
      <form>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animContainer}
        >
          <ColorSelector toManage={colors.colFirst} manageHandler={handleColFirst} />
          <ColorSelector toManage={colors.colSecond} manageHandler={handleColSecond} />
          <ColorSelector toManage={colors.colThird} manageHandler={handleColThird} />
          <ColorSelector toManage={colors.colFourth} manageHandler={handleColFourth} />
          <ColorSelector toManage={colors.colFifth} manageHandler={handleColFifth} />
        </motion.div>
      </form>
    </div>
  </>
}

export default Controller
