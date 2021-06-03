import { Button, ButtonGroup, Container, makeStyles, Step, StepLabel, Stepper, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { useEffect, useState } from "react";
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
            backgroundColor: theme.palette.background.paper,
            borderRadius: 10,
            overflow: 'hidden',
            padding: "30px 60px"
        }
    },
    stepperContainer: {
        flex: "0 0 5%",
        padding: '20px 0',
        backgroundColor: "transparent",
        height: "100%",
        [theme.breakpoints.up("md")]: {
            flex: "0 0 25%",
            "& h5": {
                textTransform: "capitalize"
            }
        }
    },
    page: {
        flex: "0 0 95%",
        position: "relative",
        padding: '20px 30px',
        [theme.breakpoints.up("md")]: {
            flex: "0 0 75%"
        }
    },
    content: {
        '& h3': {
            marginBottom: 20,
            textTransform: "capitalize"
        }
    },
    controllers: {
        width: "100%",
        justifyContent: "flex-end",
        padding: "0 60yypx 20px 0",
        position: "absolute",
        bottom: 0
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

    const nextStep = () => {
        setCurrentStep(state => state + 1)
    }

    useEffect(() => {
        history.push(steps[currentStep].path)
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
                <div className={classes.page}>
                    <div className={classes.content}>
                        {!wideScreen && <Typography variant="h3">{steps[currentStep].title}</Typography>}
                        <Switch>
                            {steps.map(s => (
                                <Route path={s.path}  >
                                    {s.component}
                                </Route>

                            ))}
                        </Switch>
                    </div>
                    <ButtonGroup className={classes.controllers}>
                        <Button className={classes.nextBtn} variant="contained" onClick={nextStep}>Next</Button>
                    </ButtonGroup>
                </div>
            </div>
        </Container>
    );
}

export default Form;