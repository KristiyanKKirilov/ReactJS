import { useState } from "react";

import Game from "../../../types/Game";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { useCreateGame } from "../../../hooks/useGames";

const categories = [
    "Action",
    "Horror",
    "Racing",
    "PVP",
    "Simulator",
    "MMO RPG",
];
const initialValues: Game = {
    _id: "",
    title: "",
    category: "",
    maxLevel: 0,
    imageUrl: "",
    summary: "",
    comments: [],
};
export default function GameCreate() {
    const createGame = useCreateGame();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const createHandler = async (values: Game) => {
        setIsLoading(true);
        try {
            const { _id: gameId } = await createGame(values);
            navigate(`/games/${gameId}/details`);
        } catch (error) {
            const err = error as Error;
            console.error("Error creating game:", err);
        } finally {
            setIsLoading(false);
        }
    };
    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        createHandler
    );

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        value={values.title}
                        onChange={changeHandler}
                    />

                    <label htmlFor="category">Category:</label>
                    <select
                        name="category"
                        id="category"
                        value={values.category}
                        onChange={changeHandler}
                    >
                        {categories.map((category) => (
                            <option
                                key={category}
                                value={category.toLowerCase()}
                            >
                                {category}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        placeholder="1"
                        value={values.maxLevel}
                        onChange={changeHandler}
                    />

                    <label htmlFor="imageUrl">ImageUrl:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Set an image url..."
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={values.summary}
                        onChange={changeHandler}
                    ></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Game"
                    />
                </div>
            </form>
        </section>
    );
}
