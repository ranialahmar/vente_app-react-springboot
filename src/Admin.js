import React, { Component } from 'react';
import logo from '/home/rania/IdeaProjects/testreact/src/icons/logo.svg';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';


class  Admin extends Component
{

    state = {
        name: '',
      password:'',
      redirect:false
    };
   

    handleInputChange = param =>
       this.setState({ [param.target.name]: param.target.value });
       
  
    handleSubmit = (event)  => {
        event.preventDefault();
        
       
           if(this.state.name==='admin' && this.state.password==='admin'){
            this.setState({ redirect: true });}
            else{
                alert("This is a Private Space ");
            }
         }

    render(){
        const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/About'/>;
     }
        return (
            <div className="App">
            
               <img src={logo} className="App-logo" alt="logo" />
               <div className="App-intro">
               
                 <h1>Connect</h1>
                   <p> Welcome Admin</p>
                   <div>
                   <form onSubmit={this.handleSubmit}>
                
                   Username  : <input type="text"  onChange={this.handleInputChange} name='name' value={this.state.name} /><br/>
                   Password : <input  type="password" onChange={this.handleInputChange} name='password' value={this.state.password} /><br/>
                   <input type="submit" value="connect" />
                   </form>
                   </div>
                   
                   <div>
           
     
           </div>
               </div>
              </div>
              
          
         );
        }   
    
}
export default Admin;