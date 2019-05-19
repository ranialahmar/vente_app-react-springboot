//Dependencies
import React, { Component } from 'react';
import {Icon} from 'react-materialize';
import { Link } from 'react-router-dom';
import lock from '/home/rania/IdeaProjects/testreact/src/edit.svg';
import medal from '/home/rania/IdeaProjects/testreact/src/medal.svg';
import coin from '/home/rania/IdeaProjects/testreact/src/coins.svg';
import cancel from '/home/rania/IdeaProjects/testreact/src/cancel.svg';
import doc from '/home/rania/IdeaProjects/testreact/src/document.svg';
import tag from '/home/rania/IdeaProjects/testreact/src/tag.svg';
import '/home/rania/IdeaProjects/testreact/src/componentsTemp/Accessories/styles.css';
//Internals
import PRODUCTS from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Data';
import './styles.css';

class Accessories extends Component {
  render() {
    return(
      <div className="accessories">
        <div className="accessories-title">
          <h4>Accessories</h4>
        </div>
        <div className="items">
          {PRODUCTS.map((product) => {
            if (product.category === "accessories") {
              return(
                <div className="desc1">
      <h2 > <b>{product.name}</b></h2>
                  <Link to={`/products/${product.id}`}>
                  <div className="product-img">
                    <img alt={product.name} src={product.img} />
                  </div> </Link>
                  <div className="product-details">
                  
                  <p> <img className="edit" width="17%"src={lock} alt=""/><b>Description</b> :{product.description}</p>
                  </div>
                 
                   
            <p>  <img className="medal"  width="15%"src={medal} alt=""/><b> Condition</b> :{product.etat}</p>
        <div className="price-add">
        <p id="product-price"><img className="coin"  width="20%"src={coin} alt=""/><b>Price </b>:${product.price}</p>
         </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

export default Accessories;
