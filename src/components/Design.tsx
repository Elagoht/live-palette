import { Github, Image, Paintbrush, Palette } from "lucide-react"
import ClearPalette from "./ClearPalette"
import ExportPalette from "./ExportPalette"
import SavePalette from "./SavePalette"
import LoadPalette from "./LoadPalette"

const Design: React.FC = () => {

  return <>
    <header className="colFirst">
      <div>
        <div>
          <Palette size={48} strokeWidth={1.5} /> Color Ipsum
        </div>
        <nav>
          <a>Lorem</a>
          <a>Ipsum</a>
          <a>Dolor</a>
          <a>Sit</a>
          <a>Amet</a>
        </nav>
      </div>
    </header>
    <div>
      <div>
        <div className="colThird colFourth">
          <div className="colFourth colThird">
            <Paintbrush className="colFifth" size={50} strokeWidth={1.25} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum eos minima tenetur sequi? Tempore, sit ipsum. Fuga, doloremque corrupti.</p>
        </div>
        <div className="colThird colFourth">
          <div className="colFourth colThird">
            <Github className="colFifth" size={50} strokeWidth={1.25} />
          </div>
          <p>Star this repository on Github. Uhmm actually mean lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="colThird colFourth">
          <div className="colFourth colThird">
            <Image className="colFifth" size={50} strokeWidth={1.25} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam porro mollitia totam sint consectetur ratione fugiat, alias similique voluptatum voluptate fugit, amet consequuntur dolorem corporis suscipit repellat quibusdam!</p>
        </div>
      </div>
      <div>
        <main>
          <article>
            <section>
              <h1 className="colFifth">Lorem Ipsum <span id="rainbow">Color</span> Sit Amet</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, perspiciatis quod. Cupiditate sequi id debitis consequuntur!</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto rem, cupiditate quam fugit dolor consequuntur qui deleniti illum ipsam. Accusamus quaerat suscipit dignissimos maxime.</p>
              <h2 className="colFifth">Lorem ipsum Dolor Sit Amet</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic est sed explicabo quaerat!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta corporis numquam sequi architecto, aut reiciendis eaque dolor dolorum debitis laborum quisquam culpa unde ut quod. Soluta illo rerum in magnam molestiae quidem sequi. Praesentium laborum fugiat explicabo quasi harum cum vel sed possimus!</p>
            </section>
          </article>
        </main>
        <aside>
          <nav>
            <ClearPalette />
            <ExportPalette />
            <SavePalette />
            <LoadPalette />
          </nav>
        </aside>
      </div>
    </div>
  </>
}

export default Design
