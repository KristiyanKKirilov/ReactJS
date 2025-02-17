import { useEffect, useState } from "react";
import gamesAPI from "../../api/games-api";
import Game from "../../types/Game";

import GameLatestItem from "../game/game-latest-item/GameLatestItem";

export default function Home() {
    const [latestGames, setLatestGames] = useState<Game[]>([]);

    useEffect(() => {
        (async () => {
            const result: Game[] = await gamesAPI.getAll();
            const games = Object.values(result);
            setLatestGames(games.reverse().slice(0, 3));  
        })();
    }, []);


    return (
        <section id="welcome-world">

        <div className="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero"/>

        <div id="home-page">
            <h1>Latest Games</h1>

            {/* <!-- Display div: with information about every game (if any) --> */}
            {latestGames.length > 0
            ? latestGames.map(game => <GameLatestItem key={game._id} {...game}/>)
            : <p className="no-articles">No games yet</p>}
           
           

            {/* <!-- Display paragraph: If there is no games  --> */}
            
        </div>
    </section>
    );
}
