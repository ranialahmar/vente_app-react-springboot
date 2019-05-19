//Dependencies
import React, { Component } from 'react';
/*import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';*/
//Internals
import { Link } from 'react-router-dom';
import axios from 'axios';
import '/home/rania/IdeaProjects/testreact/src/componentsTemp/Accessories/styles.css';
import Form from './Form';
import { Redirect } from 'react-router';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import add from '/home/rania/IdeaProjects/testreact/src/palette.svg';
import lock from '/home/rania/IdeaProjects/testreact/src/edit.svg';
import medal from '/home/rania/IdeaProjects/testreact/src/medal.svg';
import coin from '/home/rania/IdeaProjects/testreact/src/coins.svg';
import cancel from '/home/rania/IdeaProjects/testreact/src/cancel.svg';
import doc from '/home/rania/IdeaProjects/testreact/src/document.svg';
import tag from '/home/rania/IdeaProjects/testreact/src/tag.svg';
class  Affiche extends Component
{

  state = {
    
    products:[],
    change:false,
    redirect:true,
    email:''
   
 }


async componentDidMount(){
axios.get('/rest/products/prodfile/'+this.props.email)
.then(res=> {
    console.log(res.data);
    console.log(res.data.length);
    console.log(this.props.email);
    res.data.map((prod)=>{
        console.log(prod);
        this.state.products.push(prod);
        
    }
    )
    console.log(this.state.products);
    this.setState({email:this.props.email});
 
    
    
});

console.log(this.state.redirect);
}


handleSubmitAdd = (event)  => {
  event.preventDefault();
  this.setState({ change: true,email:this.props.email });
  
}










  
    render(){ 
      const { products } = this.state;
      const { change} = this.state;
      if (change) {
        return(
        <Form email={this.state.email}/>);
      }
      return(
        <div className="App">
        <div className="App-intro">

    <h1>ALL your products </h1>
  
    </div>
    <div className="accessories">
        <div className="accessories-title">
         
          <Input type="submit" value="add new article" onClick={this.handleSubmitAdd}  />
           
        </div>
        <div className="items">
          {products.map((product) => {
           
              return(
                <div className="desc">
                <div className="product-details">

                
                   <h2 > <b> {product.title}</b></h2>
                   <Link to={`/proddel/${product.idp}/${this.props.email}`} >
                   <img className="cancel" width="15%"src={cancel} alt=""/>
                   </Link>
                   <Link to={`/prodmod/${product.idp}/${this.props.email}`} >
                    <img className="doc" width="15%"src={doc} alt=""/>
                    </Link>
                  <div className="product-img" key={product.idp}>
                    <img alt={product.file_name} src={require("/home/rania/IdeaProjects/testreact/src/images/"+product.file_name)} />
                  </div>
      
      
                 
            
                    <p> <img className="edit" width="13%"src={lock} alt=""/><b>Description</b> :{product.description}</p>
                  
                    <p>  <img className="medal"  width="10%"src={medal} alt=""/><b> Etat</b> :{product.etat}</p>
                    <p><b> <img className="pal"  width="10%"src={add} alt=""/>Color</b> :{product.color}</p>
                    <p id="product-price"><img className="coin"  width="10%"src={coin} alt=""/><b>Price </b>:${product.price}</p>
                   
                   
                 
                   
                   
                  </div>
               
                
                    <p id="product-price"><img className="coin"  width="10%"src={tag} alt=""/><b>Size </b>:{product.size}</p>
                  
     
                </div>
              )
            
          })}
        </div>
      </div>
   
    
    </div>
)

}}
 


export default Affiche;
