import React, { Component } from 'react';
//import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Affiche from './Affiche';
import lock from '/home/rania/IdeaProjects/testreact/src/icons/edit.svg';
import medal from '/home/rania/IdeaProjects/testreact/src/icons/medal.svg';
import coin from '/home/rania/IdeaProjects/testreact/src/icons/coins.svg';
import tag from '/home/rania/IdeaProjects/testreact/src/icons/tag.svg';
import add from '/home/rania/IdeaProjects/testreact/src/icons/palette.svg';
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
            <div className="App">
            <div className="App-intro">
    
            <h1>Verify your information </h1>
      
        </div>
            
               
               <div className="accessories">
        
               <div className="items">
         
               <div className="desc">
               <div className="product-details">
               <h2>{this.props.location.state.title}</h2><br/>
           
                  <div className="product-img" >
                  <img alt="hello" src={this.props.location.state.file}/>
                  </div>
                 
                
                  <p> <img className="edit" width="20%"src={lock} alt=""/><b>Description</b> : {this.props.location.state.description}</p></div>
                   
                   <p ><img className="coin"  width="20%"src={coin} alt=""/><b>Price </b>: {this.props.location.state.price}</p>
                   <p>  <img className="medal"  width="20%"src={medal} alt=""/><b> Condition</b> : {this.props.location.state.etat}</p>
                   <p> <img className="pal"  width="20%"src={add} alt=""/><b>Color</b> : {this.props.location.state.color}</p>
                   <p id="product-price"><img className="coin" max-width="30"  width="20%"src={tag} alt=""/><b>Size </b>: {this.props.location.state.size}</p>
                   <form onClick={this.handleSubmit}>
      <input type="submit"  value="confirm " /> 
      </form>
         </div>
        
                 
    
     </div>
     
        </div>
        </div>
        
            
    
        
        )
    }
}
export default Comp;