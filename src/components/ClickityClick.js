import React, { Component } from 'react';

export default class ClickityClick extends Component {
	constructor() {
		super();
		this.state = {
			hasBeenClicked: false
		};
	}

	handleClick = () => {
		this.setState(previousState => {
			return { hasBeenClicked: !previousState.hasBeenClicked }
		});
	}

	render() {
		return(
			<div>
				<button onClick={this.handleClick}
				style={{cursor: "pointer", width:100, height: 100, backgroundColor: this.state.hasBeenClicked ? "#00F" : "#F00"}}>
					{this.state.hasBeenClicked ? "ON" : "OFF"}
				</button>
			</div>
		);
	}
}
