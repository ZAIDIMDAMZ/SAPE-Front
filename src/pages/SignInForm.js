import React,{Component} from 'react'
import 'reactjs-toastr/lib/toast.css'
import {NavLink} from 'react-router-dom';

class SignInForm extends Component{
    constructor(props){
        super(props);
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
// ----------------------------------------
    setName(nameTeacher){
        localStorage.setItem('nameTeacher', nameTeacher);
    }

    getName(){
        return localStorage.getItem('nameTeacher');
    }
// -----------------------------------------
    setLastName(lastName){
        localStorage.setItem("lastNameTeacher",lastName)
    }

    getLastName(){
        return localStorage.getItem('lastNameTeacher');
    }

    setHourTD(hourTD){
        localStorage.setItem("hourTD",hourTD)
    }

    setHourTP(hourTP){
        localStorage.setItem("hourTP",hourTP)
    }

    setHourCours(hourCM){
        localStorage.setItem("hourCM",hourCM)
    }

    setHourExam(hourExam){
        localStorage.setItem("hourExam",hourExam)
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
            this.setName(res.teacher.nameTeacher)
            this.setLastName(res.teacher.lastnameTeacher)
            
            console.log('http://localhost:3000/teachers/parse/ics/'+this.getName() + '/' +this.getLastName());
            fetch('http://localhost:3000/teachers/parse/ics/'+this.getName().toLocaleLowerCase() + '/' +this.getLastName().toLocaleLowerCase(),{
                method:'GET',
                headers: {'Accept': 'application/json',"Content-Type": "application/json"}
            })
            .then(result=>{
                return new Promise((resolve,reject)=>{
                    resolve (result.json())
                })
            })
            .then(result=>{
                
                this.setHourCours(result.hourCM)
                this.setHourTD(result.hourTD)
                this.setHourTP(result.hourTP)
                this.setHourExam(result.hourExam)
            })
            .catch(error=>{
                console.log('error de chargement csi')
            })
            this.props.history.push("./homePage")
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
                {/* <img src= {imageSite} alt='Error lors du chargement de la photo'/>  */}
                    <div className="PageSwitcher">
                        <NavLink to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Connexion</NavLink>
                        <NavLink exact to="/SignUp" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Créer votre compte</NavLink>
                    </div>
                
                    <div className="FormeTitle">
                    <NavLink to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Connexion</NavLink> ou <NavLink exact to="/SignUp" 
                    activeClassName="FormTitle__Link--Active"  className="FormTitle__Link">Créer votre compte</NavLink>
                    </div>
                    
                        <div className="FormCenter">
                            
                            <form onSubmit={this.handleSubmit} className="FormFields">

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