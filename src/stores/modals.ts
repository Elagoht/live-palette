import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IModal {
  title: string
  message: string
  options: string[]
  functions: React.MouseEventHandler<HTMLButtonElement>[]
}

export type ModalState = {
  modal: IModal[]
}

const initialState: ModalState = {
  modal: []
}

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, actions: PayloadAction<IModal>) => {
      state.modal = [actions.payload]
    },
    closeModal: (state) => {
      state.modal = []
    }
  }
})

export const {
  openModal,
  closeModal
} = modal.actions

export default modal.reducer
