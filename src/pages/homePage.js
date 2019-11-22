import React,{Component} from 'react'
import Toolbar from '../pages/toolBar/Toolbar'
import  CompoDrawer from './Drawer/Drawer'
class HomePage extends Component{
    constructor(){
        super();
   
    }
    render(){
        return (
            <CompoDrawer/>
            // <Toolbar/>    
        );
    }
}

export default HomePage; 
