import React, { Component } from 'react';
import AddBook from '../Components/AddBook/AddBook';
import BookList from '../Components/BookList/BookList';

class BookTracker extends Component {
		state = {
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
					finished: true }
			]
		}

	render() {
		return (
			<div className="App">
				<BookList books={this.state.books} />
				<AddBook />
			</div>
		)
	}
}

export default BookTracker;