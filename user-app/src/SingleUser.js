import Modal from 'react-bootstrap/Modal';
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class SingleUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Single: [],
			id: 0,
			edit_id: 0,
			show: false,
			updateFName:'',
			updateLName:'',
			updateEmail:'',
			updateImage:''
		}
	}


	handleShow = () => {
		this.setState({
			show: true,
		});
	}


	handleClose = () => {
		this.setState({
			show: false
		});
	}

	// componentDidUpdate(previousProps,s){
	//     if((this.props.id !== previousProps.id)) 
	//     {  
	//         axios.get(`https://reqres.in/api/users/${this.props.id}`)
	//         .then(res => this.setState({ Single : res.data.data}))
	//         .catch((err) => console.log("error"));
	//     }        
	// }

	dataUpdate = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	dataUpdateAPI = () => {
		
		axios.put(`https://reqres.in/api/users/${this.props.id}`)
      .then(res => {
				this.setState({
					show : false,
					Single : {
						first_name : this.state.updateFName,
						last_name : this.state.updateLName,
						email : this.state.updateEmail,
						id : Number (this.props.id),
						avatar : this.state.updateImage
					}
					
				});
				this.props.afterUpdateData(this.state.updateFName);
      })

	}

	componentWillReceiveProps(props) {
		if ((this.props.id !== props.id)) {
			axios.get(`https://node-fake-api.herokuapp.com/user/${props.id}`)
				.then(res => this.setState({ Single: res.data.data,
							updateFName: res.data.data.first_name,
							updateLName: res.data.data.last_name,
							updateEmail: res.data.data.email,
							updateImage: res.data.data.avatar	
					}))
				.catch((err) => console.log("error"));
		}
	}


	render() {
		return (this.props.id !== 0 &&
			<>
				<div className="user-card">
					<img src={this.state.Single.avatar} className="img" />
					<h2> {this.state.Single.first_name + " " + this.state.Single.last_name} </h2>
					<h6> {this.state.Single.email} </h6	>
					<Button variant="outline-primary" className="small" onClick={this.handleShow}> <FontAwesomeIcon icon={faEdit} /> Edit </Button>
				</div>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Edit User Data</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>

							<Form.Group as={Row} controlId="formPlaintextEmail">
								<Form.Label column sm="3">
									First Name:
    							</Form.Label>
								<Col sm="9">
									<input type="text" name="updateFName" className="form-control" value={this.state.updateFName} onChange={this.dataUpdate} />
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="formPlaintextEmail">
								<Form.Label column sm="3">
									Last name :
    							</Form.Label>
								<Col sm="9">
									<input type="text" name="updateLName" className="form-control" value={this.state.updateLName} onChange={this.dataUpdate} />
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="formPlaintextEmail">
								<Form.Label column sm="3">
									Email :
    							</Form.Label>
								<Col sm="9">
									<input type="text" name="updateEmail" className="form-control" value={this.state.updateEmail} onChange={this.dataUpdate} />
								</Col>
							</Form.Group>

						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="outline-danger" onClick={this.handleClose}>
							Cancel
          </Button>
						<Button variant="outline-success" onClick={this.dataUpdateAPI}>
							Submit
          </Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default SingleUser;