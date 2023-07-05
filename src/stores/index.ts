import { configureStore } from "@reduxjs/toolkit"
import Colors from "./Colors"
import Clipboard from "./Clipboard"

const store = configureStore({
    reducer: {
        Colors,
        Clipboard
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;