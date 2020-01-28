import React from 'react';
import './App.css';
import Demo from './Demo.js';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("Constructor called");
    this.state = {
      a : 1
    }
  }
  UNSAFE_componentWillMount(){
    console.log("Component will mount called");
  }
  componentDidMount(){
    console.log("Component did mount called");
  }
  updateData = () => {
    this.setState({
      a:this.state.a + 1  
    });
  }

  displayComponent = () =>  <Demo a={this.state.a} />
    
  
  shouldComponentUpdate(nextProps,nextState){
    console.log("Should Component Update Called New Value= " + nextState.a );
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps,nextState){
    console.log("Component will Update Called New Value= " + nextState.a );
  }
  componentDidUpdate(prevProps,prevState){
    console.log("Component did Update Called Old Value= " + prevState.a);
  }

  componentWillUnmount(){
    console.log("Unmount Called");
  }

  render(){
    console.log("Component render called");
    return(
      <div>
        <h1>Hello {this.state.a}</h1>
        <button onClick={this.updateData}> Add </button>
        {this.state.a !== 3 && this.displayComponent()}
      </div>
    );
  }
}

export default App;
