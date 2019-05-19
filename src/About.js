import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/home/rania/IdeaProjects/testreact/src/logo.svg';
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import Users from '/home/rania/IdeaProjects/testreact/src/Users.js';
import Products from '/home/rania/IdeaProjects/testreact/src/Products.js';
//import axios from 'axios';


class  About extends Component
{ 

 
   
    render(){
     
      return (
        <div className="App">
        
           <img src={logo} className="App-logo" alt="logo" />
           <div >
           
          <h1>Admin's Space</h1>
          <Router>
             <Link to="/checkusers">check users </Link> <br/>
             <Route path="/checkusers" component={Users} />
             <Link to="/checkprod">check products </Link> <br/>
             <Route path="/checkprod" component={Products} />
        </Router>
              
          </div></div>
          



       );
    }


}
export default About;