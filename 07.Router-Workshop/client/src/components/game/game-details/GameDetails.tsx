import { FormEvent, useEffect, useState } from "react";

import gamesAPI from "../../../api/games-api";
import { Link, useParams } from "react-router-dom";

import Game from "../../../types/Game";
import Loader from "../../shared/Loader";

export default function GameDetails() {
  const [game, setGame] = useState<Game | null>(null);
  const [username, setUsername] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { gameId } = useParams<{ gameId: string }>();

  useEffect(() => {
    if (gameId) {
      gamesAPI.getOne(gameId).then((game) => setGame(game));
    }
  }, [gameId]);

  if (!game) {
    return <Loader />;
  }

  async function deleteGame() {
    try {
      if (gameId) {
        await gamesAPI.deleteGame(gameId);
      }
    } catch (error) {
      setError("Failed to delete the game.");
    }
  }

  function commentSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(username);
    console.log(comment);
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

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {/* <!-- list all comments for current game (If any) --> */}
            <li className="comment">
              <p>Content: I rate this one quite highly.</p>
            </li>
            <li className="comment">
              <p>Content: The best game.</p>
            </li>
          </ul>
          {/* <!-- Display paragraph: If there are no games in the database --> */}
          <p className="no-comment">No comments.</p>
        </div>

        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={commentSubmitHandler}>
            <input
              type="text"
              placeholder="Tom"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <textarea
              name="comment"
              placeholder="Comment......"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      </div>
    </section>
  );
}
