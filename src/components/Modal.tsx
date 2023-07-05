import { CloseModal, useModals } from "../stores/hooks"
import { motion } from "framer-motion"

const Modal: React.FC = () => {

  const modalData = useModals().modal
  if (modalData.length === 0) return
  const { title, message, options, functions } = modalData[0]

  return <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="cursor-pointer top-0 left-0 right-0 bottom-0 fixed z-10 bg-opacity-75 bg-neutral-950 flex items-center justify-center"
    onClick={(event) => {
      if (event.target == event.currentTarget) CloseModal()
    }}
  >
    <motion.div
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="flex flex-col min-w-[300px] max-w-lg cursor-default"
    >
      <div className="py-2 px-4 font-bold rounded-t-lg colFirst ">{title}</div>
      <div className="py-2 px-4 colSecond bg-none">{message}</div>
      <div className="py-2 px-4 flex gap-2 justify-end colSecond bg-none rounded-b-lg">
        {options.map((option, index) => (
          <button
            onClick={functions[index]}
            className="colFifth colThird px-2 py-1 rounded-lg"
            key={index}
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  </motion.span>
}

export default Modal
