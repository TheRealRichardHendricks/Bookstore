import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './store';
import { Provider } from 'react-redux';
import BookCounter from './components/BookCounter';
import SelectedBook from './components/SelectedBook';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './store/sagas';
import { fetchBooks } from './store/actions';

const sagaMiddleware = createSagaMiddleware();
const bookStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

class App extends Component {
	render() {
		return (
			<Provider store={bookStore}>
				<BookList />
				<BookCounter />
				<SelectedBook />
				<button onClick={() => bookStore.dispatch(fetchBooks())}>Fetch</button>
			</Provider>
		);
	}
}

export default App;
