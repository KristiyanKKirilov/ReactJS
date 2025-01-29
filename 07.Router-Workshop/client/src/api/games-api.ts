import { BASE_URL } from "../constants";
import Game from "../types/Game";
import { get, post, put, del } from "./requester";

export const getAll = async (): Promise<Game[]> => {
  const result: Record<string, Game> = await get<Record<string, Game>>(BASE_URL);
  const games: Game[] = Object.values(result);
  return games;
};

export const getOne = (gameId: string): Promise<Game> =>
  get<Game>(`${BASE_URL}/${gameId}`);

export const createGame = (gameData: Game): Promise<Game> => 
    post<Game>(`${BASE_URL}`, gameData);

const gamesAPI = {
  getAll,
  getOne,
};

export default gamesAPI;
