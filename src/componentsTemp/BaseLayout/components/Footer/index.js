//Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//Internals

import '/home/rania/IdeaProjects/testreact/src/componentsTemp/BaseLayout/components/Footer/index.css';

import fb from '/home/rania/IdeaProjects/testreact/src/facebook.svg';
import insta from '/home/rania/IdeaProjects/testreact/src/instagram.svg';
import mail from '/home/rania/IdeaProjects/testreact/src/gmail.svg';
import ref from '/home/rania/IdeaProjects/testreact/src/refresh.svg';

class Footer extends Component { 
  render(){
    return(
    
<div className="footer">
      <Container>
      <Row>
      <Col  style={{textAlign: 'center', paddingTop:'50px'}}><h2> Buy and sell
your clothes..</h2>

</Col>
      </Row> 
      <Row>
    
      <Col md='4'><img src={ref} width="30%"  className="ref" alt=""/><br/>Return Free</Col>
      
    
      <Col md='4' > 
     
       <img src={insta} width="25%" alt=""/>
  <img src={fb} width="25%" alt=""/>
  <img src={mail} width="25%" alt=""/>
</Col>
    <Col md='4'></Col>
      
       

      </Row>
      <Row>
      <Col md='4'></Col><Col md='4' style={{textAlign: 'center'}}><h4>Made with Love in Tunis.</h4> © 2019 Copyright Rania Lahmar</Col><Col md='4'></Col></Row>
      </Container>
  
      </div>

 
 
    )

}}
export default Footer;
