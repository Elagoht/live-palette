import store from "./index"
import {
  setColFirst,
  setColSecond,
  setColThird,
  setColFourth,
  setColFifth
} from "./Colors"
import { setClipboard } from "./Clipboard"

export const handleColFirst = (state: string) => { store.dispatch(setColFirst(state)) }
export const handleColSecond = (state: string) => { store.dispatch(setColSecond(state)) }
export const handleColThird = (state: string) => { store.dispatch(setColThird(state)) }
export const handleColFourth = (state: string) => { store.dispatch(setColFourth(state)) }
export const handleColFifth = (state: string) => { store.dispatch(setColFifth(state)) }
export const handleClipboard = (state: string) => { store.dispatch(setClipboard(state)) }