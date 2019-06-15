import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import axios from 'axios';



class  UserDel extends Component
{ 

  state = {
   redirect:false
};

async componentDidMount() {

    axios.delete('/rest/users/user/delete/'+this.props.match.params.email)
    .then(res=>{
        console.log(res);
        this.setState({ redirect : true});
    
    }
        );
}
  
        handleDel=()=>{
            this.setState({redirect:true, email:this.props.match.params.email})
          }
         
         
             render(){ 
               const { redirect } = this.state;
              
               if (redirect) {
                 return(
                 <Redirect to="/users" />);
               }
               return(
                 <div className="App">
                 <div className="App-intro">
                 <h1>{this.props.match.params.username}'s account is deleted </h1>
         
             <input type="submit" value=" Back to the List " onClick={this.handleDel}/>
           
             </div>
            
               
            
             
             </div>
         )
         
         }}
          
export default UserDel;