import { HslStringColorPicker } from "react-colorful"
import { useSelector } from "react-redux"
import { RootState } from "../stores"
import { handleColFifth, handleColFirst, handleColFourth, handleColSecond, handleColThird } from "../stores/hooks"
const Controller: React.FC = () => {

  const colors = useSelector((store: RootState) => store.Colors)

  return <>
    <div className="colFirst">
      <form className="flex gap-4 p-4 container">
        <HslStringColorPicker color={colors.colFirst} onChange={handleColFirst} />
        <HslStringColorPicker color={colors.colSecond} onChange={handleColSecond} />
        <HslStringColorPicker color={colors.colThird} onChange={handleColThird} />
        <HslStringColorPicker color={colors.colFourth} onChange={handleColFourth} />
        <HslStringColorPicker color={colors.colFifth} onChange={handleColFifth} />
      </form>
    </div>
  </>
}

export default Controller
