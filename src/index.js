
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import UserDel from '/home/rania/IdeaProjects/testreact/src/UserDel.js';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import AdminF from '/home/rania/IdeaProjects/testreact/src/AdminF.js';
import ProdDel from '/home/rania/IdeaProjects/testreact/src/ProdDel.js';
import ListProd from '/home/rania/IdeaProjects/testreact/src/ListProd.js';
import App from '/home/rania/IdeaProjects/testreact/src/componentsTemp/App';
import Cart from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Cart';
import BaseLayout from '/home/rania/IdeaProjects/testreact/src/componentsTemp/BaseLayout';
import Women from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Women';
import Men from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Men';
import Clothes from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Clothes';
import Accessories from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Accessories';
import ShowProduct from '/home/rania/IdeaProjects/testreact/src/componentsTemp/ShowProduct';
import Navig from '/home/rania/IdeaProjects/testreact/src/Components/navig.js';
//import registerServiceWorker from './registerServiceWorker';
import Log from '/home/rania/IdeaProjects/testreact/src/Components/Log.js';
import Welcome from '/home/rania/IdeaProjects/testreact/src/Components/Welcome';
import About from '/home/rania/IdeaProjects/testreact/src/About.js';
import Form from '/home/rania/IdeaProjects/testreact/src/Form';
import Sign from '/home/rania/IdeaProjects/testreact/src/Components/Sign.js';
import Connect from '/home/rania/IdeaProjects/testreact/src/Components/Connect';
import AfficheDel from '/home/rania/IdeaProjects/testreact/src/AfficheDel.js';
//import Routes from '/home/rania/IdeaProjects/testreact/src/router.js';
import * as serviceWorker from './serviceWorker';

import Comp from './Comp';
import FormMod from './FormMod';
import SignBuy from './SignBuy';
import Users from './Users';


ReactDOM.render(
 
  <BrowserRouter>
    <BaseLayout> 
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cart" component={Cart} />
        <Route path="/women" component={Women}  />
        <Route path="/men" component={Men} />
        <Route path="/clothes" component={Clothes}  />
        <Route path="/accessories" component={Accessories} />
        <Route path="/signup" component={Navig}  />
        <Route exact path="/products/:id" component={ShowProduct} />
        <Route exact path="/proddel/:idp/:email" component={AfficheDel} />
        <Route exact path="/prodmod/:idp/:email" component={FormMod} />
        <Route exact path="/userdel/:email/:username" component={UserDel} />
        <Route exact path="/prodel/:idp" component={ProdDel} />
        <Route path="/profile" component={Log} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/About" component={About} />
        <Route path="/Form" component={Form} />
        <Route path="/admin" component={AdminF} />
        <Route path="/product" component={ListProd} />
        <Route path="/users" component={Users} />
        <Route path="/register" component={Sign} />
        <Route path="/buy" component={SignBuy} />
        <Route path="/com" component={Comp} />
        <Route path="/connect" component={Connect} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
serviceWorker.unregister();
