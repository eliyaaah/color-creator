import React, { Component } from 'react';

class ColorForm extends Component	{

	constructor(props)		{
		super(props);
		//this.nameInput = React.createRef();
		//this.fgInput = React.createRef();
		//this.bgInput = React.createRef();

		this.state = {
			nameInput: '',
			fgInput: '',
			bgInput: ''
		}
	}

	handleSubmit = (event) =>	{
		event.preventDefault();

		const { nameInput, fgInput, bgInput } = this.state;

		const colorObj = {
			name: nameInput,
			foreground: fgInput,
			background: bgInput
		};

		this.props.updateColors(colorObj);

		//reset forms

		this.setState	({
			nameInput: '',
			fgInput: '',
			bgInput: ''
		});
	}

	// handleNameInput = (event) =>	{
	// 	this.setState({
	// 		nameInput: event.target.value
	// 	});
	// 	console.log(this.state.nameInput);
	// }

	// handleFgInput = (event) =>	{
	// 	this.setState({
	// 		fgInput: event.target.value
	// 	});
	// 	console.log(this.state.fgInput);
	// }

	// handleBgInput = (event) =>	{
	// 	this.setState({
	// 		bgInput: event.target.value
	// 	});
	// 	console.log(this.state.bgInput);
	// }

	handleInput = (event, pieceOfState) => {
		const newState = {};

		newState[pieceOfState] = event.target.value;

		this.setState(newState);
	}
 
	render()	{

		const { nameInput, fgInput, bgInput } = this.state;

		return (
			<form onSubmit={ this.handleSubmit }>
				<div className="input-group">
					<label htmlFor="name">Name: </label>
					<input 
						type="text" 
						id="name" 
						name="name" 
						required 
						value={ nameInput } 
						onChange = { (event) => { this.handleInput(event, 'nameInput') } }
					/>
				</div>
				<div className="input-group">
					<label htmlFor="foreground">Foreground: </label>
					<input 
						type="text" 
						id="foreground" 
						name="foreground" 
						required 
						pattern="[a-fA-F\d]+"
						value={ fgInput } 
						onChange = { (event) => { this.handleInput(event, 'fgInput') } }
					/>
				</div>
				<div className="input-group">
					<label htmlFor="background">Background: </label>
					<input 
						type="text" 
						id="background" 
						name="background" 
						required 
						pattern="[a-fA-F\d]+" 
						value={ bgInput } 
						onChange = { (event) => { this.handleInput(event, 'bgInput') } }
					/>
				</div>
				<input type="submit" value="Add this color combo" />
			</form>
		);
	}
}

export default ColorForm;