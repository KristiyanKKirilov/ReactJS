import MovieListItem from "./MovieListItem";

export default function MovieList(props){

    return (
        <>
            <h1>{props.title}</h1>
             
            <ul>
                    <MovieListItem title={props.movies[0]}/>
                    <MovieListItem title={props.movies[1]}/>
                    <MovieListItem title={props.movies[2]}/>
                    <MovieListItem title={props.movies[3]}/>
            </ul>
        </>
    );
}
