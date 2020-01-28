import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      isToggle: true,
      isDisplay: false

    }
  }
  toggleUpdate = () => {
    this.setState({ isToggle: !this.state.isToggle });
  }
  dataSubmit = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  dataDisplay = (event) => {
    this.setState({ isDisplay: true });
  }

  render() {
    const { isToggle, fname, isDisplay } = this.state;
    let display = '';
    if (isToggle) display =
      <>
        <form>

          <h2>{isDisplay && fname} </h2>
        </form>

      </>
    return (
      <div>
        <input type="text" name="fname" onChange={this.dataSubmit} />
        <button onClick={this.dataDisplay}> Submit </button>
        {display}
        <button onClick={this.toggleUpdate}>{` ${isToggle && isDisplay ? "Hide" : "Show"} Tab`}</button>
      </div>
    );
  }
}

export default App;
