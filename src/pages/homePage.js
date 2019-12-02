import React,{Component} from 'react'
import  CompoDrawer from './Drawer/Drawer'
import '../App.css'
import logoBtm from '../images/ValiderPr.png'
class HomePage extends Component{
    constructor(){
        super();
        this.state={
            nbH:0,
        }
        this.handleChange=this.handleChange.bind(this)
    }
    
    handleChange(event){
        this.setState({
            nbH:event.target.value,
        })
        this.setNBH(event.target.value)
    }

    setNBH(nbH){
        localStorage.setItem('nbH', nbH);
    }

    render(){
        let hourTD=localStorage.getItem('hourTD')
        let hourCM=localStorage.getItem('hourCM')
        let hourTP=localStorage.getItem('hourTP')
        let hourExam=localStorage.getItem('hourExam')
        let hourTotal =hourCM*1.5+hourTP*1+hourExam*1+hourTP*0.75
        return (
            
            <>
                <CompoDrawer/>
                 <div key='divGenerale' className="center-divHomePage">
                    <p className="center-textHomePage">Le suivi d'activités : </p>
                    <div><label>Nombre d'heures :</label></div>
                    <input id="nbH" key='variableHours' type="number" style={{textAlign:"right"}} className= "FormField__InputHomePage"   margin="none" value={this.state.nbH} onChange = {this.handleChange}/>
                    <button onClick={function() { 
                                        if(localStorage.getItem('nbH')>hourTotal){
                                            document.getElementById('pRes').innerHTML="Vous avez dépassé le nombre d'heures à assurées, vérifiez votre chiffrage vous êtes à "+((100 * localStorage.getItem('nbH'))/hourTotal).toFixed(2) +" %"
                                            // alert("Vous avez dépassé le nombre d'heures à assurées, vérifiez votre chiffrage!")
                                        } else{
                                            document.getElementById('pRes').innerHTML="Vous êtes dans les normes à "+((100 * localStorage.getItem('nbH'))/hourTotal).toFixed(2) +"%"
                                           // result=<p style={{padding:10}}>Vous êtes dans les normes</p>
                                            // alert("Vous êtes dans les normes")
                                        }
                                }
                            } 
                            style={{border:"none",background:"rgb(20, 26, 37)"}}>
                        <img  src= {logoBtm} alt='Error lors du chargement du logo'/>    
                    </button>
                    <div><hr color="black"></hr></div>
                    <br></br>
                    <p style={{padding:10}}>Vous avez assuré {hourCM} d'heures de cours </p>
                    <p style={{padding:10}}>Vous avez assuré {hourTD} d'heures de traveaux dirigés </p>
                    <p style={{padding:10}}>Vous avez assuré {hourTP} d'heures de traveaux pratiques </p>
                    <p style={{padding:10}}>Vous avez assuré {hourExam} d'heures d'examens</p>
                    <br></br>
                    <div><hr color="black"></hr></div>
                    <br></br>
                    <p style={{padding:10,textAlign:"right"}}>Au total vous avez assuré <font color="yellow">{hourTotal}</font> d'heures</p>
                    <br></br>
                    <div><hr color="black"></hr></div>
                    <br></br>
                    <p id = 'pRes'style={{padding:10}}></p>
                 </div>
            </>
        
        );
    }
}

export default HomePage; 
