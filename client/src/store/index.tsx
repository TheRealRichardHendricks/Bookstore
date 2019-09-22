import { combineReducers } from 'redux';
import { booksReducer } from './books-reducer';
import { Book } from '../models/Book';
import { selectedBookReducer } from './selected-book-reducer';

export interface AppState {
	books: Book[];
	selected?: Book;
}

export const rootReducer = combineReducers({
	books: booksReducer,
	selected: selectedBookReducer
});
