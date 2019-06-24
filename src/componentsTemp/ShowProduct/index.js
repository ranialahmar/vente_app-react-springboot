//Dependencies
import React, { Component } from 'react';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
//Internals
import PRODUCTS from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Data';
import './index.css';

class ShowProduct extends Component {
  render () {
    const productt = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);
    //const currentProduct = product;
    return (
      <div className="show-product">
        <div className="item-wrapper">
          <div className="item-image">
            <img className="product-image" src={productt.img} alt="product" />
          </div>
          <div className="item-name">
            <div className="product-info">
              <h3 id="product-name">{productt.name}</h3>
            </div>
            <div className="product-bio">
              <p id="product-description">{productt.description}</p>
              <p id="product-price">{productt.price} DT</p>
              <Icon small id="add-icon">add_shopping_cart</Icon>
            </div>
            <div className="product-review">
              
            </div>
          </div>
        </div>
        <div className="similar-products">
          <h5><b>You might also like</b></h5>
          {PRODUCTS.map((product) => {
            if (
              product.gender === productt.gender
              && product.type === productt.type
              && product.name !== productt.name) {
              return(
                <Link to={`/products/${product.id}`}>
                  <div key={product.id} className="item">
                    <Link to={`/products/${product.id}`}>
                    <div className="product-img">
                      <img alt={product.name} src={product.img} />
                    </div>
                    <div className="product-details">
                      <h1 id="product-name">{product.name}</h1>
                      <h4 id="product-description">{product.description}</h4>
                    </div>
                    </Link>
                    <div className="price-add">
                      <h5 id="product-price">{product.price}DT</h5>
                      <Icon small id="add-icon">add_shopping_cart</Icon>
                    </div>
                  </div>
                </Link>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

export default ShowProduct;
