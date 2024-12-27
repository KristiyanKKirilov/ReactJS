import './App.css'
import MovieList from './components/MovieList'


function App() {
	const movies = [
		'The matrix',
		'The Man of Steel',
		'Lord of the rings',
		'Case for Christ'
	];

	return <MovieList movies={movies} title="My movies"/>;
}

export default App
