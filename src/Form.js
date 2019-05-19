import React, { Component } from 'react';

import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Comp from '/home/rania/IdeaProjects/testreact/src/Comp.js';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router';
import Affiche from '/home/rania/IdeaProjects/testreact/src/Affiche.js';
import list from '/home/rania/IdeaProjects/testreact/src/list.svg';
import cam from '/home/rania/IdeaProjects/testreact/src/photo-camera.svg';
import {
  
  MDBInput
 
} from "mdbreact";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";
var base64Img = require('base64-img');

class  Form extends Component
{   
   
    state = {
      title:'',
       designation: '',
       description:'',
       categorie: '',
       color: '',
       price:'',
       size:'',
       file_name:'',
       file:'',
       etat:'',
       error: '',
       msg: '',
       email:'',
       selectedFile: null ,
       redirect:false,
      
       path:''
    };


    async componentDidMount(){ this.setState({ email: this.props.email });

  }
   
    handleInputChange = param =>
       this.setState({ [param.target.name]: param.target.value });
  


    onFileChange = event => {
      
        this.setState(
        { selectedFile:event.target.files[0]}
        
      );
    console.log(this.state.email);
       
      
     }
    
      
   
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({error: '', msg: ''});

        if(!this.state.selectedFile) {
          this.setState({error: 'Please upload a file.'})
          return;
        }
        if(this.state.selectedFile.size >= 2000000) {
          this.setState({error: 'File size exceeds limit of 2MB.'})
          return;
        }
       
 
        const path = this.state.selectedFile.name;
        console.log(path);
        const formData = new FormData()
        formData.append(
                 'file',
                 this.state.selectedFile,
                 this.state.selectedFile.name
                 
                 )
                                      
     
        axios.post('/api/files/addfile/', formData, 
           this.state.email)
        .then(response => {
          this.setState({error: '', msg: 'Sucessfully uploaded file'});
        })
        .catch(err => {
          this.setState({error: err, msg:'nooooooooo'});
        }); 
       
       
        const produit = {
          title: this.state.title,
          description: this.state.description,
          color: this.state.color,
          size: this.state.size,
          categorie:this.state.categorie,
          etat:this.state.etat,
          price:this.state.price,
          email:this.state.email,
          file_name:this.state.selectedFile.name,
          path:"/home/rania/IdeaProjects/testreact/src/images/"+path
        };
        
         axios.post(`/rest/products/addProd`, produit)
          .then(res => {
            console.log(produit);
            console.log(res.config.data);
            console.log(res.data);
            this.setState({ 
              file_name:this.state.selectedFile.name,
              file:URL.createObjectURL(this.state.selectedFile),
              redirect:true
            });
      
           
          })
  
          .catch(error => console.log(error))
          //this.setState({ redirect:true});
      }
    

    render(){
        const { redirect } = this.state;
     

        if (redirect) {
          return(<div>  <Redirect  to= {{
            pathname: '/com',
            state: { email:this.state.email,file:this.state.file ,title: this.state.title,
          description: this.state.description,
          color: this.state.color,
          size: this.state.size,
          categorie:this.state.categorie,
          etat:this.state.etat,
          price:this.state.price}
        }}/>;
         }
         </div>) ;}
          
      
        return (
          <div className="App">
          <div className="log">
            
         
          <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
           <MDBCardHeader height="10%">
            <h2>Describe your article!</h2>
            
            <div>
             
             <img width="30%" src={list} alt=""/>
             </div>
             </MDBCardHeader>
             
           
                   <TextField id="outlined-name" label="Title" onChange={this.handleInputChange.bind(this)} name='title' 
                 value={this.state.title} margin="normal"    variant="outlined" />
                     <TextField id="outlined-name" label="State" onChange={this.handleInputChange} name='etat' 
                 value={this.state.etat}  margin="normal"  variant="outlined" /><br/>
                    <TextField id="outlined-name" label="Categorie:Women/Men.." onChange={this.handleInputChange} name='categorie' 
                 value={this.state.categorie}  margin="normal"  variant="outlined" />
                      <TextField id="outlined-name" label="Color" onChange={this.handleInputChange} name='color' 
                 value={this.state.color}  margin="normal"  variant="outlined" /><br/>
                     <TextField id="outlined-name" label="Size" onChange={this.handleInputChange} name='size' 
                 value={this.state.size}  margin="normal"  variant="outlined" />
                     <TextField id="outlined-name" label="Price" onChange={this.handleInputChange} name='price' 
                 value={this.state.price}  margin="normal"  variant="outlined" /><br/>
               
                 <MDBInput type="textarea" id="outlined-name"  onChange={this.handleInputChange} name='description' 
                 value={this.state.description}  margin="normal"   variant="outlined" /><br/>
                 
                 <div className="file">
                   <h4 style={{color: 'red'}}>{this.state.error}</h4>
                   <h4 style={{color: 'green'}}>{this.state.msg}</h4>
                
                   <p className="cap"><b> Your front article in full and on a neutral background.</b></p>
               <input onChange={this.onFileChange} type="file" accept="image/*" /><br/>
                     
                     <input type="submit" onClick={this.handleSubmit} value="I Sell "/>
               
               
              
             
                </div>



                        
                         
                  
                  
                 
                
                  
               
                   </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer></div></div>
            
              
         );
        
    }
}
export default Form;