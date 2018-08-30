import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
	render() {
		if(!this.props.show) {
			return null;
		}	

		return (
				<div className="Modal">
					{this.props.children}
					<button onClick={this.props.onClose}>Close</button>
				</div>
			);	
		}	
}

export default Modal;