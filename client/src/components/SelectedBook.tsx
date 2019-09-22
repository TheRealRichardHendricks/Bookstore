import React, { Component, Dispatch } from 'react';
import { AppState } from '../store';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { Book } from '../models/Book';

interface Props {
	selectedBook?: Book;
}

interface State {}

class SelectedBook extends Component<Props, State> {
	render() {
		if (!this.props.selectedBook) {
			return <p>Selected Book: -</p>;
		}
		return (
			<div>
				<p>Selected Book: {this.props.selectedBook.title}</p>
			</div>
		);
	}
}

function mapStateToProps(state: AppState) {
	return {
		// prop name <= store slice
		selectedBook: state.selected
	};
}

export default connect(
	mapStateToProps,
	null
)(SelectedBook);
