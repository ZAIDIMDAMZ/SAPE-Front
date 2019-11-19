import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom';
import './App.css';
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">

          <div className= "App__Aside"></div>

          <div className= "App__Form">
            <div className="PageSwitcher">
              <NavLink to="/signIn" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Connexion</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Créer votre compte</NavLink>
            </div>
            
            <div className="FormeTitle">
              <NavLink to="/signIn" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Connexion</NavLink> ou <NavLink exact to="/" 
              activeClassName="FormTitle__Link--Active"  className="FormTitle__Link">Créer votre compte</NavLink>
            </div>
            
            <Route exact path = '/' component={SignUpForm}>
              {/* Page de création de compte */}
            </Route>

            <Route exact path = '/signIn' component ={SignInForm}>
              {/* Page de connexion */}
            </Route>

          </div>
        </div>
      </Router>
    
    );
  }
}

export default App;
