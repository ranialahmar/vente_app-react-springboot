import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Affiche from './Affiche';
import { Redirect } from 'react-router';
import { Button } from '@material-ui/core';
import lock from '/home/rania/IdeaProjects/testreact/src/edit.svg';
import medal from '/home/rania/IdeaProjects/testreact/src/medal.svg';
import coin from '/home/rania/IdeaProjects/testreact/src/coins.svg';
import cancel from '/home/rania/IdeaProjects/testreact/src/cancel.svg';
import doc from '/home/rania/IdeaProjects/testreact/src/document.svg';
import tag from '/home/rania/IdeaProjects/testreact/src/tag.svg';
import add from '/home/rania/IdeaProjects/testreact/src/palette.svg';
import '/home/rania/IdeaProjects/testreact/src/componentsTemp/Accessories/styles.css';


class  Comp extends Component
{    
    state = {
        
        products:[],
        redirectes:false,
        redirect:true,
        email:''
       
     };
   async componentDidMount() 
    {
        this.setState({
            email:this.props.location.state.email});
        
    }

   
          
        
handleSubmit = event => {
    event.preventDefault();
    this.setState({redirectes: true});}
          
    
    render(){
        const { redirectes} = this.state;

      
        if (redirectes) {
          return(<Affiche email={this.state.email}/>);
         }

        return(
            <div className="accessories">
        <div className="accessories-title">
               <h1>Verify your information </h1>
               <div className="items">
         
               <div className="desc2">
               <h2>{this.props.location.state.title}</h2><br/>
           
                  <div className="product-img" >
                  <img alt="hello" src={this.props.location.state.file}/>
                  </div>
                  <div className="product-details">
                
                  <p> <img className="edit" width="17%"src={lock} alt=""/><b>Description</b> :{this.props.location.state.description}</p></div>
                   
                   <p id="product-price"><img className="coin"  width="20%"src={coin} alt=""/><b>Price </b>:${this.props.location.state.price}</p>
                   <p>  <img className="medal"  width="15%"src={medal} alt=""/><b> Condition</b> :{this.props.location.state.etat}</p>
                   <p><b> <img className="pal"  width="15%"src={add} alt=""/>Color</b> :{this.props.location.state.color}</p>
                   <p id="product-price"><img className="coin"  width="10%"src={tag} alt=""/><b>Size </b>:{this.props.location.state.size}</p>
          
         </div>
        
                 
    
     </div>
      <form onClick={this.handleSubmit}>
      <input type="submit"  value="confirm " /> 
      </form>
        </div>
        </div>
        
            
    
        
        )
    }
}
export default Comp;