//Dependencies
import React, { Component } from 'react';

//Internals

import axios from 'axios';
import '/home/rania/IdeaProjects/testreact/src/componentsTemp/Accessories/styles.css';


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
            <input type="submit" value=" Back " onClick={this.handleDel}/>
          </div>
        </div>)

}}
 


export default AfficheDel;
