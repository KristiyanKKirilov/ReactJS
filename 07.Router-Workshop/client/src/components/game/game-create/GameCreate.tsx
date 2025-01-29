import { ChangeEvent, FormEvent, useState } from "react";
import {v4 as uuidv4} from "uuid";

import * as gamesAPI from "../../../api/games-api";

import Game from "../../../types/Game";
import { useNavigate } from "react-router-dom";

export default function GameCreate() {
  const [formValues, setFormValues] = useState<Game>({
    _id: "",
    title: "",
    category: "",
    maxLevel: 0,
    imageUrl: "",
    summary: "",
  });
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<String | null>(null);

  async function createGameHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const uniqueId = uuidv4();
    const gameWithId = {...formValues, _id: uniqueId};
    try {
        
        const createdGame = await gamesAPI.createGame(gameWithId);

        setFormValues({
            _id: "", 
            title: "",
            category: "",
            maxLevel: 0,
            imageUrl: "",
            summary: "",
          });
          navigate('/games');

    } catch (error) {
        setError("Failed to create the game. Please try again later.");
      console.error("Error creating game:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value
    }));


  };

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={createGameHandler}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
            onChange={changeHandler}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
            onChange={changeHandler}
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            placeholder="1"
            onChange={changeHandler}
          />

          <label htmlFor="imageUrl">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            onChange={changeHandler}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" onChange={changeHandler}></textarea>
          <input className="btn submit" type="submit" value="Create Game" />
        </div>
      </form>
    </section>
  );
}
