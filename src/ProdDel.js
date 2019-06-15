import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import axios from 'axios';



class  ProdDel extends Component
{ 

  state = {
   redirect:false
};

async componentDidMount() {

    axios.delete('/rest/products/prod/delete/'+this.props.match.params.idp)
    .then(res=>{
        console.log(res);
        this.setState({ redirect : true});
    
    }
        );
}
  
        handleDel=()=>{
            this.setState({redirect:true, email:this.props.match.params.idp})
          }
         
         
             render(){ 
               const { redirect } = this.state;
              
               if (redirect) {
                 return(
                 <Redirect to="/product" />);
               }
               return(
                 <div className="App">
                 <div className="App-intro">
                 
         
             <input type="submit" value=" Back to the List " onClick={this.handleDel}/>
           
             </div>
            
               
            
             
             </div>
         )
         
         }}
          
export default ProdDel;