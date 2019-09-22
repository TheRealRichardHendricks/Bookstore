import { Book } from '../models/Book';
import { Action } from 'redux';
import { SELECT_BOOK, SelectBook } from './actions';

const initialState: Book = {
	title: '-',
	isbn: '-'
};

export function selectedBookReducer(
	state: Book = initialState,
	action: Action
) {
	switch (action.type) {
		case SELECT_BOOK: {
			const { bookId } = action as SelectBook;
			let book: Book = { title: bookId, isbn: bookId };
			return book;
		}
		default:
			return state;
	}
}
