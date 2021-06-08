import { Divider, makeStyles, Slider, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import TitleInput from "../../components/titleInput/TitleInput"
import clsx from "clsx"
import BankAccounts from "./BankAccounts"

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
}))

const BankInfo = () => {

    const [shareVal, setShareVal] = useState(0)
    const handleShareInput = (e) => {
        let val = e.target.value
        val = val > 100 ? 100 : val < 0 ? 0 : val
        setShareVal(val)
    }
    const handleShareSlider = (e, newValue) => { setShareVal(newValue) }

    const [bankAccounts, setBankAccounts] = useState([])

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
            <BankAccounts bankAccounts={bankAccounts} setBankAccounts={setBankAccounts} />
        </form>
    )
}

export default BankInfo