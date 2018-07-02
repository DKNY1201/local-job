import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Expense from "./containers/Expense/Expense";
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Layout/>
        <Expense/>
      </div>
    );
  }
}

export default App;
