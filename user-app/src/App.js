import React from 'react';
import './style.scss';
import AllUsers from './AllUsers.js';
import SingleUser from './SingleUser.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      show: false
    }
  }


  findUser = (event) => {
    this.setState({
      id: event.target.id,
      show: true
    });
  }

  render() {
    return (
      <div className="flexContainer">
        <div className="users">
          <center><h3> User List </h3></center>
          <AllUsers findUser={this.findUser} />
        </div>
        <div className="singleUser">
          <center><h2> Profile </h2></center>
          <SingleUser id={this.state.id} />
        </div>
      </div>
    );
  }
}

export default App;
