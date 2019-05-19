import React, { Component } from 'react';
//import logo from '/home/rania/IdeaProjects/testreact/src/logo.svg';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Redirect } from 'react-router';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Affiche from '/home/rania/IdeaProjects/testreact/src/Affiche.js';
import lock from '/home/rania/IdeaProjects/testreact/src/girl.svg';
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
class  Connect extends Component
{

    state = {
      email: '',
      password:'',
      redirect: false,
      showPassword: false
    };
  
    handleInputChange = param =>
       this.setState({ [param.target.name]: param.target.value });
       handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };
  
    handleSubmit =  event => {
        event.preventDefault();
       
 
        const user = {
          email: this.state.email,
          password: this.state.password
         
        };

        axios.get("/rest/users/email/"+this.state.email+"/password/"+this.state.password)
        .then(res=>{
            console.log(user);
            console.log(res);
            console.log(res.data.email);
            if (res){
                this.setState({ redirect: true ,email:res.data.email})
                }
            else{
                    alert("Verify Your Information");
                }
            
          })
          .catch(error => alert(error))
          
      }
      
    render(){
        const { redirect } = this.state;

     if (redirect) {
       return<Affiche email={this.state.email}/>;
     }
        return (
          <div className="App">
          <div className="logi">
            
               
          <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
          
              <div>
             
                  <img width="80%" src={lock} alt=""/>
                  </div>
                  
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                Email
              </label>
              <Input
                type="email"
                id="defaultFormEmailEx"
                className="form-control"
                onChange={this.handleInputChange} 
                name='email' 
                value={this.state.email} 

              />
              
 
              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
               Password
              </label>
              <Input
                 type={this.state.showPassword ? 'text' : 'password'}
                id="defaultFormPasswordEx"
                className="form-control"
                onChange={this.handleInputChange} 
                name='password' 
                value={this.state.password} 

                endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
              />
            

              <div className="text-center mt-4">
              <Input type="submit" onClick={this.handleSubmit} value="Sign In" href="#il-faut-aller-ici" />
              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer></div></div>
            
          
         );
        }   
    
}
export default Connect;