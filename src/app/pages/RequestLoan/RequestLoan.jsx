import { Container, InputAdornment, makeStyles, Slider, Typography } from "@material-ui/core";
import { Money } from "@material-ui/icons";
import { useMemo, useState } from "react";
import TitleInput from "../../components/titleInput/TitleInput"

const useStyles = makeStyles(theme => ({
    wrapper: {
        position: "absolute",
        inset: "0",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    container: {
        height:"60%"
    },
    amount: {
        padding: theme.spacing(3)
    },
    timeSpan: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(3)
    },
    amountInput: {
        paddingTop: 30,
        color: theme.palette.text.secondary,
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

    const [amount, setAmount] = useState(100000)
    const getDelimitedNum = (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    const amountString = useMemo(() => getDelimitedNum(amount), [amount])

    const handleAmountChange = e => setAmount(e.target.value)

    const [timeSpan, setTimeSpan] = useState(4)

    const handleSlider = (e, newValue) => setTimeSpan(newValue)
    const handleInput = e => setTimeSpan(e.target.value)

    return (
        <div className={classes.wrapper}>
            <Container className={classes.container} maxWidth="xs">
                <div className={classes.amount}>
                    <Typography id="amount" variant="h5">Specify an Amount</Typography>
                    <TitleInput
                        value={{ title: amountString, value: amount }}
                        onChange={handleAmountChange}
                        type="number"
                        className={classes.amountInput}
                        inputProps={{
                            min: 100000, max: 8000000, 'aria-lebelledby': 'amount'
                        }}
                        endAdornment={
                            <InputAdornment><Money /></InputAdornment>
                        }
                    />
                </div>
                <div className={classes.timeSpan}>
                    <div style={{ display: "flex" }}>
                        <Typography id="timeSpan-slider" variant="h5">over</Typography>
                        <TitleInput
                            value={{ title: timeSpan, value: timeSpan }}
                            onChange={handleInput}
                            className={classes.titleInput}
                            inputProps={{
                                min: 4, max: 8, 'aria-labelledby': 'timeSpan-slider',
                            }}
                            type="number"
                        />
                        <Typography variant="h5">years</Typography>
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
            </Container>
        </div>
    );
}

export default RequestLoan;