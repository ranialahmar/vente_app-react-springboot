import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios';


class  Products extends Component
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
<div className="App">
        
       
        <div>
        <p>List of Products</p>
        
         
         <table className="table table-striped">
         <thead>
          <tr>
            <th>designation</th><th>size</th><th>price</th><th>user_id</th>
          </tr>
        </thead>
        <tbody>
        
         {products.map(product=>
              <tr key={product.prod_id}>
               <td> {product.designation} </td>
               <td>{product.size}</td>
               <td> {product.price} </td>
               <td> {product.user_id} </td>
               
              </tr>)}
              
</tbody>
              </table>

        </div>
        </div>



    );


}



}
export default Products;