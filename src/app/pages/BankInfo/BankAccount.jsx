import { Button, Grid, IconButton, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { Cancel, Delete, Done, Edit } from "@material-ui/icons";
import { useEffect, useReducer, useState } from "react";
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        transition: "height 0.5s ease"
    },
    deletedItem: {
        height: 0
    },
    row: {
        display: "flex",
        alignItems: "baseline"
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column"
    },
    info: {
        justifyContent: "center"
    },
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
            default:
                return state
        }
    }
    const [bankAccount, setBankAccount] = useReducer(reducer, { ...account })

    const [deleted, setDeleted] = useState(false)
    const [created, setCreated] = useState(false)

    const updateAccount = () => {
        propsUpdateAcc(item, bankAccount)
        setEditting(null)
    }

    const deleteItem = () => {
        setDeleted(true)
        deleteAccount(item)
    }

    const handleInput = e => setBankAccount({ type: "event", e })

    useEffect(() => {
        setBankAccount({ type: "effect", payload: account })
    }, [account])


    return (
        <Grid item sm={12} md={6}>
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
                    <Paper className={clsx(classes.paper, {[classes.deletedItem]: deleted})}>
                        <div className={clsx(classes.flexColumn,classes.info)}>
                            <div className={classes.row}>
                                <Typography variant="caption">{bankAccount.branch}</Typography>
                                <Typography variant="h6" component="span"> /{bankAccount.accountNumber}</Typography>
                            </div>
                            <Typography variant="caption">{bankAccount.bank}</Typography>
                        </div>
                        <div className={clsx(classes.flexColumn)}>
                            <IconButton onClick={deleteItem}><Delete /></IconButton>
                            <IconButton onClick={() => setEditting(item)}><Edit /></IconButton>
                        </div>
                    </Paper>
            }
        </Grid>
    );
}

export default BankAccount;