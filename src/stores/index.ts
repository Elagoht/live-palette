import { configureStore } from "@reduxjs/toolkit"
import Colors from "./Colors"

const store = configureStore({
    reducer: {
        Colors
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;