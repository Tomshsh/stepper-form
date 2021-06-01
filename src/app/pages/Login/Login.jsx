import { Button, Container, IconButton, InputAdornment, makeStyles, TextField, Typography, useTheme } from "@material-ui/core";
import { AccountCircle, Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import { useEffect, useReducer, useState } from "react";
import logo from "../../../misc/BTB-logo.svg"

const useStyles = makeStyles(theme => ({
    container:{
        height:"100%",
        [theme.breakpoints.up("md")]:{
            padding: 200
        }
    },
    subContainer: {
        paddingTop: "60px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        '& img': {
            width: "100%",
            [theme.breakpoints.up('sm')]: {width: 250}
        },
        [theme.breakpoints.up('md')]: {
            boxShadow: "0 20px 43px hsla(0,0%,39.2%,0.05)",
            backgroundColor: theme.palette.background.paper,
            borderRadius: 10,
            overflow: 'hidden',
            padding: "30px 60px"
        }
    },
    logo: {
        paddingBottom: 60,
        flex: "0 0 25%"
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: "0 0 75%",

        '& .MuiFormControl-root': {
            margin: 15,
            width: "100%",
        }
    }
}))

const Login = () => {

    const theme = useTheme()
    const classes = useStyles()

    const formReducer = (state, e) => {
        return { ...state, [e.target.name]: e.target.value }
    }

    const [form, setForm] = useReducer(formReducer, {
        id: "",
        password: ""
    })
    const [passVisible, setPassVisible] = useState(false)

    useEffect(() => {
        console.log(form.password.length)
    }, [form.password])

    return (
        <Container maxWidth="lg" className={classes.container}>
            <div className={classes.subContainer} >
                <div className={classes.logo}>
                    <img src={logo} alt=""></img>
                    <Typography variant="subtitle1">sign in to continue!</Typography>
                </div>
                <form className={classes.loginForm}>
                    <TextField
                        variant="outlined"
                        label="ID"
                        name="id"
                        onChange={setForm}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <AccountCircle />
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        variant="outlined"
                        label="Password"
                        name="password"
                        type={!passVisible ? "password" : "text"}
                        onChange={setForm}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    {form.password.length
                                        ? <IconButton onClick={() => { setPassVisible(state => !state) }}>
                                            {passVisible ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                        : <Lock />}
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button variant="contained" color="primary" fullWidth style={{ marginTop: 40 }}>login</Button>
                </form>
            </div>
        </Container>
    );
}

export default Login;