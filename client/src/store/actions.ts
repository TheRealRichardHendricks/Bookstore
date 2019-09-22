import { Action } from 'redux';
import { Book } from '../models/Book';

export const DELETE_BOOK = 'DELETE BOOK';
export const SELECT_BOOK = 'SELECT BOOK';
export const ADD_BOOK = 'ADD BOOK';
export const FETCH_BOOKS = 'FETCH BOOKS';
export const ADD_BOOKS = 'ADD BOOKS';

export interface DeleteBook extends Action {
	bookId: string;
}

export interface SelectBook extends Action {
	bookId: string;
}

export interface AddBook extends Action {
	book: Book;
}

export interface FetchBooks extends Action {}

export interface AddBooks extends Action {
	books: Book[];
}

export function deleteBook(bookId: string): DeleteBook {
	return {
		type: DELETE_BOOK,
		bookId: bookId
	};
}

export function selectBook(bookId: string): SelectBook {
	return {
		type: SELECT_BOOK,
		bookId: bookId
	};
}

export function addBook(book: Book): AddBook {
	return {
		type: ADD_BOOK,
		book: book
	};
}

export function fetchBooks(): FetchBooks {
	return {
		type: FETCH_BOOKS
	};
}

export function addBooks(books: Book[]): AddBooks {
	return {
		type: ADD_BOOKS,
		books: books
	};
}
