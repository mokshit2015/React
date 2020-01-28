import React from 'react';
import GrandChild from './GrandChild';

class Demo extends React.Component{
    constructor(props){
        super(props);
        console.log("Child -- constructor props called");
        this.state = {
            b : this.props.a
        }
    }

    UNSAFE_componentWillMount(){
        console.log("Child -- Component will mount called");
      }

    UNSAFE_componentWillReceiveProps(newProps){
        console.log("Child -- Component will Receive Props Called " + newProps.a);
    }

    componentDidMount(){
        console.log("Child -- Component did mount called");
      }

      shouldComponentUpdate(nextProps){
        console.log("Child -- Should Component Update Called");
        return true;
      }
      UNSAFE_componentWillUpdate(nextProps){
        console.log("Child -- Component will Update Called ");
      }
      componentDidUpdate(prevProps){
        console.log("Child -- Component did Update Called ");
      }
      componentWillUnmount(){
        console.log("Child -- Unmount Called");
      }

      updateProps = () => {
          this.setState({
            b : this.state.b + 1
          });        
      }

    render(){
        console.log("Child -- Render Called");
        return(
            <div>
                <h3> Props : {this.props.a} </h3>
                <h3> Child State : {this.state.b} </h3>
                <button onClick={this.updateProps}> Props Update</button>
                <GrandChild a={this.props.a} />
            </div>
        );
    }
}

export default Demo;