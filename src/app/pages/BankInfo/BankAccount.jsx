import { Button, Grid, IconButton, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { Cancel, Delete, Done, Edit } from "@material-ui/icons";
import { useEffect, useReducer, useState } from "react";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between"
    },
    row: {

    }
}))

const BankAccount = (props) => {

    const classes = useStyles()

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

    const handleInput = e => setBankAccount({ type: "event", e })

    useEffect(() => {
        setBankAccount({ type: "effect", payload: account })
    }, [account])


    return (
        <Grid item xs={12}>
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
                    :
                    <Paper className={classes.paper}>
                        <div>
                            <div className={classes.row}>
                                <Typography variant="caption">{bankAccount.branch}</Typography>
                                <Typography variant="h5" component="span"> /{bankAccount.accountNumber}</Typography>
                            </div>
                            <Typography variant="caption">{bankAccount.bank}</Typography>
                        </div>
                        <div>
                            <IconButton onClick={() => deleteAccount(item)}><Delete /></IconButton>
                            <IconButton onClick={() => setEditting(item)}><Edit /></IconButton>
                        </div>
                    </Paper>
            }
        </Grid>
    );
}

export default BankAccount;