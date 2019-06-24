// Dependencies
import React, { Component } from 'react';
// Externals
import Navbar from '/home/rania/IdeaProjects/testreact/src/componentsTemp/BaseLayout/components/NavBar';
import Header from '/home/rania/IdeaProjects/testreact/src/componentsTemp/BaseLayout/components/Header';
import Footer from '/home/rania/IdeaProjects/testreact/src/componentsTemp/BaseLayout/components/Footer';
import './index.css';
import {NavLink} from 'react-router-dom';
import logo from '/home/rania/IdeaProjects/testreact/src/icons/laundry.svg';
import fille from '/home/rania/IdeaProjects/testreact/src/icons/cute.svg';
import comm from '/home/rania/IdeaProjects/testreact/src/icons/deliveryt.svg';



const classNames = [
  "first-header",
  "second-header",
  "third-header",
  "fourth-header"
];


export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      redirect:false
    
    };
  }
 
  incrementIndex = () => {
    const newIndex = this.state.index + 1;
    this.setState({ index: newIndex })
  }

  componentDidMount = () => {
    setInterval(this.incrementIndex, 3000);
  }

render() {
  const index = this.state.index % classNames.length;
  const className = classNames[index];
   
  return(
    <div>
      <div className="nav" >
         <Navbar  />
      </div>
      <div className={className}>
        <Header />
      </div>
      <div className="children">
        <div className="tit" >
          <h2 > <b> Sell for Free and organize your extra Dressing  <br/> without mooving from your home. </b></h2></div>
          <table>
            <tr>
             <td>
               <img src={logo}  alt="logo" title="100K" />
               <div className="td1"><h3>+100k <br/>Articles</h3></div></td>
             <td>
              <img src={fille}  alt="fille" /> 
              <div className="td2"><h3>+200k<br/>Clients</h3></div></td>
             <td> 
              <img src={comm}  alt="comm" />
              <div className="td3"><h3>+50k<br/>Delivery</h3></div> </td>
            </tr>
          </table>
              
          <br/><br/><br/><br/>
        
          <div className="links">
           <p><NavLink activeClassName="selected" className="nav-link-header" to="/women"> Women</NavLink></p>
           <p><NavLink activeClassName="selected" className="nav-link-header" to="/men">Men</NavLink></p>
           <p><NavLink activeClassName="selected" className="nav-link-header" to="/accessories">Accessories</NavLink></p>
          </div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
