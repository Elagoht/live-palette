import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IColors {
  colFirst: string
  colSecond: string
  colThird: string
  colFourth: string
  colFifth: string
}

const initialState: IColors = {
  colFirst: localStorage["colFirst"] ? localStorage["colFirst"] : "rgb(38, 38, 38)",
  colSecond: localStorage["colSecond"] ? localStorage["colSecond"] : "rgb(196, 196, 196)",
  colThird: localStorage["colThird"] ? localStorage["colThird"] : "rgb(238, 238, 238)",
  colFourth: localStorage["colFourth"] ? localStorage["colFourth"] : "rgb(255, 153, 53)",
  colFifth: localStorage["colFifth"] ? localStorage["colFifth"] : "rgb(207, 24, 109)",
}

const colors = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setColFirst: (state: IColors, actions: PayloadAction<string>) => { state.colFirst = actions.payload; localStorage.setItem("colFirst", actions.payload) },
    setColSecond: (state: IColors, actions: PayloadAction<string>) => { state.colSecond = actions.payload; localStorage.setItem("colSecond", actions.payload) },
    setColThird: (state: IColors, actions: PayloadAction<string>) => { state.colThird = actions.payload; localStorage.setItem("colThird", actions.payload) },
    setColFourth: (state: IColors, actions: PayloadAction<string>) => { state.colFourth = actions.payload; localStorage.setItem("colFourth", actions.payload) },
    setColFifth: (state: IColors, actions: PayloadAction<string>) => { state.colFifth = actions.payload; localStorage.setItem("colFifth", actions.payload) },
  }
})

export const {
  setColFirst,
  setColSecond,
  setColThird,
  setColFourth,
  setColFifth,
} = colors.actions

export default colors.reducer
