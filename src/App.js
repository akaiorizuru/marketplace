import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {BrowserRoute as Router, Route} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Router>
        <header>Navigation</header>
        <Button variant="contained" color="secondary">Test</Button>
      </Router>

      
    )
  }
}

export default App;
