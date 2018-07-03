import React, {Component} from 'react';
import classes from './Layout.css';
import Header from '../../components/UI/Header/Header';
import Footer from '../../components/UI/Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header/>
          {
            this.props.children
          }
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Layout;