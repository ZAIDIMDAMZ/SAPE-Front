import React,{Component} from 'react'
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css'

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
        console.log("The form was submitted with de following data: ")
        console.log(this.state)

    }
    render(){
        return (
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
        );
    }
}

export default SignInForm; 