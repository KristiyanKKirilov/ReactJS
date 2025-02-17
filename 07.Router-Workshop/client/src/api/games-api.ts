import { BASE_URL } from "../constants";
import Game from "../types/Game";
import { get, post, put, del } from "./requester";

export const getAll = async (): Promise<Game[]> => {
  const result: Record<string, Game> = await get<Record<string, Game>>(
    BASE_URL
  );
  const games: Game[] = Object.values(result);
  return games;
};

export const getOne = (gameId: string): Promise<Game> =>
  get<Game>(`${BASE_URL}/${gameId}`);

export const createGame = (gameData: Game): Promise<Game> =>
  post<Game>(`${BASE_URL}`, gameData);

export const editGame = (gameId: string, gameData: Game): Promise<Game> =>
  put<Game>(`${BASE_URL}/${gameId}`, gameData);

export const deleteGame = (gameId: string): Promise<void> =>
  del<void>(`${BASE_URL}/${gameId}`);

const gamesAPI = {
  getAll,
  getOne,
  createGame,
  editGame,
  deleteGame,
};

export default gamesAPI;
