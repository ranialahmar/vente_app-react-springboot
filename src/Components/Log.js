import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import Affiche from '../Affiche';


class  Log  extends Component
{
   state = {
    redirect:'',
    email:''
   };

  componentDidMount(){ this.setState({ email: this.props.location.state.email });}
   
   handleSubmitAdd = (event)  => {
      event.preventDefault();
      this.setState({ redirect: 'true' });
      
   }
  
   handleSubmitDel = (event)  => {
      event.preventDefault();
      console.log("delete");
      this.setState({ redirect: 'delete' });
      
   }
  

render(){
  const { redirect } = this.state;

  switch(redirect) {
   case 'true':
      return <Redirect  to= {{
                 pathname: '/Form',
                 state: { email:this.state.email}
             }}/>;
   case 'delete':
      return <Affiche email={this.state.email}/>;
   default:
      return(
        <div>
          <div className="App" >
           <h1>Welcome to your E-Dressing !! </h1> 
          </div>
          <div className="Article">
            <form >
               <input type="submit" value="add new article" onClick={this.handleSubmitAdd.bind(this)} /><br/> <br/>
               <input type="submit" value="check your profile" onClick={this.handleSubmitDel.bind(this)}/><br/><br/>
            </form>
          </div>
        </div>);
        }

   }
}
export default Log;