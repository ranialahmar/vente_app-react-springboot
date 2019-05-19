import React, { Component } from 'react';

import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navig from '/home/rania/IdeaProjects/testreact/src/Components/navig';
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import Admin from '/home/rania/IdeaProjects/testreact/src/Admin.js';
import About from '/home/rania/IdeaProjects/testreact/src/About.js';
import Affiche from './Affiche';
import Comp from './Comp';





class App extends Component {
  render(){
    return (
      <div >
     <Router >
      <div>
      <Link to="/signup">Register|Log in</Link><br/>
      <Route path="/signup" component={Navig} />
      <Link to="/admin">admin space</Link>
      <Route path="/admin" component={Admin} />
      <Route path="/About" component={About} />
      <Route path="/Affiche" component={Affiche} />
      <Route path="/conf" component={Comp} />
     
      </div>
    </Router>
    </div>
    );
    }
   
}

export default App;
