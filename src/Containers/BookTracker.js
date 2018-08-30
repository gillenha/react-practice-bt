import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import AddBook from '../Components/AddBook/AddBook';
import BookList from '../Components/BookList/BookList';
import Auxil from '../hoc/Auxil';
// import './BookTracker.css';

class BookTracker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: [
				{ id: "1", 
					name: "The Wheel of Time", 
					author: "Robert Jordan", 
					length: 958, 
					finished: true },
				{ id: "2", 
					name: "Harry Potter", 
					author: "JK Rowling", 
					length: 431, 
					finished: true },
				{ id: "3", 
					name: "The Bible", 
					author: "God", 
					length: 1221, 
					finished: false },
				{ id: "4", 
					name: "Game of Thrones", 
					author: "George RR Martin", 
					length: 776, 
					finished: false },
				{ id: "5", 
					name: "The Lord of the Rings", 
					author: "JRR Tolkein", 
					length: 145, 
					finished: true },
			],
			modalOpen: false,
		}
	}

	toggleModal = () => {
		this.setState({
			modalOpen: !this.state.modalOpen
		});
	}

	render() {
		return (
			<Auxil className="App">
				<BookList
					books={this.state.books} />
					<Modal
						show={this.state.modalOpen}
						onClose={this.toggleModal}>
						<AddBook />
					</Modal>
				<button 
					type="button"
					onClick={this.toggleModal}>Add Book</button>
			</Auxil>
		)
	}
}

export default BookTracker;