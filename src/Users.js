import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import cancel from '/home/rania/IdeaProjects/testreact/src/icons/cancel.svg';
import axios from 'axios';


class  Users extends Component
{ 

  state = {
   users:[]
};

async componentDidMount() {

    axios.get('/rest/users/all')
    .then(res=>{
      console.log(res);
      console.log(res.data);
      const body = res.data;
      this.setState({ users : body});
    }
        
      ).catch(error => alert(error))

     
  
}

render(){
    const { users } = this.state;
    return (
<div className="Appi">
        
       
        <div>
        <h2>List of users</h2>
       
        
         
         <table className="table table-striped">
         <thead>
          <tr>
          <th>Id User</th><th>Name</th><th>password</th><th>email</th><th>mobile</th><th>adress</th>
          </tr>
        </thead>
        <tbody>
        
         {users.map(user=>
              <tr key={user.id}>
              <td> {user.id} </td>
               <td> {user.username} </td>
               <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.tel}</td>
                <td>{user.adresse}</td>
                <td>
                <Link  to={`/userdel/${user.email}/${user.username}`} >
                   <img className="cancel" width="20%"src={cancel} alt=""/>
                   </Link></td>
                  
              </tr>)}
              
</tbody>
              </table>

              <Link to="/product"> <h2>Check the List of Products</h2></Link>

        </div>
        </div>



    );


}



}
export default Users;