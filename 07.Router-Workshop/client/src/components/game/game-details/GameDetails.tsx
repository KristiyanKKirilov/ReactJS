import { useEffect, useState } from "react";

import gamesAPI from "../../../api/games-api";
import { Link, useParams } from "react-router-dom";

import Game from "../../../types/Game";
import Loader from "../../shared/Loader";

export default function GameDetails() {
  const [game, setGame] = useState<Game | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { gameId } = useParams<{ gameId: string }>();

  useEffect(() => {
    if (gameId) {
      gamesAPI.getOne(gameId).then((game) => setGame(game));
    }
  }, [gameId]);
  

  if(!game){
    return <Loader/>
  }

  async function deleteGame(){
    try {
        if(gameId){
            await gamesAPI.deleteGame(gameId);
            
        }
    } catch (error) {
        setError('Failed to delete the game.');
    }
  }

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        <div className="buttons">
          <Link to={`/games/${game._id}/edit`} className="button">
            Edit
          </Link>
          <Link to="/games" className="button" onClick={deleteGame}>
            Delete
          </Link>
        </div>
      </div>

    
    </section>
  );
}
