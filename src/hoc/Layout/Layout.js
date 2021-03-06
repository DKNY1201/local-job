import React, {Component} from 'react';
import classes from './Layout.css';
import Header from '../../components/UI/Header/Header';
import Footer from '../../components/UI/Footer/Footer';
import Grid from '@material-ui/core/Grid';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Grid container spacing={24} alignContent="center" justify="center">
          <Grid item xs={12} >
              <Header/>
		          {
			          this.props.children
		          }
              <Footer/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Layout;