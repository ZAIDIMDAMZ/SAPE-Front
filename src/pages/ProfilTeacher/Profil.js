import React,{Component} from 'react'
import  CompoDrawer from '../Drawer/Drawer.js'
import '../ProfilTeacher/Profil.css'
class Profil extends Component{
    
    constructor(props){
        super(props);
        this.state={
            name: "", 
            lastName:"",
            mail:"",
            class:"",
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
        fetch('http://localhost:3000/teachers/'+localStorage.getItem('id_teacher'),{
            method: 'PUT',
            body:JSON.stringify({
                nom:this.state.name,
                prenom:this.state.lastName,
                mail:this.state.mail,
                statut:this.state.class    
            }),
            headers: {'Accept': 'application/json',"Content-Type": "application/json"}
        })
        .then((res)=>{
            alert("Informations modifiées avec succès")
        })
        .catch((err)=>{
            alert("Erreur lors de la transmission des données")
        })
    }

    getTeacher(){
        fetch('http://localhost:3000/teachers/'+localStorage.getItem('id_teacher'),{
            method: 'GET',
            headers: {'Accept': 'application/json',"Content-Type": "application/json"}
        })
        .then(res=>{
            return new Promise((resolve,reject)=>{
                resolve (res.json())
            })
        })
        
        .then((res)=>{
            this.setState({
                name: res.nameTeacher, 
                lastName:res.lastnameTeacher,
                mail:res.mailTeacher,
                class:res.classTeacher,
            })
                    
        })
                  
    }
    
    componentDidMount(){
        this.getTeacher()
    }
    
    componentWillMount(){
    }

    getIdTeacher(){
        return new Promise((resolve,reject)=>{
            localStorage.getItem('id_teacher'); 
        })
    }

    render(){
        return (
            
            <>
                <CompoDrawer/>
                <div className="AppProfil">
                    <div className="centerProfil-div">
                        <form onSubmit={this.handleSubmit} className="FormFieldProfil" >
                            
                            <div className="FormFieldProfil">
                                <div><label className="FormFieldProfil__Label" htmlFor="name">Nom</label></div>
                                <input type="text" id="name" className ="FormFieldProfil__Input"  placeholder="Entrer votre le nom" name="name" value={this.state.name} onChange={this.handleChange} />
                            </div>

                            <div className="FormFieldProfil">
                                <div><label className="FormFieldProfil__Label" htmlFor="name">Prénom</label></div>
                                <input type="text" id="lastName" className ="FormFieldProfil__Input"  placeholder="Entrer votre le prénom" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                            </div>

                            <div className="FormFieldProfil">
                                <div><label className="FormFieldProfil__Label" htmlFor="mail">Votre Mail</label></div>
                                <input type="mail" id="mail" className ="FormFieldProfil__Input"  placeholder="Entrer votre mail" name="mail" value={this.state.mail} onChange={this.handleChange}/>
                            </div>

                            <div className="FormFieldProfil">
                                <div><label className="FormFieldProfil__Label" htmlFor="name">Votre Statut</label></div>
                                <input type="text" id="status" className ="FormFieldProfil__Input"  placeholder="Entrer votre statut" name="status" value={this.state.class} onChange={this.handleChange}/>
                            </div>
                            
                            <div className="FormFieldProfil">
                                <button className="FormField__Button mr-20">Enregistrer</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
          
            </>
        
        );
    }
}

export default Profil; 
