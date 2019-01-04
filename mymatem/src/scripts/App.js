import React, {Component, Fragment} from 'react';
import '../css/App.css';
import Header from '../scripts/Header/Header'
import Footer from '../scripts/Footer/Footer'
import Main from '../scripts/main/main'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
