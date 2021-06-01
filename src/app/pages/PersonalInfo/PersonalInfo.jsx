import { makeStyles, TextField } from "@material-ui/core";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    form: {
        "& .MuiTextField-root": {
            margin: 10,
            color: theme.palette.primary.main
        }
    }
}))

const PersonalInfo = () => {

    const classes = useStyles()

    const reducer = (state, e) => ({ ...state, [e.target.name]: e.target.value })

    const [form, setInput] = useReducer(reducer,{})

    return (

        <form className={classes.form}>
            <TextField label="First Name" variant="outlined" name="firstName" onChange={setInput} color="secondary" />
            <TextField label="Last Name" variant="outlined" name="lastName" onChange={setInput} color="secondary" />
            <TextField label="ID" type="number" variant="outlined" name="id" onChange={setInput} color="secondary" />
            <TextField label="Birth Date" type="date" variant="outlined" name="birthDate" onChange={setInput} color="secondary" />
            <TextField label="Phone" type="tel" variant="outlined" name="phone" onChange={setInput} color="secondary" />
            <TextField label="e-Mail" type="email" variant="outlined" name="eMail" onChange={setInput} color="secondary" />
            <TextField label="Business Name" variant="outlined" name="businessName" onChange={setInput} color="secondary" />
            <TextField label="Business Number" type="number" variant="outlined" name="businessNum" onChange={setInput} color="secondary" />
        </form>
    );
}

export default PersonalInfo;