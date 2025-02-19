import { Link, useParams } from "react-router-dom";
import { useGetOneGame } from "../../../hooks/useGames";
import Game from "../../../types/Game";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "../../../hooks/useForm";
import GameComment from "../../../types/GameComment";
import { useAuthContext } from "../../../contexts/AuthContext";
import AuthContextType from "../../../types/AuthContextType";
import useCreateComment from "../../../hooks/useComments";

const initialValues:GameComment = {
  comment: ''
};

export default function GameDetails() {   
  const {gameId} = useParams();
  const [game, setGame]  = useGetOneGame(gameId!) as [Game, Dispatch<SetStateAction<Game>>];
  const createComment = useCreateComment();
  const {changeHandler, submitHandler, values } = useForm(initialValues, ({comment}) => {
     console.log(values);
     createComment(gameId ?? "", comment);
  });


  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game?.imageUrl} />
          <h1>{game?.title}</h1>
          <span className="levels">MaxLevel: {game?.maxLevel}</span>
          <p className="type">{game?.category}</p>
        </div>

        <p className="text">{game?.summary}</p>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        <div className="buttons">
          <Link to={`/games/${game?._id}/edit`} className="button">
            Edit
          </Link>
          {/* <Link to="/games" className="button" onClick={deleteGame}>
            Delete
          </Link> */}
        </div>

        {game?.comments?.length > 0 ? (
          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {/* {game?.comments.map((comment: GameComment) => (
                <CommentItem key={comment._id} {...comment} />
              ))} */}
            </ul>
          </div>
        ) : (
          <p className="no-comment">No comments.</p>
        )}

        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={submitHandler}> 
            <textarea
              name="comment"
              placeholder="Comment......"
              value={values.comment}
              onChange={changeHandler}
            ></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      </div>
    </section>
  );
}
