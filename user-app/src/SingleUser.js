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
		const { updateFName,updateLName,updateEmail,updateImage } = this.state;
		const { id } = this.props;
		axios.put(`https://reqres.in/api/users/${id}`)
      .then(res => {
				this.setState({
					show : false,
					Single : {
						first_name : updateFName,
						last_name : updateLName,
						email : updateEmail,
						id : Number (id),
						avatar : updateImage
					}
					
				}, () => this.props.afterUpdateData(updateFName));
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
		const { id } = this.props;
		const { avatar,first_name,last_name,email } = this.state.Single;
		const { show,updateFName,updateLName,updateEmail } = this.state;
		return (id !== 0 &&
			<>
				<div className="user-card">
					<img src={avatar} className="img" />
					<h2> {first_name + " " +  last_name} </h2>
					<h6> {email} </h6	>
					<Button variant="outline-primary" className="small" onClick={this.handleShow}> <FontAwesomeIcon icon={faEdit} /> Edit </Button>
				</div>
				<Modal show={show} onHide={this.handleClose}>
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
									<input type="text" name="updateFName" className="form-control" value={updateFName} onChange={this.dataUpdate} />
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="formPlaintextEmail">
								<Form.Label column sm="3">
									Last name :
    							</Form.Label>
								<Col sm="9">
									<input type="text" name="updateLName" className="form-control" value={updateLName} onChange={this.dataUpdate} />
								</Col>
							</Form.Group>
							<Form.Group as={Row} controlId="formPlaintextEmail">
								<Form.Label column sm="3">
									Email :
    							</Form.Label>
								<Col sm="9">
									<input type="text" name="updateEmail" className="form-control" value={updateEmail} onChange={this.dataUpdate} />
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