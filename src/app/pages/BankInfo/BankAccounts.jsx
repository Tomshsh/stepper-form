import { Button, IconButton, TextField, Typography } from "@material-ui/core"
import { Add, ConfirmationNumber, Delete, Edit } from "@material-ui/icons"
import { useReducer, useState } from "react"



const BankAccounts = (props) => {

    const {bankAccounts, setBankAccounts} = props

    const [edited, setEdited] = useState(0)
    const [editting, setEditting] = useState(true)

    const reducer = (state, e) => ({ ...state, [e.target.name]: e.target.value })

    const [bankAccount, setBankAccount] = useReducer(reducer, {
        bank: "",
        branch: "",
        accountNumber: ""
    })
    const addAccount = () => {
        setBankAccounts(state => [...state, { ...bankAccount }])
    }

    const editAccount = (e, i) => {
        setBankAccounts(state => {
            const account = { ...state[i] }
            const newState = [...state]
            account[e.target.name] = e.target.value
            newState[edited] = account
            return newState
        })
    }

    return (
        <>
            {
                bankAccounts.map((a, i) => (
                    <>
                        <Typography>{a.bank}</Typography>
                        <Typography>{a.branch}</Typography>
                        <Typography>{a.accountNumber}</Typography>
                        <IconButton><Delete /></IconButton>
                        <IconButton><Edit /></IconButton>
                    </>
                ))
            }
            {
                editting &&
                <>
                    <div >
                        <TextField variant="outlined" label="Bank" name="bank" onChange={setBankAccount} />
                        <TextField variant="outlined" label="Branch" name="branch" onChange={setBankAccount} />
                        <TextField variant="outlined" label="Acc. Number" name="accountNumber" onChange={setBankAccount} />
                    </div>
                    <Button startIcon={<ConfirmationNumber />} variant="contained" onClick={addAccount}>Confirm</Button>
                    <Button startIcon={<Add />} color="primary" variant="contained">Add</Button>
                </>
            }
        </>
    );
}

export default BankAccounts;