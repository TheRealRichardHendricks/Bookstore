import React, { Component, Dispatch } from 'react';
import { Book } from '../models/Book';
import { AppState } from '../store';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { deleteBook, selectBook, addBook } from '../store/actions';

interface Props {
	books?: Book[];
	deleteBook: Function;
	selectBook: Function;
	addBook: Function;
}

interface State {
	title: string;
	isbn: string;
	author?: string;
	genre?: string;
}

class BookList extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { title: '', isbn: '', author: '', genre: '' };
	}

	render() {
		if (!this.props.books) {
			return <h1>No Books</h1>;
		}
		return (
			<div>
				{this.props.books.map((book: Book) => (
					<li key={book.isbn}>
						{book.title}{' '}
						<button onClick={() => this.props.deleteBook(book.isbn)}>
							Delete
						</button>
						<button onClick={() => this.props.selectBook(book.isbn)}>
							Select
						</button>
					</li>
				))}
				<h3>Add Book:</h3>
				<form>
					<label>Title: </label>
					<input
						type='text'
						name='title'
						value={this.state.title}
						onChange={e => this.setState({ title: e.target.value })}
					/>{' '}
					<br />
					<label>ISBN: </label>
					<input
						type='text'
						name='isbn'
						value={this.state.isbn}
						onChange={e => this.setState({ isbn: e.target.value })}
					/>{' '}
					<br />
					<label>Author: </label>
					<input
						type='text'
						name='author'
						value={this.state.author}
						onChange={e => this.setState({ author: e.target.value })}
					/>{' '}
					<br />
					<label>Genre: </label>
					<input
						type='text'
						name='genre'
						value={this.state.genre}
						onChange={e => this.setState({ genre: e.target.value })}
					/>{' '}
					<br />
				</form>
				<button
					onClick={() => {
						const book: Book = {
							title: this.state.title,
							isbn: this.state.isbn,
							author: this.state.author,
							genre: this.state.genre
						};
						this.props.addBook(book);
					}}>
					Add
				</button>
				<hr />
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

function mapDistpatchToProps(dispatch: Dispatch<Action>) {
	return {
		// prop name => dispatch action
		deleteBook: (bookId: string) => dispatch(deleteBook(bookId)),
		selectBook: (bookId: string) => dispatch(selectBook(bookId)),
		addBook: (book: Book) => dispatch(addBook(book))
	};
}

export default connect(
	mapStateToProps,
	mapDistpatchToProps
)(BookList);
