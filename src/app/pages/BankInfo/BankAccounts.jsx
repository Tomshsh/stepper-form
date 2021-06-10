import { Button, Grid, Hidden } from "@material-ui/core"
import { Add } from "@material-ui/icons"
import { useEffect, useReducer, useState } from "react"
import BankAccount from "./BankAccount"



const BankAccounts = (props) => {

    const { bankAccounts, setBankAccounts } = props

    const [editting, setEditting] = useState(0)

    const addAccount = () => {
        setBankAccounts(state => {
            setEditting(state.length)
            return [...state, { bank: "", branch: "", accountNumber: "" }]
        })
    }

    const updateAccount = (index, newAccount) => {
        setBankAccounts(state => {
            const newState = [...state]
            newState[index] = newAccount
            return newState
        })
    }
    
    const deleteAccount = (index) => {
        const newAccounts = [...bankAccounts]
        newAccounts.splice(index, 1)
        setBankAccounts(newAccounts)
    }

    useEffect(() => {
        if (!bankAccounts.length) { addAccount() }
    }, [])

    return (
        <Grid container spacing={3}>
            {
                bankAccounts.map((a, i) => (
                    <BankAccount
                        key={i}
                        editMode={editting == i}
                        setEditting={setEditting}
                        item={i}
                        account={a}
                        updateAccount={updateAccount}
                        deleteAccount={deleteAccount}/>
                ))
            }
            {editting == null &&
            <Grid item>
                <Button onClick={addAccount} startIcon={<Add />} color="primary" variant="contained">Add</Button>
            </Grid>
            }

        </Grid>
    );
}

export default BankAccounts;