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
      show: false,
      newFname:''
    }
  }

  afterUpdateData = (newData) => {
    this.setState({
      newFname : newData
    })
    
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
          <center><h2> User List </h2></center>
          <AllUsers  id={this.state.id} findUser={this.findUser} 	newFname={this.newFname}/>
        </div>
        <div className="singleUser">
          <center><h2> Profile </h2></center>
          <SingleUser id={this.state.id}  afterUpdateData={this.afterUpdateData}/>
        </div>
      </div>
    );
  }
}

export default App;
