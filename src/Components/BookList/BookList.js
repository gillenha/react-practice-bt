import React from 'react';
import Auxil from '../../hoc/Auxil';
import './BookList.css';

const BookList = (props) => {
	return (
		<Auxil>
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
		</Auxil>
	);
}

export default BookList;


