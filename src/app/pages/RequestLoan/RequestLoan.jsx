import { makeStyles, Slider, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import TitleInput from "../../components/titleInput/TitleInput"

const useStyles = makeStyles(theme => ({
    container: {
    },
    amount: {
        padding: theme.spacing(3)
    },
    timeSpan: {
        display: "flex",
        padding: theme.spacing(3)
    },
    titleInput: {
        color: theme.palette.text.secondary,
        margin: "0 10px",
        paddingBottom: "0px !important",
        borderBottom: "1px solid",
        width: 60
    }
}))

const RequestLoan = () => {

    const classes = useStyles()

    const [amount, setAmount] = useState()
    const [timeSpan, setTimeSpan] = useState(4)

    const handleSlider = (e, newValue) => setTimeSpan(newValue)
    const handleInput = e => setTimeSpan(e.target.value)

    return (
        <div className={classes.container}>
            <div className={classes.amount}>
                <Typography variant="h5">Specify an Amount</Typography>
                <TextField></TextField>
            </div>
            <div className={classes.timeSpan}>
                <Typography id="timeSpan-slider" variant="h5">over</Typography>
                <TitleInput
                    value={{ title: timeSpan, value: timeSpan }}
                    onChange={handleInput}
                    className={classes.titleInput}
                    inputProps={{ min: 4, max: 8, 'aria-labelledby': 'timeSpan-slider' }}
                    type="number"
                />
            </div>
            <Slider
                label="Time Span"
                name="timeSpan"
                type="number"
                aria-labelledby="timeSpan-slider"
                value={timeSpan}
                min={4}
                step={0.1}
                max={8}
                onChange={handleSlider}
            />
        </div>
    );
}

export default RequestLoan;