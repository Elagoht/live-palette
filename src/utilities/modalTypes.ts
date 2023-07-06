import store from "../stores"
import { CloseModal, OpenModal, handleColFifth, handleColFirst, handleColFourth, handleColSecond, handleColThird } from "../stores/hooks"
import { IModal } from "../stores/modals"

export const clearModal: IModal = {
  title: "Clear Palette",
  message: "This action will load default colors and your colors will be wiped. You can still export your color palette before cleaning. Do you still want to wipe the palette?",
  options: ["Cancel", "Clear"],
  functions: [
    CloseModal,
    () => {
      handleColFirst("rgb(38, 38, 38)")
      handleColSecond("rgb(196, 196, 196)")
      handleColThird("rgb(238, 238, 238)")
      handleColFourth("rgb(255, 153, 53)")
      handleColFifth("rgb(207, 24, 109)")
      location.reload()
    }
  ]
}
export const saveModal: IModal = {
  title: "Save Palette",
  message: "Saving color palette means overwriting already saved one if there's one. Do you want to continue?",
  options: ["Cancel", "Save"],
  functions: [
    CloseModal,
    () => {
      const states = store.getState()
      localStorage.setItem("SavedColors", JSON.stringify(states.colors))
      CloseModal()
    }
  ]
}

export const loadModal: IModal = {
  title: "Load Palette",
  message: "By loading previously saved palette, you will lose your current palette. You can download it before loading old one. Do you want to continue?",
  options: ["Cancel", "Load Anyway"],
  functions: [
    CloseModal,
    () => {
      console.log(localStorage.getItem("SavedColors"))
      if (localStorage.getItem("SavedColors") === null) {
        CloseModal()
        OpenModal(nothingSavedModal)
        return
      }
      const colors = JSON.parse(localStorage.getItem("SavedColors") as string)
      handleColFirst(colors.colFirst)
      handleColSecond(colors.colSecond)
      handleColThird(colors.colThird)
      handleColFourth(colors.colFourth)
      handleColFifth(colors.colFifth)
      location.reload()
    }
  ]
}

const nothingSavedModal: IModal = {
  title: "Nothing To Load",
  message: "There's nothing to load, you should save one to load.",
  options: ["Okay"],
  functions: [CloseModal]
}
