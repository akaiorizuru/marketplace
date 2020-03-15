// import React, { Component } from 'react';
// import * as ROUTES from './constants/Routes';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './components/Home/Home';
// import Navigation from './components/Navigation/Navigation';
// import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SingnUp/SingnUp.js';
// import './App.css';
// // import { withAuthorizationProvider } from './Authorization';
// // import { withArticleProvider } from './components/Panier/Article';
// import Panier from "./components/Panier/Panier";



// class App extends Component {
//   render () {
//     return (
//         <Router>
//           <Navigation/>
//                 <Route exact path={ ROUTES.LANDING }>
//                   <Home />
//                 </Route>
//                 <Route exact path={ ROUTES.SIGNIN }>
//                   <SignIn/>
//                 </Route>
//                 <Route exact path={ ROUTES.SIGNUP }>
//                   <SignUp/>
//                 </Route>
//                 <Route path={ ROUTES.PANIER }>
//                   <Panier />
//                 </Route>
//         </Router>
//     );
//   }
  
// }

// export default App;

// import React from 'react';
// import './App.css';
// import Home from './components/Home/Home';
// import Navigation from './components/Navigation/Navigation';
// import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SingnUp/SingnUp.js';
// import { Route, BrowserRouter } from 'react-router-dom';
// import { Container } from '@material-ui/core';
// import { AutorizationProvider } from './Autorization';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import { purple } from '@material-ui/core/colors';

// const theme = createMuiTheme({
// 	palette: {
// 		primary: {
// 			light: purple[300],
// 			main: purple[500],
// 			dark: purple[700],
// 			contrastText: '#fff',
// 		}
// 	}
// });

// class App extends React.Component {

// 	render() {
// 		return (
// 			<div className="App">
// 				<ThemeProvider theme={theme}>
// 					<AutorizationProvider>
// 							<BrowserRouter>
// 								<Navigation />
// 								<Container maxWidth="md">
// 									<Route exact path="/">
// 										<Home />
// 									</Route>
// 									<Route exact path="/signin">
// 										<SignIn />
// 									</Route>
// 									<Route path="/signup">
// 										<SignUp />
// 									</Route>
// 								</Container>
// 							</BrowserRouter>
// 					</AutorizationProvider>
// 				</ThemeProvider>
// 			</div>
// 		);
// 	}
// }

// export default App;


import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/Routes';
//import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SingnUp/SingnUp.js';
import Home from './components/Home/Home.js';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

// const classes = useStyles();
// const [value, setValue] = React.useState(0);

// const handleChange = (event, newValue) => {
//   setValue(newValue);
// };

class App extends Component{
  render(){
    return(
      <Paper>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
        >
            <Router>
              <Tab label='Home'>
                <Route exact path= { ROUTES.LANDING } >
        					<Home />
        				</Route>
      				</Tab>
      				<Tab label='SignIn'>
                <Route exact path= { ROUTES.SIGNIN } >
        					<SignIn />
        				</Route>
      				</Tab>
      				<Tab label='SignUp'>
        				<Route exact path= { ROUTES.SIGNUP } >
        					<SignUp />
        				</Route>
      				</Tab>
              <Button variant="contained" color="secondary">Test</Button>
            </Router>
          
        </Tabs>
      </Paper>

      
    )
  }
}

export default App;