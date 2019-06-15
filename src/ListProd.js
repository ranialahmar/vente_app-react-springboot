import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import cancel from '/home/rania/IdeaProjects/testreact/src/icons/cancel.svg';

import axios from 'axios';


class  ListProd extends Component
{ 

  state = {
   products:[]
};

async componentDidMount() {

    axios.get('/rest/products/allProd')
    .then(res=>{
      console.log(res);
      console.log(res.data);
      const body = res.data;
      this.setState({ products : body});
    }
        
      ).catch(error => alert(error))

     
  
}

render(){
    const { products } = this.state;
    return (
<div className="Appi">
        
       
        <div>
        <h2>List of Products</h2>
        
         
         <table className="table table-striped">
         <thead>
          <tr>
          <th>Id Product</th><th>title</th><th>email</th><th>size</th><th>price</th><th>description</th><th>categorie</th><th>color</th><th>etat</th><th>file name</th>
          </tr>
        </thead>
        <tbody>
        
         {products.map(prod=>
              <tr key={prod.idp}>
              <td> {prod.idp} </td>
               <td> {prod.title} </td>
               <td>{prod.email}</td>
               <td>{prod.size}</td>
                <td>{prod.price}</td>
                <td>{prod.description}</td>
                <td>{prod.categorie}</td>
                <td>{prod.color}</td>
                <td>{prod.etat}</td>
                
                <td>{prod.file_name}</td>
                <td>
                <Link  to={`/prodel/${prod.idp}`} >
                   <img className="cancel" width="20%"src={cancel} alt=""/>
                   </Link></td>
              </tr>)}
              
</tbody>
              </table>
              <Link to="/users"> <h2>Check the List of Users</h2></Link>
        </div>
        </div>



    );


}



}
export default ListProd;