import {BrowserRouter as Route, Switch } from "react-router-dom";
import BankInfo from "../BankInfo/BankInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import RequestLoan from "../RequestLoan/RequestLoan";

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