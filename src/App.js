import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Redirect, Route, Router, Switch } from 'react-router';
import Login from './app/pages/Login/Login.jsx';
import PersonalInfo from './app/pages/PersonalInfo/PersonalInfo';
import BankInfo from './app/pages/BankInfo/BankInfo';
import RequestLoan from './app/pages/RequestLoan/RequestLoan';
import { createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core'
import Form from './app/pages/Form/Form';

let theme = createMuiTheme({})
theme = responsiveFontSizes(theme)


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/form" component={Form} />
            <Redirect from="/" to="/login" />
            <Redirect to="/404"/>
          </Switch>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
