import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Login from './app/pages/Login/Login.jsx';
import { createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core'
import Form from './app/pages/Form/Form';

let theme = createMuiTheme({
  palette: {
    background: { default: '#f8f9fc' },
    text: { secondary: 'rgb(0,0,0,0.4)' },
    //divider: '#addced'
  },
  typography: {
    // allVariants: { color: "#ffffff" },
    'subtitle1': { fontSize: 17, color: 'rgb(0,0,0,0.5)',  fontWeight: 600, textTransform:'capitalize'  },
    'subtitle2': { color: 'rgb(0,0,0,0.8)' },
    caption: { fontSize: 15, color: 'rgb(0,0,0,0.5)', fontWeight: 600, textTransform: 'uppercase' },
    h1: { fontSize: 80, fontWeight: 'bold' },
    h3: { fontWeight: 'bold' },
    h4: { fontWeight: 'bold' },
    h5: { fontWeight: 'bold' }

  },
})
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
            <Redirect to="/404" />
          </Switch>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
