import { Button, Divider, makeStyles, Slider, TextField, Typography } from "@material-ui/core"
import { useState } from "react"
import TitleInput from "../../components/titleInput/TitleInput"
import clsx from "clsx"
import { Add } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
    form: {
        "& .MuiTextField-root": {
            margin: "0 10px 10px 0",
            color: theme.palette.primary.main
        },
        "& hr": {
            margin: "30px 0"
        },
    },
    paddingBottom: {
        paddingBottom: 20
    },
    shareInput: {
        width: 100,
    },
    shareSection: {
        display: "flex",
    },
    titleInput: {
        color: theme.palette.text.secondary,
        margin: "0 10px",
        paddingBottom: "0px !important",
        borderBottom: "1px solid",
        width: 60
    },
    duplicable: {}
}))

const BankInfo = () => {


    const bankAccount = {
        bank: "",
        branch: "",
        accountNumber: ""
    }

    const [shareVal, setShareVal] = useState(0)
    const handleShareInput = (e) => {
        let val = e.target.value
        val = val > 100 ? 100 : val < 0 ? 0 : val
        setShareVal(val)
    }
    const handleShareSlider = (e, newValue) => { setShareVal(newValue) }


    const [bankAccounts, setBankAccounts] = useState([])
    const [edited, setEdited] = useState(0)
    const [editting, setEditting] = useState(true)

    const addAccount = () => {
        setBankAccounts(state => [...state, { ...bankAccount }])
    }

    const editAccount = (e, i) => {
        setBankAccounts(state => {
            const account = { ...bankAccount }
            const newState = [...state]
            account[e.target.name] = e.target.value
            newState[edited] = account
            return newState
        })
    }

    const classes = useStyles()

    return (
        <form className={classes.form}>
            <div className={clsx(classes.shareSection, classes.paddingBottom)}>
                <Typography variant="h5" id="share-slider">Share</Typography>
                <TitleInput
                    value={{ title: shareVal, value: shareVal }}
                    onChange={handleShareInput}
                    className={classes.titleInput}
                    inputProps={{ min: 0, max: 100, 'aria-labelledby': 'share-slider' }}
                    type="number"
                />
                <Typography variant="h5" style={{ color: "rgb(0,0,0,0.4)" }}>%</Typography>
            </div>
            <Slider
                label="Share"
                name="share"
                type="number"
                aria-labelledby="share-slider"
                value={shareVal}
                onChange={handleShareSlider} />
            <Divider />
            <Typography variant="h5" className={classes.paddingBottom}>Bank Accounts</Typography>
            {
                bankAccounts.map((a, i) => (
                    <></>
                ))
            }
            {
                editting &&
                <>
                    <div className={classes.duplicable}>
                        <TextField variant="outlined" label="Bank" name="bank" />
                        <TextField variant="outlined" label="Branch" name="branch" />
                        <TextField variant="outlined" label="Acc. Number" name="account" />
                    </div>
                    <Button startIcon={<Add/>} color="primary" variant="contained">Add</Button>
                </>
            }
        </form>
    )
}

export default BankInfo