import { all, takeEvery, put } from 'redux-saga/effects';
import { FETCH_BOOKS, addBooks } from './actions';
import { getAllBooks } from '../services/book.service';

function* fetchBooks() {
	const books = yield getAllBooks();
	yield put(addBooks(books));
}

export function* rootSaga() {
	yield all([takeEvery(FETCH_BOOKS, fetchBooks)]);
}
