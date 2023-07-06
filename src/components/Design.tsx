import { Github, Image, Paintbrush, Palette } from "lucide-react"
import ClearPalette from "./ClearPalette"
import ExportPalette from "./ExportPalette"
import SavePalette from "./SavePalette"
import LoadPalette from "./LoadPalette"
import { motion } from "framer-motion"
import { animOpacity, animPosition, animContainer } from "../animations"

const Design: React.FC = () => {

  return <>
    <header className="colFirst">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animContainer}
      >
        <motion.div
          variants={animOpacity}
        >
          <Palette size={48} strokeWidth={1.5} /> Live Palette!
        </motion.div>
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={animContainer}
        >
          <motion.a variants={animOpacity}>Lorem</motion.a>
          <motion.a variants={animOpacity}>Ipsum</motion.a>
          <motion.a variants={animOpacity}>Dolor</motion.a>
          <motion.a variants={animOpacity}>Sit</motion.a>
          <motion.a variants={animOpacity}>Amet</motion.a>
        </motion.nav>
      </motion.div>
    </header>
    <div>
      <motion.div
        variants={animContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={animPosition}
          className="colThird colFourth"
        >
          <div className="colFourth colThird">
            <Paintbrush className="colFifth" size={50} strokeWidth={1.25} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum eos minima tenetur sequi? Tempore, sit ipsum. Fuga, doloremque corrupti.</p>
        </motion.div>
        <motion.div
          variants={animPosition}
          className="colThird colFourth"
        >
          <div className="colFourth colThird">
            <Github className="colFifth" size={50} strokeWidth={1.25} />
          </div>
          <p>Star this repository on <a className="colFifth" href="https://github.com/Elagoht/live-palette">Github</a>. Uhmm actually mean lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </motion.div>
        <motion.div
          variants={animPosition}
          className="colThird colFourth"
        >
          <div className="colFourth colThird">
            <Image className="colFifth" size={50} strokeWidth={1.25} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam porro mollitia totam sint consectetur ratione fugiat, alias similique voluptatum voluptate fugit, amet consequuntur dolorem corporis suscipit repellat quibusdam!</p>
        </motion.div>
      </motion.div>
      <div>
        <main>
          <article>
            <motion.section
              initial="hidden"
              animate="visible"
              variants={animContainer}
            >
              <motion.h1 variants={animPosition} className="colFifth">Lorem Ipsum <span id="rainbow">Color</span> Sit Amet</motion.h1>
              <motion.p variants={animPosition}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, perspiciatis quod. Cupiditate sequi id debitis consequuntur!</motion.p>
              <motion.p variants={animPosition}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto rem, cupiditate quam fugit dolor consequuntur qui deleniti illum ipsam. Accusamus quaerat suscipit dignissimos maxime.</motion.p>
              <motion.h2 variants={animPosition} className="colFifth">Lorem ipsum Dolor Sit Amet</motion.h2>
              <motion.p variants={animPosition}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic est sed explicabo quaerat!</motion.p>
              <motion.p variants={animPosition}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta corporis numquam sequi architecto, aut reiciendis eaque dolor dolorum debitis laborum quisquam culpa unde ut quod. Soluta illo rerum in magnam molestiae quidem sequi. Praesentium laborum fugiat explicabo quasi harum cum vel sed possimus!</motion.p>
            </motion.section>
          </article>
        </main>
        <aside>
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={animContainer}
          >
            <ClearPalette />
            <ExportPalette />
            <SavePalette />
            <LoadPalette />
          </motion.nav>
        </aside>
      </div>
    </div>
  </>
}

export default Design
