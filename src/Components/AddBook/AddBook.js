import React from 'react';
import Auxil from '../../hoc/Auxil'

const AddBook = (props) => {

	return (
		<Auxil>
			<h3>Add a Book</h3>
			<p>Name: <input type="text" /></p>
			<p>Length: <input type="number" /></p>
			<p>Author: <input type="text" /></p>
			<p>Finished: 
				<select>
					<option value="true">Yes</option>
					<option value="false">No</option>
				</select></p>
			<button type="submit">Submit</button>
			
		</Auxil>
	);
}

export default AddBook;