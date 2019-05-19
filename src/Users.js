import React, { Component } from 'react';
import '/home/rania/IdeaProjects/testreact/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
<div className="App">
        
       
        <div>
        <p>List of users</p>
        
         
         <table className="table table-striped">
         <thead>
          <tr>
            <th>Name</th><th>password</th><th>email</th>
          </tr>
        </thead>
        <tbody>
        
         {users.map(user=>
              <tr key={user.id}>
               <td> {user.name} </td>
               <td>{user.password}</td>
                <td>{user.email}</td>
              </tr>)}
              
</tbody>
              </table>

        </div>
        </div>



    );


}



}
export default Users;