import Game from "../types/Game";
import { get } from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/games";

export const getAll = async (): Promise<Game[]> => {
  const result: Record<string, Game> = await get<Record<string, Game>>(BASE_URL);
  const games: Game[] = Object.values(result);
  return games;
};

export const getOne = (gameId: string): Promise<Game> =>
  get<Game>(`${BASE_URL}/${gameId}`);

const gamesAPI = {
  getAll,
  getOne,
};

export default gamesAPI;
