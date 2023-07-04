import { ArrowRight, Github, Image, Palette } from "lucide-react"

const Design: React.FC = () => {

  return <>
    <header className="shadow-md colFirst">
      <div className="container flex items-center justify-between px-4">
        <div className="text-3xl flex items-center gap-4">
          <Palette size={48} strokeWidth={1.5} /> Color Ipsum
        </div>
        <nav className="flex">
          <a className="h-16 flex items-center px-2">Lorem</a>
          <a className="h-16 flex items-center px-2">Ipsum</a>
          <a className="h-16 flex items-center px-2">Dolor</a>
          <a className="h-16 flex items-center px-2">Sit</a>
          <a className="h-16 flex items-center px-2">Amet</a>
        </nav>
      </div>
    </header>
    <div className="container p-12">
      <div className="grid grid-cols-3 gap-4">
        <div className="mt-10 border-b-4 colThird colFourth p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <div className="-mt-12 colFourth colThird p-2 rounded-full">
            <Palette size={50} strokeWidth={1.25} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum eos minima tenetur sequi? Tempore, sit ipsum. Fuga, doloremque corrupti.</p>
        </div>
        <div className="mt-10 border-b-4 colThird colFourth p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <div className="-mt-12 colFourth colThird p-2 rounded-full">
            <Github size={50} strokeWidth={1.25} />
          </div>
          <p>Star this repository on Github. Uhmm actually mean lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="mt-10 border-b-4 colThird colFourth p-4 rounded-lg shadow-md flex flex-col items-center gap-2">
          <div className="-mt-12 colFourth colThird p-2 rounded-full">
            <Image size={50} strokeWidth={1.25} />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi totam cumque iste illo quia quidem ut vitae.</p>
        </div>
      </div>
      <div className="flex max-md:flex-col-reverse gap-8 mt-10">
        <main className="grow">
          <article>
            <section className="grid gap-4">
              <h1 className="colFifth text-2xl font-bold">Lorem Ipsum COLOR Sit Amet</h1>
              <p className="first-letter:ml-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, perspiciatis quod. Cupiditate sequi id debitis consequuntur!</p>
              <p className="first-letter:ml-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto rem, cupiditate quam fugit dolor consequuntur qui deleniti illum ipsam. Accusamus quaerat suscipit dignissimos maxime.</p>
            </section>
          </article>
        </main>
        <aside className="md:w-64 flex-shrink-0">
          <nav className="grid gap-y-2">
            <a className="colThird colFourth border-b-4 p-2 shadow-md rounded-lg flex items-center gap-2"><ArrowRight />Lorem ipsum dolor sit</a>
            <a className="colThird colFourth border-b-4 p-2 shadow-md rounded-lg flex items-center gap-2"><ArrowRight />Lorem ipsum dolor sit</a>
            <a className="colThird colFourth border-b-4 p-2 shadow-md rounded-lg flex items-center gap-2"><ArrowRight />Lorem ipsum dolor sit</a>
          </nav>
        </aside>
      </div>
    </div>
  </>
}

export default Design
