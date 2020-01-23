import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggle: true
    }
  }
  toggleUpdate = () => {
    this.setState({ isToggle: !this.state.isToggle });
  }
  render() {
    const { isToggle } = this.state;
    let display = '';
    if (isToggle) display = <h2> Mokshit Shah </h2>
    return (
      <div>
        {display}
        <button onClick={this.toggleUpdate}>{` ${isToggle ? "Hide" : "Show"} Tab`}</button>
      </div>
    );
  }
}

export default App;
