import { Clipboard, ClipboardCheck } from "lucide-react"
import { RgbStringColorPicker } from "react-colorful"
import { RefObject, useRef, useState } from "react"
import { hexToRgb, rgbToHex } from "../utilities/translateColors"
import { validateHex, validateHexInput } from "../utilities/colorValidators"
import { motion } from "framer-motion"
import { animPosition } from "../animations"

type ColorSelector = {
  toManage: string,
  manageHandler: (state: string) => void
}

const ColorSelector: React.FC<ColorSelector> = ({ toManage, manageHandler }) => {

  const [HEX, setHEX] = useState(false)

  const copyToClipboard = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.preventDefault()
    if (event.currentTarget.parentElement) {
      navigator.clipboard.writeText(
        ("#" + event.currentTarget.parentElement.querySelector("input")?.value) || ""
      ).catch(() =>
        window.alert("Failed to copy to clipboard.")
      )
    }
  }

  const notifyHEXCopy: () => void = () => {
    setHEX(true)
    setTimeout(() => {
      setHEX(false)
    }, 1500)
  }

  const handleUserHexInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateHexInput(event.target)
    if (validateHex(event.target.value))
      manageHandler(hexToRgb(event.target.value))
  }

  const inputHex: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

  const onChange: (color: string) => void = (color) => {
    if (inputHex.current) {
      inputHex.current.value = rgbToHex(color).replace("#", "")
    }
    manageHandler(color)
  }

  return <motion.div
    variants={animPosition}
    className="flex flex-col gap-2"
  >
    <RgbStringColorPicker className="col-span-2" color={toManage} onChange={onChange} />

    <div className="flex items-center gap-2">
      <div className="rounded-md colSecond p-1 flex gap-2 shadow-md">
        {HEX ? <ClipboardCheck /> : <Clipboard className="cursor-pointer" onClick={event => { copyToClipboard(event); notifyHEXCopy() }} />}
        <div className="flex">
          <label htmlFor="hex">#</label>
          <input id="hex" ref={inputHex}
            className="w-full bg-transparent max-w-none"
            defaultValue={rgbToHex(toManage).replace("#", "")}
            onChange={(event) => handleUserHexInput(event)}
          />
        </div>
      </div>
    </div>
  </motion.div>
}

export default ColorSelector
