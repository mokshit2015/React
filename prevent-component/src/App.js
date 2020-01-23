import React from 'react';
import './App.css';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      editable: true
    }
  }

  updateCount = (event) => 
    this.setState({
      count: event.target.value
    });
  
  

  updateFlag = () => this.setState({ editable: !this.state.editable });

  render() {
    const { editable, count } = this.state;
    let demo='';
    
    if (editable) 
        demo =  <>
          <button onClick={this.updateFlag}> Edit </button>
        </>
    else
        demo = <Display updateCount={this.updateCount} updateFlag={this.updateFlag} s={this.state} />

     return <div>
          <h2> Counter : {count}</h2>
          {demo}
     </div>   
  }


}

export default App;
