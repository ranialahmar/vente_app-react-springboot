//Dependencies
import React, { Component } from 'react';
/*import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';*/
//Internals
import { Link } from 'react-router-dom';
import axios from 'axios';
import '/home/rania/IdeaProjects/testreact/src/componentsTemp/Accessories/styles.css';
import Form from './Form';
import { Redirect } from 'react-router';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import add from '/home/rania/IdeaProjects/testreact/src/palette.svg';
import lock from '/home/rania/IdeaProjects/testreact/src/edit.svg';
import medal from '/home/rania/IdeaProjects/testreact/src/medal.svg';
import coin from '/home/rania/IdeaProjects/testreact/src/coins.svg';
import cancel from '/home/rania/IdeaProjects/testreact/src/cancel.svg';
import doc from '/home/rania/IdeaProjects/testreact/src/document.svg';
import tag from '/home/rania/IdeaProjects/testreact/src/tag.svg';
import Affiche from '/home/rania/IdeaProjects/testreact/src/Affiche.js';
class  AfficheDel extends Component
{

  state = {
    
    redirect:false,
    email:''
   
 }
 async componentDidMount(){
  axios.delete('/rest/products/prod/delete/'+this.props.match.params.idp)
  .then(res=>{
    console.log(res);}
    );
 }


 handleDel=()=>{
   this.setState({redirect:true, email:this.props.match.params.email})
 }


    render(){ 
      const { redirect } = this.state;
     
      if (redirect) {
        return(
        <Affiche email={this.state.email}/>);
      }
      return(
        <div className="App">
        <div className="App-intro">

    <input type="submit" value=" Back to your Profile " onClick={this.handleDel}/>
  
    </div>
   
      
   
    
    </div>
)

}}
 


export default AfficheDel;
