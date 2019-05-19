import React,{Component} from 'react';
import { NavLink,Link } from 'react-router-dom';
import '/home/rania/IdeaProjects/testreact/src/componentsTemp/BaseLayout/components/Navbar/index.css';
import log from '/home/rania/IdeaProjects/testreact/src/log.png';
import ModalComponent from '../../../../ModalComponent';

class  Navbar extends Component
{  


render(){ 
 
  return(
    
  <nav className="navbar">
 
    <ul>
    <li>
      <img src={log} alt="" /></li>
      <li><NavLink  className="nav-link" exact to="/">Home</NavLink></li>
     
      <li><Link className="nav-link" to="/register">Register</Link></li>
      <li><Link  className="nav-link" to="/connect">Log In</Link></li>
    </ul>
  </nav>
);
}}
export default Navbar;


