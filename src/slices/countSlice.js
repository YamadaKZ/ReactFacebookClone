import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    showNum: true
}

const counterSlice = createSlice ({
    name:'count',
    initialState: initialState,
    reducers: {
        countNumber(state) {
            state.counter++;
        },
        SubNumber(state) {
            state.counter--;
        },
        ResetNumber(state) {
            state.counter = 0;
        }
    }
})

export const {countNumber, SubNumber, ResetNumber} = counterSlice.actions;

export default counterSlice.reducer;