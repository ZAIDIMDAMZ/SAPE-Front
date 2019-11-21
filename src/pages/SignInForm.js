import React,{Component} from 'react'
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css'
import { promises } from 'dns';
import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom';


class SignInForm extends Component{
    constructor(){
        super();
        this.state={
            mail:"",
            password:""
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }
    
    // Getters and Setters
    // Token
    setToken(idToken) {
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        return localStorage.getItem('id_token')
    }

    // IdTeacher
    setIdTeacher(idTeacher) {
        localStorage.setItem('id_teacher', idTeacher);
    }

    getIdTeacher() {
        return localStorage.getItem('id_teacher');
    }

    // Password no getter 
    setPassword = (event)=> {
        if(event){
            this.setState({password : event.target.value});
        }
        
    }    

    // desconnect
    logout() {
        localStorage.removeItem('id_teacher');
        localStorage.removeItem('id_token');
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
        let dataToSend ={
            mail:this.state.mail,
            mdp:this.state.password
        }
        console.log(dataToSend)
        fetch('http://localhost:3000/teachers/login/'+this.state.mail + '/' +this.state.password,{
            method: 'GET',
            headers: {'Accept': 'application/json',"Content-Type": "application/json"}
        })
        .then(res=>{
            return new Promise((resolve,reject)=>{
                resolve (res.json())
            })
        }
            
        )
        .then((res)=>{
            console.log("Back result : \n" ,JSON.stringify(res))
            this.setToken(res.token)
            this.setIdTeacher(res.idMongo)
            this.props.history.push("./")
        })
        .catch((err)=>{
            console.log("Error we cannot connect")
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
                            
                            <form onSubmit= {this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>

                                <div className="FormField">
                                    <div><label className="FormFeild__Label" htmlFor="mail">Votre Mail</label></div>
                                    <input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="mail" id="mail" className ="FormField__Input"  placeholder="Entrer votre mail" name="mail" value={this.state.mail} onChange = {this.handleChange}/>
                                </div>

                                <div className="FormField">
                                    <div><label className="FormFeild__Label" htmlFor="password">Mot de passe</label></div>
                                    <input pattern="([a-zA-Z0-9!+.&%#é@]+)" type="password" id="password" className ="FormField__Input"  placeholder="Entrer votre mot de passe" name="password" value={this.state.password} onChange = {this.handleChange}/>
                                </div>

                                <div className="FormField">
                                <button className="FormField__Button mr-20">Connecter</button>
                                {/* <a href="#" className="FormField__Link">Je suis membre</a> */}
                                </div>
                                
                            </form>
                        </div>
                </div>
            </div>
        
            
        );
    }
}

export default SignInForm; 