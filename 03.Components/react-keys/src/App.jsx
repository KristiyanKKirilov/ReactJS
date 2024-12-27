import { useState } from 'react';
import './App.css'


function App() {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Minions',
        'Lord of the rings'
    ]);

    function buttonClickHandler(){
            setMovies((oldMovies) => {
                // const newMovies = oldMovies.slice();
                const newMovies = [...oldMovies];
                newMovies[2] = 'Fast and Furious';
                newMovies.push('Ironman');
                return newMovies;
            })
    }

  return (
    <>
        <h1>Movies</h1>
        <ul>
            {/* <li>{movies[0]}</li>
            <li>{movies[1]}</li>
            <li>{movies[2]}</li> */}
            {movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>

        <button onClick={buttonClickHandler}>Change</button>      
    </>
  )
}

export default App
