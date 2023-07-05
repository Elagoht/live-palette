import Controller from "./components/Controller"
import Design from "./components/Design"
import Modal from "./components/Modal"
import Style from "./components/Style"
import { useModals } from "./stores/hooks"

const App: React.FC = () => {

  const modal = useModals()

  return <>
    <Style />
    <Controller />
    <Design />
    {modal && <Modal />}
  </>
}

export default App
