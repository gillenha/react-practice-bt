import React from 'react';
// import BookListItem from '../BookListItem/BookListItem';
import './BookList.css';

const BookList = (props) => {
	return (
		<div>
			<table>
				<tbody>
					<tr className="heading">
						<td>Book Title</td>
						<td>Length</td>
						<td>Author</td>
						<td>Finished</td>
					</tr>
					{props.books.map(book => (
						<tr key={book.id}>
							<td>{book.name}</td>
							<td>{book.length}</td>
							<td>{book.author}</td>
							<td>{book.finished ? "Yes" : "No"}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default BookList;


