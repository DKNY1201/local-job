import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Expense from "./containers/Expense/Expense";
import Layout from './hoc/Layout/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <div className="App">
          <NavBar/>
          <Layout>
            <Expense/>
          </Layout>
        </div>
      </Fragment>
    );
  }
}

export default App;
