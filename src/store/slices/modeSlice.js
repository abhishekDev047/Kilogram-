import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
    name: 'mode',
    initialState: {
        value:'light'
    },
    reducers:{
        darkMode: state=>{
            state.value = 'dark'
        },
        lightMode: state=>{
            state.value = 'light'
        }
    }
});

export const {darkMode, lightMode} = modeSlice.actions;

export default modeSlice.reducer;