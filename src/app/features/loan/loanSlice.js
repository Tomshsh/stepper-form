import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 100000,
    timeSpan: 4
}

const loanSlice = createSlice({
    name: "loan",
    initialState,
    reducers: {
        requestMade(state, payload){
            state = payload.action
        }
    }
})

export const {requestMade} = loanSlice.actions

export default loanSlice.reducer