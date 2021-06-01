import { Button, ButtonGroup, Container, makeStyles, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { BrowserRouter as Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import BankInfo from "../BankInfo/BankInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import RequestLoan from "../RequestLoan/RequestLoan";

const useStyles = makeStyles(theme => ({
    container: {
        height: "100%",
    },
    subContainer: {
        display: "flex",
        height: "100%"
    },
    stepperContainer: {
        flex: "0 0 5%",
        padding: '20px 0',
        backgroundColor: "transparent",
        height: "100%"
    },
    page: {
        flex: "0 0 95%",
    },
    content:{
        padding: 10,

        '& h3': {
            marginBottom: 20,
            textTransform: "capitalize"
        }
    },
    controllers: {
        width: "100%",
        justifyContent: "flex-end",
        padding: 10,
    },
    nextBtn: {
    }
}))


const Form = () => {

    const classes = useStyles()
    const [currentStep, setCurrentStep] = useState(0)
    let { path, url } = useRouteMatch()
    const history = useHistory()

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
        <Container className={classes.container}>
            <div className={classes.subContainer}>
                <Stepper activeStep={currentStep} className={classes.stepperContainer} orientation="vertical">
                    {steps.map((s) => (
                        <Step key={s.title}>
                            <StepLabel />
                        </Step>
                    ))}
                </Stepper>
                <div className={classes.page}>
                    <div className={classes.content}>
                        <Typography variant="h3">{steps[currentStep].title}</Typography>
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