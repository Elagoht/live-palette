import { Save } from "lucide-react"
import { useSelector } from "react-redux"
import { RootState } from "../stores"


const SavePalette: React.FC = () => {

  const colors = useSelector((store: RootState) => store.Colors)

  const saveColors: () => void = () => {
    if (!window.confirm("This action will perform overwrite your existing palette. Still want to continue?")) return
    localStorage.setItem("SavedColors", JSON.stringify(colors))
  }

  return <button className="colThird colFourth" onClick={saveColors}>
    <Save className="colFifth" />
    Save color palette.
  </button>
}

export default SavePalette