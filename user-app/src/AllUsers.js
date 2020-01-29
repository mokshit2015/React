import React from 'react';
import axios from 'axios';

class AllUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
            
        }
    }

    componentDidMount() {
        axios.get(`https://node-fake-api.herokuapp.com/user/`)
            .then(res => this.setState({ user: res.data.data }))
            .catch((err) => console.log("error"));
            
    }

    
  

    render() {
        
        return (
            <>
                <div className="name">
                {
                    this.state.user.map((data) => {
                        return <button className="btn bg-white" id={data.id} onClick={this.props.findUser}>{data.first_name}</button>
                    } 
                    )
                }
                </div>
            </>
        );
    }
}

export default AllUsers;