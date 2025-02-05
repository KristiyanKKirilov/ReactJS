import {useEffect, useState} from 'react';
import * as gamesAPI from '../api/games-api';
import Game from "../types/Game";

export function useGetAllGames(){
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        gamesAPI.getAll()
            .then(result => {
                setGames(result);   
            });
    }, []); 

    return [games];
}
