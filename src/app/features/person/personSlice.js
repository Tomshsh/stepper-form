import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    firstName: "",
    lastName: "",
    id: "",
    birthDate: "",
    phone: "",
    eMail:"",
    business: {
        name: "",
        number: ""
    }
}

const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        personChanged(state, action){
            state = action.payload
        }
    }
})


export const {personChanged} = personSlice.actions

export default personSlice.reducer