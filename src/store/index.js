import { configureStore } from "@reduxjs/toolkit";
import data from './slices/data.slice.js'

export default configureStore ({
    reducer: {
        data
    }
})