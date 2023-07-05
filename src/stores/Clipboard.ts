import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IClipboard = {
  clipboard: string
}

const initialState: IClipboard = {
  clipboard: localStorage["clipboard"] ? localStorage["clipboard"] : "rgb(32, 32, 32)"
}

const Clipboard = createSlice({
  name: "clipboard",
  initialState,
  reducers: {
    setClipboard: (state: IClipboard, actions: PayloadAction<string>) => {
      state.clipboard = actions.payload; localStorage.setItem("clipboard", actions.payload)
    },
  }
})

export const { setClipboard } = Clipboard.actions

export default Clipboard.reducer
