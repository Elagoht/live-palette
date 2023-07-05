import { configureStore } from "@reduxjs/toolkit"
import colors from "./colors"
import modal from "./modals"

const store = configureStore({
    reducer: {
        colors,
        modal
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;