import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    share: "",
    bankAccounts: [{
        bank:"",
        branch: "",
        accountNumber: ""
    }]
}

const bankDetailsSlice = createSlice({
    name: "bankDetails",
    initialState,
    reducers: {
        accountAdded(state, action){
            state.bankAccounts.push(action.payload)
        },
        accountRemoved(state, action){
            state.bankAccounts.splice(action.payload, 1)
        },
        accountEdited(state, action){
            state.bankAccounts[action.payload.index] = action.payload.account
        },
        shareChanged(state, action){
            state.share = action.payload
        }

    }
})

export const {accountAdded, accountEdited, accountRemoved} = bankDetailsSlice.actions

export default bankDetailsSlice.reducer