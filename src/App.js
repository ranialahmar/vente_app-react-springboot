import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    users: []
  };

  async componentDidMount() {
    const response = await fetch('/rest/users/all');
    const body = await response.json();
    this.setState({ users: body});
  }

  render() {
    const {users} = this.state;

    return (
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Users List</h2>
            {users.map(user=>
              <div key={user.id}>
                {user.name} :
                {user.email}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
