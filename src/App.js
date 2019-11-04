import React, {Component} from 'react';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <div className= "App__Aside"></div>
        <div className= "App__Form">
        <div className="PageSwitcher">
          <a href="#" className="PageSwitcher__Item">Connexion</a>
          <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Créer votre compte</a>
        </div>
        
        <div className="FormeTitle">
        <a href="#" className="FormTitle__Link">Connexion</a>or<a href="#" className="FormTitle__Link FormTitle__Link--Active">Créer votre compte</a>
        </div>
        <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormFeild__Label" htmlFor="name">Nom et prénom</label>
              <input type="text" id="name" className ="FormField__Input"  placeholder="Entrer votre nom et prénom" name="name"/>

            </div>
            <div className="FormField">
              <label className="FormFeild__Label" htmlFor="password">Mot de passe</label>
              <input type="password" id="password" className ="FormField__Input"  placeholder="Entrer votre mot de passe" name="password"/>
            </div>
            <div className="FormField">
              <label className="FormFeild__Label" htmlFor="mail">Votre Mail</label>
              <input type="mail" id="mail" className ="FormField__Input"  placeholder="Entrer votre mail" name="mail"/>
            </div>
            

          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
