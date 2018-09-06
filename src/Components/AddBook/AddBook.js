import React, { Component } from 'react';
import './AddBook.css'

class AddBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			length: 0,
			author: '',
			finished: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		// console.log(this.state)
		const newItem = (
			<table>
				<tbody>
					<tr>
						<td>{this.state.title}</td>
						<td>{this.state.length}</td>
						<td>{this.state.author}</td>
						<td>{this.state.finished}</td>
					</tr>
				</tbody>
			</table>
		)

		const bookTitle = newItem.props.children.props.children.props.children[0].props.children

		console.log(bookTitle)
	}



	render() {
		return (
			<div>
				<form className="AddBook" onSubmit={this.handleSubmit}>
					<p>Add a book:</p>
						<p>Name: 
							<input type="text" name="title" value={this.state.value} onChange={this.handleChange} />
						</p>
						<p>Length:
							<input type="number" name="length" value={this.state.value} onChange={this.handleChange} />
						</p>
						<p>Author:
							<input type="text" name="author" value={this.state.value} onChange={this.handleChange} />
						</p>
						<p>Finished:
							<input type="checkbox" name="finished" checked={this.state.value} onChange={this.handleChange} />
						</p>
							<input type="submit" value="Submit" />
				</form>

			</div>
		);		
	}

}

export default AddBook;