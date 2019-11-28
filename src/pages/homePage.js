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
        let hourCours=localStorage.getItem('hourCours')
        let hourTP=localStorage.getItem('hourTP')
        let hourTotal =hourCours*1.5+hourTP*1+hourTP*0.75
        return (
            
            <>
                <CompoDrawer/>
                 <div className="center-divHomePage">
                    <p className="center-textHomePage">Le suivi d'activités : </p>
                    <div><label>Nombre d'heures :</label></div>
                    <input id="nbH" type="number" style={{textAlign:"right"}} className= "FormField__InputHomePage"  InputLabelProps={{shrink: true,}} margin="none" value={this.state.nbH} onChange = {this.handleChange}/>
                    <button onClick={function() { 
                                        if(localStorage.getItem('nbH')>hourTotal){
                                            alert("Vous avez dépassé le nombre d'heures à assurées, vérifiez votre chiffrage!")
                                        } else{
                                            alert("Vous êtes dans les normes")
                                        }
                                }
                            } 
                            style={{border:"none",background:"rgb(20, 26, 37)"}}>
                        <img  src= {logoBtm} alt='Error lors du chargement du logo'/>    
                    </button>
                    <div><hr color="black"></hr></div>
                    <br></br>
                    <p style={{padding:10}}>Vous avez assuré {hourCours} d'heures de cours </p>
                    <p style={{padding:10}}>Vous avez assuré {hourTD} d'heures de traveaux dirigés </p>
                    <p style={{padding:10}}>Vous avez assuré {hourTP} d'heures de traveaux pratiques </p>
                    <br></br>
                    <div><hr color="black"></hr></div>
                    <br></br>
                    <p style={{padding:10,textAlign:"right"}}>Au total vous avez assuré <font color="yellow">{hourTotal}</font> d'heures</p>
                    <br></br>
                    <div><hr color="black"></hr></div>
                    <br></br>
                 </div>
            </>
        
        );
    }
}

export default HomePage; 
