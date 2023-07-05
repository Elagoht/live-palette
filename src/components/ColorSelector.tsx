import { ClipboardCopy, ClipboardPaste, Clipboard, ClipboardCheck } from "lucide-react"
import { RgbStringColorPicker } from "react-colorful"
import convert from "color-convert"
import { useSelector } from "react-redux"
import { RootState } from "../stores"
import { handleClipboard } from "../stores/hooks"
import { useState } from "react"

type ColorSelector = {
  toManage: string,
  manageHandler: (state: string) => void
}

const ColorSelector: React.FC<ColorSelector> = ({ toManage, manageHandler }) => {

  const { clipboard } = useSelector((store: RootState) => store.Clipboard)
  const [RGB, setRGB] = useState(false)
  const [HEX, setHEX] = useState(false)

  const translateToHex: (color: string) => string = (color) => {
    const values: number[] = color
      .replace("rgb(", "")
      .replace(")", "")
      .split(",")
      .map(Number)
    return convert.rgb.hex(values)
  }

  const copyToClipboard = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    navigator.clipboard.writeText(
      event.currentTarget.querySelector("span")?.innerText || ""
    ).catch(() => window.alert("Failed to copy to clipboard."))
  }

  const copyColor: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = (event) => {
    event.preventDefault()
    handleClipboard(toManage)
  }
  const pasteColor: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = (event) => {
    event.preventDefault()
    manageHandler(clipboard)
  }

  const notifyRGBCopy: () => void = () => {
    setRGB(true)
    setHEX(false)
    setTimeout(() => {
      setRGB(false)
    }, 1500)
  }

  const notifyHEXCopy: () => void = () => {
    setHEX(true)
    setRGB(false)
    setTimeout(() => {
      setHEX(false)
    }, 1500)
  }

  return <div className="flex flex-col gap-2">
    <RgbStringColorPicker className="col-span-2" color={toManage} onChange={manageHandler} />
    <button onClick={event => { copyToClipboard(event); notifyRGBCopy() }} className="flex items-center gap-2">
      {RGB ? <ClipboardCheck /> : <Clipboard />}
      <span className="grow text-center"> {toManage}</span>
    </button>
    <button onClick={event => { copyToClipboard(event); notifyHEXCopy() }} className="flex items-center gap-2">
      {HEX ? <ClipboardCheck /> : <Clipboard />}
      <span className="grow text-center">#{translateToHex(toManage)}</span>
    </button>
    <div className="flex gap-2">
      <button onClick={event => copyColor(event)} className="colSecond flex-1 hover:scale-105 hover:brightness-110 shadow-md transition-transform rounded-lg flex items-center gap-1 p-2"><ClipboardCopy /> Copy</button>
      <button onClick={event => pasteColor(event)} className="colSecond flex-1 hover:scale-105 hover:brightness-110 shadow-md transition-transform rounded-lg flex items-center gap-1 p-2"><ClipboardPaste /> Paste</button>
    </div>
  </div>
}

export default ColorSelector
