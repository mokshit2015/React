import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js';
import Middle from './Middle.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["Nadir", "Bhoomi", "Meet", "Hardik", "khushbu", "Vivek"]
    }
  }

  multipleDisplay = () => this.state.data.map((a) => <Middle name={a} />)

  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
            <h3> Mokshit Shah</h3>
          </div>
          <div className="menu">
            <ul className="options">
              <li> Home </li>
              <li> About Us </li>
              <li> Products </li>
              <li> Contact </li>
            </ul>
          </div>
        </div>
        <div className="middle-area">
          {this.multipleDisplay()}
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
