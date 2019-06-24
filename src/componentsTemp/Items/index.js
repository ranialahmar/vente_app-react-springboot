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
          <h2><b>Discover our novelties !</b></h2>
        </div>
        <AllItems />
      </div>
    );
  }
}

export default Products;
