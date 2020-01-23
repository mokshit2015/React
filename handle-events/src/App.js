import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      data2: '',
      data3: '',
      data4: '',
      data5: ''
    }
    this.secondFunction = this.secondFunction.bind(this);
  }

  normalFunction(event) {
    this.setState({
      data: event.target.value
    });
  }

  secondFunction(event) {
    this.setState({
      data2: event.target.value
    });
  }

  inlineArrow(event) {
    this.setState({
      data3: event.target.value
    });
  }

  parameterFunction(p1, p2, event) {
    this.setState({
      data3: p1,
      data4: p2
    })
  }

  simpleArrow = (event) =>  this.setState({
      data5: event.target.value
    });
  

  render() {
    return (
      
      <div>
        <h1> Handle Event</h1>
        <input type="text" onChange={this.normalFunction.bind(this)} />
        <h2> Inline method binding : {this.state.data}</h2>
        <hr></hr>
        <input type="text" onChange={this.secondFunction} />
        <h2> Bind Method in constructor : {this.state.data2}</h2>
        <hr></hr>
        <input type="text" onChange={(e) => this.inlineArrow(e)} />
        <h2> Bind Method in Inline Arrow Fn : {this.state.data3}</h2>
        <hr></hr>
        <input type="text" onChange={this.parameterFunction.bind(this, 'moksh', 'shah')} />
        <h2> Bind Method in Inline Arrow Fn 1st Parameter : {this.state.data3}</h2>
        <h2> Second Parameter : {this.state.data4}</h2>
        <hr></hr>
        <input type="text" onChange={this.simpleArrow} />
        <h2> Simple Arrow Fn : {this.state.data5}</h2>
      </div>
    );
  }
}
export default App;
