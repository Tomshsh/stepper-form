import { Divider, makeStyles, TextField, Typography } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useEffect, useReducer, useState } from "react";
import DateFnsUtils from '@date-io/date-fns'

const useStyles = makeStyles(theme => ({
    form: {
        "& .MuiTextField-root": {
            margin: 10,
            color: theme.palette.primary.main
        },

        "& h5": {
            paddingBottom: 20
        },
        "& hr": {
            margin: "30px 0"
        }
    },
    personal: {

    },
    business: {

    }
}))

const PersonalInfo = () => {

    const classes = useStyles()

    const reducer = (state, e) => ({ ...state, [e.target.name]: e.target.value })

    const [form, setInput] = useReducer(reducer, {})
    const [date, setDate] = useState(new Date())

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form className={classes.form}>
                <Typography variant="h5">Personal Info</Typography>
                <div className={classes.personal}>
                    <TextField label="First Name" variant="outlined" name="firstName" onChange={setInput} />
                    <TextField label="Last Name" variant="outlined" name="lastName" onChange={setInput} />
                    <TextField label="ID" type="string" inputMode="numeric" variant="outlined" name="id" onChange={setInput} />
                    <DatePicker label="Birth Date" variant="dialog" disableFuture inputVariant="outlined" name="birthDate" value={date} onChange={setDate} />
                    <TextField label="Phone" type="tel" inputMode="tel" variant="outlined" name="phone" onChange={setInput} />
                    <TextField label="e-Mail" type="email" inputMode="email" variant="outlined" name="eMail" onChange={setInput} />
                </div>
                <Divider />
                <Typography variant="h5">Business Info</Typography>
                <div className={classes.business}>
                    <TextField label="Business Name" variant="outlined" name="businessName" onChange={setInput} />
                    <TextField label="Business Number" type="string" inputMode="numeric" variant="outlined" name="businessNum" onChange={setInput} />
                </div>
            </form>
        </MuiPickersUtilsProvider>
    );
}

export default PersonalInfo;