//Dependencies
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import map from 'lodash/map';
import add from '/home/rania/IdeaProjects/testreact/src/palette.svg';
import lock from '/home/rania/IdeaProjects/testreact/src/edit.svg';
import medal from '/home/rania/IdeaProjects/testreact/src/medal.svg';
import coin from '/home/rania/IdeaProjects/testreact/src/coins.svg';
import { Redirect } from 'react-router';
import tag from '/home/rania/IdeaProjects/testreact/src/tag.svg';
import '/home/rania/IdeaProjects/testreact/src/componentsTemp/Accessories/styles.css';
//Internals
import PRODUCTS from '../../Data';


  class AllItems extends Component {

    state = {redirect:false}

    handleSubmit = event => {
      event.preventDefault();
      this.setState({redirect:true});}



    render(){
      const { redirect } = this.state;
     

        if (redirect){ return(<div>  <Redirect  to= {{
          pathname: '/buy'
         
      }}/>;
       }
       </div>) ;}
  

  return(
  <div className="items">
    {map(PRODUCTS, (product)=> (
      <div className="desc1">
      <h2 > <b>{product.name}</b></h2>
      <div key={product.id} >
        <Link to={`/products/:id`}>
        <div className="product-img">
          <img alt={product.name} src={product.img} />
        </div>
        </Link>
                <div className="product-details">
               
                <p> <img className="edit" width="17%"src={lock} alt=""/><b>Description</b> :{product.description}</p>
        
        </div>
        <p>  <img className="medal"  width="15%"src={medal} alt=""/><b> Condition</b> :{product.etat}</p>
        <div className="price-add">
        <p id="product-price"><img className="coin"  width="20%"src={coin} alt=""/><b>Price </b>:${product.price}</p>
       
        </div>
        <p id="product-price"><img className="coin"  width="20%"src={tag} alt=""/><b>Size </b>:{product.size}</p>
          
        </div>
        <input type="submit" width="10px"  onClick={this.handleSubmit}value="I Buy "/>
      </div>
    ))}
  </div>
)}}

export default AllItems;
