import { useEffect, useState } from "react";

const baseUrl = 'https://swapi.py4e.com/api/';

export default function CharacterList(){
    const [chars, setChars] = useState([]);

    useEffect(() => {
        // fetch(`${baseUrl}/people/4`)
        // .then(res => res.json())
        // .then(result => console.log(result));
        async function fetchCharacters(){
            const response = await fetch(`${baseUrl}/people`);
            const result = await response.json();
            setChars(result.results);
        }

        fetchCharacters();
    }, []);

    return (
        <>
            <h2>Characters</h2>
            <ul>
                {chars.map(char => <li key={char.name}>{char.name}</li>)}
            </ul>
        </>
    );
}
