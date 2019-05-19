import React,{Component} from 'react';
import { Switch , Route } from "react-router-dom";


import App from '/home/rania/IdeaProjects/testreact/src/componentsTemp/App';
import Cart from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Cart';

import Women from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Women';
import Men from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Men';
import Clothes from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Clothes';
import Accessories from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Accessories';
import ShowProduct from '/home/rania/IdeaProjects/testreact/src/componentsTemp/ShowProduct';
import Navig from '/home/rania/IdeaProjects/testreact/src/Components/navig.js';
import Log from '/home/rania/IdeaProjects/testreact/src/Components/Log.js';
import Welcome from '/home/rania/IdeaProjects/testreact/src/Components/Welcome';
import About from '/home/rania/IdeaProjects/testreact/src/About.js';
import Form from '/home/rania/IdeaProjects/testreact/src/Form';
import Sign from '/home/rania/IdeaProjects/testreact/src/Components/Sign.js';
import Connect from '/home/rania/IdeaProjects/testreact/src/Components/Connect';


class  Routes extends Component
{


    render(){
return(
<Switch>
<Route exact path="/" component={App} />
<Route path="/cart" component={Cart} />
<Route path="/women" component={Women}  />
<Route path="/men" component={Men} />
<Route path="/clothes" component={Clothes}  />
<Route path="/accessories" component={Accessories} />
<Route path="/signup" component={Navig}  />
<Route exact path="/products/:id" component={ShowProduct} />
<Route exact path="/prod/:categorie" component={ShowCategorie} />
<Route path="/profile" component={Log} />
<Route path="/welcome" component={Welcome} />
<Route path="/About" component={About} />
<Route path="/Form" component={Form} />

     <Route path="/register" component={Sign} />


   
    <Route path="/connect" component={Connect} />
</Switch>

)
}}
export default Routes;