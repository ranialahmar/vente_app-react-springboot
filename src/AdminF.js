import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '@material-ui/core/Input';
import Users from '/home/rania/IdeaProjects/testreact/src/Users.js';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import lock from '/home/rania/IdeaProjects/testreact/src/icons/interview.svg';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
 
} from "mdbreact";
class  AdminF extends Component
{

    state = {
      username: '',
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
       
 
       

        if(this.state.username==="admin" && this.state.password==="admin"){
            this.setState({ redirect: true });
        }
        else{
          alert("Only Admin is allowed ");
      }
          
      }
      
    render(){
        const { redirect } = this.state;

     if (redirect) {
       return<Users />;
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
                Username
              </label>
              <Input
                type="text"
                id="defaultFormEmailEx"
                className="form-control"
                onChange={this.handleInputChange} 
                name='username' 
                value={this.state.username} 

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
export default AdminF;