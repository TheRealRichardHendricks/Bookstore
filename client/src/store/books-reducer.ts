import { Book } from '../models/Book';
import { Action } from 'redux';
import {
	DELETE_BOOK,
	DeleteBook,
	ADD_BOOK,
	AddBook,
	ADD_BOOKS,
	AddBooks
} from './actions';

const initialState: Book[] = [];

export function booksReducer(state: Book[] = initialState, action: Action) {
	switch (action.type) {
		case DELETE_BOOK: {
			const { bookId } = action as DeleteBook;
			return state.filter((book: Book) => book.isbn !== bookId);
		}
		case ADD_BOOK: {
			const { book } = action as AddBook;
			return [...state, book];
		}
		case ADD_BOOKS: {
			const { books } = action as AddBooks;
			return [...state, ...books];
		}
		default:
			return state;
	}
}
