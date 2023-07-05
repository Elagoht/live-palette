import { Download } from "lucide-react"
import { useSelector } from "react-redux"
import { RootState } from "../stores"
import { setTextColor } from "../utilities/textColors"
import { rgbToHex, rgbToHsl, rgbToHsv } from "../utilities/translateColors"

const ExportPalette: React.FC = () => {

  const appColors = useSelector((store: RootState) => store.Colors)

  const downloadPalette = () => {

    // Convert palette to array
    const colors = Array.from(Object.values(appColors))

    // Create canvas to draw on
    const canvas = document.createElement("canvas")
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    canvas.width = 1000;
    canvas.height = 200;

    // Palette square settings
    const squareSize = 200;
    const spacing = (canvas.width - squareSize * colors.length) / (colors.length + 1)

    // Draw colors on canvas
    for (let index = 0; index < colors.length; index++) {
      const x = spacing + (squareSize + spacing) * index

      // Fill color backgrounds
      context.fillStyle = colors[index];
      context.fillRect(x, 0, squareSize, squareSize);

      // Write rgb codes on palette
      context.fillStyle = setTextColor(colors[index])
      context.font = '16px Arial'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillText(rgbToHex(colors[index]), x + squareSize / 2, squareSize / 2 - 30)
      context.fillText(colors[index], x + squareSize / 2, squareSize / 2 - 10)
      context.fillText(rgbToHsl(colors[index]), x + squareSize / 2, squareSize / 2 + 10)
      context.fillText(rgbToHsv(colors[index]), x + squareSize / 2, squareSize / 2 + 30)
    }

    // Convert canvas to data URL
    const dataURL = canvas.toDataURL('image/png');

    // Make button directly download image
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "ColorPalette.png";
    a.click();
  }

  return <button className="colThird colFourth" onClick={downloadPalette}>
    <Download className="colFifth" />
    Download color palette.
  </button>
}

export default ExportPalette
