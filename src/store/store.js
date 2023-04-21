import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './slices/modeSlice';

export const store = configureStore({
    reducer:{
        mode: modeReducer
    }
});