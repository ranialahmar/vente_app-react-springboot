import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign from '/home/rania/IdeaProjects/testreact/src/Components/Sign';
import Connect from '/home/rania/IdeaProjects/testreact/src/Components/Connect.js';
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import Log from '/home/rania/IdeaProjects/testreact/src/Components/Log.js';
import Welcome from '/home/rania/IdeaProjects/testreact/src/Components/Welcome.js';
import About from '/home/rania/IdeaProjects/testreact/src/About.js';
import Form from '/home/rania/IdeaProjects/testreact/src/Form.js';


class  Navig  extends Component
{
render(){
    return(
    <div >
        <Router>
         <ul>
         <li>
             <Link to="/register">Register</Link> <br/>
             <Route path="/register" component={Sign} />
        </li>
        <li>
            <Link to="/connect">Log In</Link>
            <Route path="/connect" component={Connect} />
        </li>
        </ul>
        <Route path="/profile" component={Log} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/About" component={About} />
        <Route path="/Form" component={Form} />
        
        </Router>
        </div>
       );

    }


}
export default Navig;