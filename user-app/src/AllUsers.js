import Modal from 'react-bootstrap/Modal';
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


class AllUsers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [],
			show: false,
			delete_id: 0,
			first_name: '',
			updateFlag: false
		}
	}

	componentDidMount() {
		axios.get(`https://reqres.in/api/users?page=2`)
			.then(res => this.setState({ user: res.data.data }))
			.catch((err) => console.log("error"));
	}

	handleShow = (id, fname) => {
		this.setState({
			show: true,
			delete_id: id,
			first_name: fname
		});
	}

	handleClose = () => {
		this.setState({
			show: false,
			delete_id: 0
		});
	}

	deleteData = () => {
		axios.delete(`https://reqres.in/api/users/${this.state.delete_id}`)
			.then(this.newArray)
			.then(this.setState({ show: false }))
			.catch((err) => console.log("error"));
	}

	newArray = () => {
		this.setState({
			user: this.state.user.filter(name => name.id !== this.state.delete_id)
		})
	}

	componentWillReceiveProps(props){
			this.setState({
				updateFlag : props.updateFlag
			})
	}

	afterUpdateArray = () => {
		 const {id,newFname} = this.props;
		// const userData = this.state.user.map(data => data.id === id ? data.first_name = newFname : data);
		// console.log("id, name", id, newFname, userData);
		// this.setState({
		// 	user: userData,
		// 	updateFlag : false																								
		// }, ()=> console.log("updated", this.state.user))

		const usersData = [...this.state.user];
    const index = usersData.findIndex(data => data.id === id);
    usersData[index].first_name = newFname;
		this.setState({user: usersData, updateFlag : false});
		console.log(this.state.user);
	}	

	render() {
		const { updateFlag,user,show,first_name } = this.state;
		return (
			<>
				{updateFlag && this.afterUpdateArray()}		
				{
					 
					user.map((data, i) => {
						return <div className="name" key={i}>
							<Button  variant="outline-primary" className="big" id={data.id} onClick={this.props.findUser}>{data.first_name}</Button>
							<Button  variant="outline-danger" className="small" onClick={() => this.handleShow(data.id, data.first_name)}> <FontAwesomeIcon icon={faTrashAlt} /> </Button>
						</div>
					}
					)

				}


				<Modal show={show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Do You Want to Delete?</Modal.Title>
					</Modal.Header>
					<Modal.Body>User : {first_name}</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							No
          </Button>
						<Button variant="danger" onClick={this.deleteData}>
							Yes
          </Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default AllUsers;