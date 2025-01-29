import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Game from "../../../types/Game";
import gamesAPI from "../../../api/games-api";
import Loader from "../../shared/Loader";

export default function GameEdit() {
  const { gameId } = useParams<{ gameId: string }>();

  const [game, setGame] = useState<Game | null>(null);
  const [formValues, setFormValues] = useState<Game>({
    _id: "",
    title: "",
    category: "",
    maxLevel: 0,
    imageUrl: "",
    summary: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (gameId) {
          const gameData = await gamesAPI.getOne(gameId);
          setGame(gameData);
          setFormValues(gameData);
        }
      } catch (error) {
        setError("Failed to fetch game data");
      }
    })();
  }, [gameId]);

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      if (gameId) {
        await gamesAPI.editGame(gameId, formValues);
      }
    } catch (err) {
      setError("Failed to update the game.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!game) {
    console.log("Game not found");
  }

  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={submitHandler}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={changeHandler}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formValues.category}
            onChange={changeHandler}
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            value={formValues.maxLevel}
            onChange={changeHandler}
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formValues.imageUrl}
            onChange={changeHandler}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" value={formValues.summary} onChange={changeHandler}></textarea>
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
}
