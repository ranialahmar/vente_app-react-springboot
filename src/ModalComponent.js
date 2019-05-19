import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
import Welcome from './Components/Welcome';


export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,name: '',team :'' ,country: '',  email: '',
    password:'',
    username: '',
    redirect: false,
    showPassword: false};

    this.toggle = this.toggle.bind(this);
   
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
 
 

  
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
          if(! this.state.redirect){
          this.setState({ redirect: true, modal: !this.state.modal });}
          
         
        })

        .catch(error => console.log(error))
    }
 

  render() {
  const {redirect}=this.state ;
  const {modal}=this.state ;

    if (redirect &&  modal==false) {
      return(<div> <Redirect  to= {{
        pathname: '/Welcome',
        state: { email:this.state.email}
    }}/>;
     
     </div>); }
      

      
  
    return (

        <div>
         <Button color="success" onClick={this.toggle}>Register</Button>
        <Modal isOpen={this.state.modal}>
       
          <ModalHeader>IPL 2018</ModalHeader>
          <ModalBody>
          <div className="App">
             <div className="App-intro">
               <h1>Register</h1>
                 <p> Sell for Free and organize your extra Dressing sur  !! </p>
                 <div>
                 <form onClick={()=>this.handleSubmit}> 
                  <TextField
                    label="Name"
                    id="margin-dense"
                     onChange={this.handleInputChange} 
                     name='username' 
                     value={this.state.username} 
                      margin="dense" />            
      <br/>
                  <TextField
                    id="filled-email-input"
                     label="Email"
                    type="email"
                    onChange={this.handleInputChange} name='email' 
                    value={this.state.email}
                    autoComplete="email"
                    margin="normal"/>
      
    
                 <br/>
               
               
                 <FormControl >
                  <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
          id="adornment-password"
          type={this.state.showPassword ? 'text' : 'password'}
          name='password' 
          value={this.state.password}
          onChange={this.handleInputChange}
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
      </FormControl><br/><br/>
      <input type="submit" value="Submit" color="primary"   className="btn btn-primary" />
                 </form>
              
                 </div>
                
             </div>
             </div>
          </ModalBody>
          <ModalFooter>
          
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
         
        </Modal>
        </div>
      
    );
  }
}