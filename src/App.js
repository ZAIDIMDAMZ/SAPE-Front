import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm';
import homePage from './pages/homePage';

class App extends Component{
  render(){
    return (
      <Router>
        
        <Route exact path = '/homePage' component ={homePage}>
            {/* {/* Page d'acceuil */}
        </Route>
        
        
        <Route exact path = '/SignUp' component={SignUpForm}>
          {/* Page de création de compte */}
        </Route>

        <Route exact path = '/' component ={SignInForm}>
          {/* Page de connexion */}
        </Route>
        
      </Router>

        
    );
  }
}

export default App;
