import { useSelector } from "react-redux"
import { RootState } from "../stores"
import { handleColFifth, handleColFirst, handleColFourth, handleColSecond, handleColThird } from "../stores/hooks"
import ColorSelector from "./ColorSelector"
const Controller: React.FC = () => {

  const colors = useSelector((store: RootState) => store.Colors)

  return <>
    <div className="colFirst">
      <form className="flex gap-4 p-4 justify-center flex-wrap">
        <ColorSelector toManage={colors.colFirst} manageHandler={handleColFirst} />
        <ColorSelector toManage={colors.colSecond} manageHandler={handleColSecond} />
        <ColorSelector toManage={colors.colThird} manageHandler={handleColThird} />
        <ColorSelector toManage={colors.colFourth} manageHandler={handleColFourth} />
        <ColorSelector toManage={colors.colFifth} manageHandler={handleColFifth} />
      </form>
    </div>
  </>
}

export default Controller
