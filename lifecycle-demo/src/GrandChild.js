import React from 'react';

class GrandChild extends React.Component {
	constructor(props) {
		super(props);
		console.log("Grand Child Constructor Called");
	}

	UNSAFE_componentWillMount(){
		console.log("Grand Child -- Component will mount called");
	}

UNSAFE_componentWillReceiveProps(newProps){
		console.log("Grand Child -- Component will Receive Props Called " + newProps.a);
}

componentDidMount(){
		console.log("Grand Child -- Component did mount called");
	}

	render() {
		console.log("Grand Child -- Render called");
		return (
			<div>
				<h3> GrandChild  {this.props.a}</h3>
			</div>
		);
	}
}

export default GrandChild;