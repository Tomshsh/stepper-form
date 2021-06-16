import { Button, ButtonGroup, Container, makeStyles, Step, StepLabel, Stepper, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import BankInfo from "../BankInfo/BankInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import RequestLoan from "../RequestLoan/RequestLoan";

const useStyles = makeStyles(theme => ({
    container: {
        height: "100%",
        [theme.breakpoints.up("md")]: {
            paddingTop: 100, paddingBottom: 100
        }
    },
    subContainer: {
        display: "flex",
        height: "100%",
        [theme.breakpoints.up("md")]: {
            boxShadow: "0 20px 43px hsla(0,0%,39.2%,0.05)",
            backgroundColor: "rgb(255, 255, 255, 0.8)",
            borderRadius: 10,
            overflow: 'hidden',
            padding: "30px 60px"
        }
    },
    stepperContainer: {
        flex: "0 0 5%",
        padding: '20px 0',
        backgroundColor: "transparent",
        maxHeight: "100vh",
        [theme.breakpoints.up("md")]: {
            flex: "0 0 25%",
            "& h5": {
                textTransform: "capitalize"
            }
        }
    },
    scrollContainer: {
        flex: "0 0 95%",
        minHeight: "100%",
        overflowY: "scroll",
        [theme.breakpoints.up("md")]: {
            flex: "0 0 75%",
            overflowY: "hidden"
        }
    },
    page: {
        padding: '20px 30px 50px 10px',
        minHeight: "100%",
        position: "relative",
    },
    content: {
        '& h4': {
            marginBottom: 20,
            textTransform: "capitalize"
        }
    },
    controllers: {
        width: "100%",
        justifyContent: "flex-end",
        position: "absolute",
        padding: "0 30px 10px",
        bottom: 0, left: 0, right: 0
    },
    nextBtn: {
    }
}))


const Form = () => {

    const classes = useStyles()
    const [currentStep, setCurrentStep] = useState(0)
    let { path, url } = useRouteMatch()
    const history = useHistory()
    const theme = useTheme()
    const wideScreen = useMediaQuery(theme.breakpoints.up("md"))

    const steps = [
        { title: 'personal & company details', path: `${path}/personal-details`, component: <PersonalInfo /> },
        { title: 'bank account details', path: `${path}/bank-details`, component: <BankInfo /> },
        { title: 'request-loan', path: `${path}/request-loan`, component: <RequestLoan /> }
    ]

    const lastStep = useMemo(() => currentStep === (steps.length - 1), [currentStep, steps.length])

    const nextStep = () => {
        setCurrentStep(state => state + 1)
    }

    const submitForm =() => {}

    useEffect(() => {
        history.push(steps[currentStep].path)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentStep])

    return (
        <Container className={classes.container} maxWidth="lg">
            <div className={classes.subContainer}>
                <Stepper activeStep={currentStep} className={classes.stepperContainer} orientation="vertical">
                    {steps.map((s) => (
                        <Step key={s.title}>
                            <StepLabel>
                                {wideScreen && <Typography variant="h5">{s.title}</Typography>}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div className={classes.scrollContainer}>
                    <div className={classes.page}>
                        <div className={classes.content}>
                            {!wideScreen && <Typography variant="h4">{steps[currentStep].title}</Typography>}
                            <Switch>
                                {steps.map(s => (
                                    <Route key={s.title} path={s.path}  >
                                        {s.component}
                                    </Route>

                                ))}
                            </Switch>
                        </div>
                        <ButtonGroup className={classes.controllers}>
                            {lastStep 
                                ? <Button variant="contained" fullWidth={!wideScreen} onClick={submitForm}>Submit</Button>
                                : <Button className={classes.nextBtn} variant="contained" fullWidth={!wideScreen} onClick={nextStep}>Next</Button>}
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Form;