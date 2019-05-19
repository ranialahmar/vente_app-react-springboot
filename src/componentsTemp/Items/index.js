//Dependencies
import React, { Component } from 'react';
//Internals
import AllItems from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Items/AllItems';
import '/home/rania/IdeaProjects/testreact/src/componentsTemp/Items/index.css';

class Products extends Component {
  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
        
          <h1>Discover our novelties !</h1>
        </div>
        <AllItems />
      </div>
    );
  }
}

export default Products;
