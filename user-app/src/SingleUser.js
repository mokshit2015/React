import React from 'react';
import axios from 'axios';

class SingleUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Single: [],
			id: 0
		}
	}



	// componentDidUpdate(p,s){
	//     if((this.props.id !== p.id))
	//     {  
	//         axios.get(`https://node-fake-api.herokuapp.com/user/${this.props.id}`)
	//         .then(res => this.setState({ Single : res.data.data}))
	//         .catch((err) => console.log("error"));
	//     }        
	// }


	componentWillReceiveProps(props) {
		if ((this.props.id !== props.id)) {
			axios.get(`https://node-fake-api.herokuapp.com/user/${props.id}`)
				.then(res => this.setState({ Single: res.data.data }))
				.catch((err) => console.log("error"));
		}
	}


	render() {
		return (this.props.id !== 0 &&
			<div className="user-card">
				<img src={this.state.Single.avatar} className="img" />
				<h2> {this.state.Single.first_name + " " + this.state.Single.last_name} </h2>
				<h6> {this.state.Single.email} </h6	>
			</div>
		);
	}
}

export default SingleUser;