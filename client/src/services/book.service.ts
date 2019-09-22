const url = 'http://localhost:3001/books';

export function getAllBooks() {
	return fetch(url).then(response => response.json());
}
