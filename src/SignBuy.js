import React, { Component } from 'react';
//import logo from '/home/rania/IdeaProjects/testreact/src/logo.svg';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import lock from '/home/rania/IdeaProjects/testreact/src/icons/girl.svg';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
  
} from "mdbreact";

class  SignBuy  extends Component
{

    state = {
      email: '',
      password:'',
      username: '',
      redirect: false,
      showPassword: false
    };
   
    handleInputChange = param =>
       this.setState({ [param.target.name]: param.target.value });

    handleClickShowPassword = () => {
      this.setState(state => ({ showPassword: !state.showPassword }));
    };
  
    handleSubmit = event => {
        event.preventDefault();


        
        const user = {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username
          
        };
        
         axios.post(`/rest/users/add`, user)
          .then(res => {
            console.log(user);
            console.log(res.config.data);
            console.log(res.data);
            this.setState({ redirect: true });
           
          })
          .catch(error => console.log(error))
}

render(){
  const { redirect } = this.state;

  if (redirect) {
      return(<div>  <Redirect  to= {{
          pathname: '/Welcome',
          state: { email:this.state.email}
      }}/>;
       </div>); }
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
                className="form-control"
                onChange={this.handleInputChange} 
                name='username' 
                value={this.state.username} 
              />
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
                    onClick={this.handleClickShowPassword}>
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                   </IconButton>
                 </InputAdornment>}/>
                 <br/><br/>
              <h3>Contact information !</h3><br/>
              Mobile
              <Input
              label="With normal TextField"
              id="simple-start-adornment"
              className="form-control"
              startAdornment={
              <InputAdornment  position="start">+216</InputAdornment>}/>
             Address
              <Input
              label="With normal TextField"
              id="simple-start-adornment"
              className="form-control"
              placeholder="city / street / avenue / postal code" />
              <div className="text-center mt-4">
                <Input type="submit"   onClick={this.handleSubmit} value="Sign In" href="#il-faut-aller-ici" />
              </div>
              <div>
                <Link to={`/connect`}>
                     Log In if you have alreacy an account
                </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  </div>
              
         );
        
    }
}
export default SignBuy;