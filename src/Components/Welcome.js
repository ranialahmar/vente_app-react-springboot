import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../Form';


class  Welcome extends Component
{state = {
   redirect:false,
   email:'',
   username:''
  
}

componentDidMount(){
  this.setState({email: this.props.location.state.email,username:this.props.location.state.username});
}

   
handleSubmit =(event) => {
  event.preventDefault();
  this.setState({redirect: true});}

    render(){

      const { redirect } = this.state;

      if (redirect) {
        return( <Form email={this.state.email}/>); }
   
       return(
        <div className="welcome">
        
      
      
          <h1>Welcome {this.props.location.state.username} to your E-Dressing !! </h1>
         <div className="forwel">
          <form  onSubmit={this.handleSubmit}  >
            <input  type="submit" value="Let's Try " /></form>
            </div>
          
          </div>



       );

    }


}
export default Welcome;
