import { Switch } from "react-router";

const Form = () => {
    return (
        <Switch>
            <Route path="/personal-details" component={PersonalInfo} />
            <Route path="/bank-details" component={BankInfo} />
            <Route path="/request-loan" component={RequestLoan} />
        </Switch>
    );
}

export default Form;