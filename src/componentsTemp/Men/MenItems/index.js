//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lock from '/home/rania/IdeaProjects/testreact/src/icons/edit.svg';
import medal from '/home/rania/IdeaProjects/testreact/src/icons/medal.svg';
import coin from '/home/rania/IdeaProjects/testreact/src/icons/coins.svg';
import tag from '/home/rania/IdeaProjects/testreact/src/icons/tag.svg';
import { Redirect } from 'react-router';
import '/home/rania/IdeaProjects/testreact/src/componentsTemp/Accessories/styles.css';
//Internals
import PRODUCTS from '/home/rania/IdeaProjects/testreact/src/componentsTemp/Data';
class MenItems extends Component {

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
else{
  return (
  <div className="items">
    {
      PRODUCTS.map((product) => {
      if (product.gender === "men") {
        return(
          <div className="desc1">
      <h2 > <b>{product.name}</b></h2>
            <Link to={`/products/${product.id}`}>
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
         <center>
        <input type="submit"  onClick={this.handleSubmit}value="I Buy "/></center>
          </div>
        )
      }
    })}
  </div>
  )}}
  }
export default MenItems;
