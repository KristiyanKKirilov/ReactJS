import MovieList from '../components/MovieList'
import './App.css'

function App() {
  const movies = ['Minions', 'Man of steel', 'The Matrix', 'Case for Christ'];

  return <MovieList movies={movies} title="My movies"/>;
}

export default App
