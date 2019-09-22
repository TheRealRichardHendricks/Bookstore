import React, { Component, Dispatch } from 'react';
import { AppState } from '../store';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { Book } from '../models/Book';

interface Props {
	books?: Book[];
}

interface State {}

class BookCounter extends Component<Props, State> {
	render() {
		if (!this.props.books) {
			return <p>Total Books: 0</p>;
		}
		return (
			<div>
				<p>Total Books: {this.props.books.length}</p>
			</div>
		);
	}
}

function mapStateToProps(state: AppState) {
	return {
		// prop name <= store slice
		books: state.books
	};
}

export default connect(
	mapStateToProps,
	null
)(BookCounter);
