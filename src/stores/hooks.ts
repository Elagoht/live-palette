import store, { RootState } from "./index"
import {
  setColFirst,
  setColSecond,
  setColThird,
  setColFourth,
  setColFifth
} from "./colors"

import { IModal, ModalState, closeModal, openModal } from "./modals"
import { useSelector } from "react-redux"

export const handleColFirst: (state: string) => void = (state: string) => store.dispatch(setColFirst(state))
export const handleColSecond: (state: string) => void = (state: string) => store.dispatch(setColSecond(state))
export const handleColThird: (state: string) => void = (state: string) => store.dispatch(setColThird(state))
export const handleColFourth: (state: string) => void = (state: string) => store.dispatch(setColFourth(state))
export const handleColFifth: (state: string) => void = (state: string) => store.dispatch(setColFifth(state))

export const useModals: () => ModalState = () => useSelector((store: RootState) => store.modal)
export const OpenModal: (state: IModal) => void = (state: IModal) => store.dispatch(openModal(state))
export const CloseModal: () => void = () => store.dispatch(closeModal())