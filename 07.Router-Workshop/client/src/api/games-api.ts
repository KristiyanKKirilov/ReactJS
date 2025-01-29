import Game from "../types/Game";
import { get } from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/games";

export const getAll = async (): Promise<Game[]> => {
  const games: Game[] = await get<Game[]>(BASE_URL);
  return games;
};

export const getOne = (gameId: string): Promise<Game> =>
  get<Game>(`${BASE_URL}/${gameId}`);

const gamesAPI = {
  getAll,
  getOne,
};

export default gamesAPI;
