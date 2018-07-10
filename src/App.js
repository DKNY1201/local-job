import React, { Component, Fragment } from 'react';
import './App.css';
import Expense from "./containers/Expense/Expense";
import Layout from './hoc/Layout/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Switch, Route, Redirect} from 'react-router-dom';
import AddExpense from './components/Expense/AddExpense/AddExpense';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/add-expense" component={AddExpense}/>
        <Route path="/expenses" component={Expense}/>
        <Redirect to="/expenses" />
      </Switch>
    );

    return (
      <Fragment>
        <CssBaseline />
        <div className="App">
          <Layout>
            {routes}
          </Layout>
        </div>
      </Fragment>
    );
  }
}

export default App;
