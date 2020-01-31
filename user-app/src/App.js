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
      newFname: '',
      updateFlag: false
    }
  }

  afterUpdateData = (newData) => {
    console.log("1")
    this.setState({
      // newFname: newData,
      // updateFlag: true
    })

  }


  findUser = (event) => {
    this.setState({
      id: event.target.id,
      show: true
    });
  }

  render() {
    const { updateFlag,id,newFname } = this.state;
    return (
      <div className="flexContainer">
        <div className="users">
          <center><h2> User List </h2></center>
          <AllUsers updateFlag={updateFlag}
            id={id}
            findUser={this.findUser}
            newFname={newFname}
          />
        </div>
        <div className="singleUser">
          <center><h2> Profile </h2></center>
          <SingleUser id={id} afterUpdateData={this.afterUpdateData} />
        </div>
      </div>
    );
  }
}

export default App;
