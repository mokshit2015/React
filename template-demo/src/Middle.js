import React from 'react';

class Middle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name } = this.props;
		return (
			<div className="card">
				<p className="title"> {name} </p>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type
                     specimen book</p>
			</div>

		);
	}

}

export default Middle;