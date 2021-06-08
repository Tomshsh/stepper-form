import { Button, IconButton, TextField, Typography } from "@material-ui/core";
import { Delete, Done, Edit } from "@material-ui/icons";
import { useEffect, useReducer, useState } from "react";

const BankAccount = (props) => {

    const { account, editMode, setEditting, item, updateAccount: propsUpdateAcc, deleteAccount } = props

    const reducer = (state, action) => {
        switch (action.type) {
            case "event":
                return { ...state, [action.e.target.name]: action.e.target.value }
            case "effect":
                return action.payload
        }
    }
    const [bankAccount, setBankAccount] = useReducer(reducer, { ...account })

    const updateAccount = () => {
        propsUpdateAcc(item, bankAccount)
        setEditting(null)
    }

    const handleInput = e => setBankAccount({type: "event", e})

    useEffect(() => {
        setBankAccount({ type: "effect", payload: account })
    }, [account])


    return (
        <div>
            {
                editMode ?
                    <>
                        <div >
                            <TextField variant="outlined" label="Bank" name="bank" onChange={handleInput} value={bankAccount.bank} />
                            <TextField variant="outlined" label="Branch" name="branch" onChange={handleInput} value={bankAccount.branch} />
                            <TextField variant="outlined" label="Acc. Number" name="accountNumber" onChange={handleInput} value={bankAccount.accountNumber} />
                        </div>
                        <Button startIcon={<Done />} variant="contained" onClick={updateAccount}>Confirm</Button>
                    </>
                    : <div>
                        <Typography>{bankAccount.bank}</Typography>
                        <Typography>{bankAccount.branch}</Typography>
                        <Typography>{bankAccount.accountNumber}</Typography>
                        <IconButton onClick={() => deleteAccount(item)}><Delete /></IconButton>
                        <IconButton onClick={() => setEditting(item)}><Edit /></IconButton>
                    </div>
            }
        </div>
    );
}

export default BankAccount;