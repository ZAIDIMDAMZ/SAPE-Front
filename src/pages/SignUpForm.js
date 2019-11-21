import React,{Component} from 'react'
import { stat } from 'fs';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom';

class SignUpForm extends Component{
    constructor(){
        super();
        this.state={
            mail:"",
            password:"",
            name:"",
            lastName:"",
            status:"",
            hasAgreed:false
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }

    handleChange(event){
        let target=event.target;
        let value=target.type==='checkbox'? target.checked:target.value;
        let name = target.name;

        this.setState({
            [name]:value,
        })
    }

    handleSubmit(event){
        event.preventDefault()
        let user = {
            nom:this.state.name,
            prenom:this.state.lastName,
            mail:this.state.mail,
            mdp:this.state.password,
            statut:this.state.status

        }
        console.log(user)
        fetch('http://localhost:3000/teachers',{
            method: 'POST',
            body:JSON.stringify({
                nom:this.state.name,
                prenom:this.state.lastName,
                mail:this.state.mail,
                mdp:this.state.password,
                statut:this.state.status    
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then((res)=>{
            console.log("User posted")
        })
        .catch((err)=>{
            console.log("Error")
        })
    }
    render(){
        return (
            <div className="App">
          
                <div className= "App__Aside"></div>

                <div className= "App__Form">
                    <div className="PageSwitcher">
                    <NavLink to="/signIn" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Connexion</NavLink>
                    <NavLink exact to="/SignUp" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Créer votre compte</NavLink>
                    </div>
                    
                    <div className="FormeTitle">
                    <NavLink to="/signIn" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Connexion</NavLink> ou <NavLink exact to="/SignUp" 
                    activeClassName="FormTitle__Link--Active"  className="FormTitle__Link">Créer votre compte</NavLink>
                    </div>
                        
                        
                    <div className="FormCenter">
                        <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                            
                            <div className="FormField">
                                <div><label className="FormFeild__Label" htmlFor="name">Nom</label></div>
                                <input type="text" id="name" className ="FormField__Input"  placeholder="Entrer votre le nom" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <div><label className="FormFeild__Label" htmlFor="name">Prénom</label></div>
                                <input type="text" id="lastName" className ="FormField__Input"  placeholder="Entrer votre le prénom" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                            </div>

                            <div className="FormField">
                                <div><label className="FormFeild__Label" htmlFor="password">Mot de passe</label></div>
                                <input type="password" id="password" className ="FormField__Input"  placeholder="Entrer votre mot de passe" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            
                            <div className="FormField">
                                <div><label className="FormFeild__Label" htmlFor="mail">Votre Mail</label></div>
                                <input type="mail" id="mail" className ="FormField__Input"  placeholder="Entrer votre mail" name="mail" value={this.state.mail} onChange={this.handleChange}/>
                            </div>

                            <div className="FormField">
                                <div><label className="FormFeild__Label" htmlFor="name">Votre Statut</label></div>
                                <input type="text" id="status" className ="FormField__Input"  placeholder="Entrer votre statut" name="status" value={this.state.status} onChange={this.handleChange}/>
                            </div>

                            <div className="FormField">  
                                <label className="FormField__Label">
                                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}/>J'accepte les conditions d'utilisation <a href="" className="FormField__TermsLink">Accèder aux conditions d'utilisation</a>
                                </label>
                            </div>
                            
                            <div className="FormField">
                                <button className="FormField__Button mr-20">Valider</button>
                                {/* <a href="#" className="FormField__Link">Je suis membre</a> */}
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}

export default SignUpForm; 