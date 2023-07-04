import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IColors {
  colFirst: string
  colSecond: string
  colThird: string
  colFourth: string
  colFifth: string
}

const initialState: IColors = {
  colFirst: localStorage["colFirst"] ? localStorage["colFirst"] : "#323232",
  colSecond: localStorage["colSecond"] ? localStorage["colSecond"] : "#323232",
  colThird: localStorage["colThird"] ? localStorage["colThird"] : "#323232",
  colFourth: localStorage["colFourth"] ? localStorage["colFourth"] : "#323232",
  colFifth: localStorage["colFifth"] ? localStorage["colFifth"] : "#323232",
}

const Colors = createSlice({
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
} = Colors.actions

export default Colors.reducer
