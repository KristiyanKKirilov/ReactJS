import { BASE_URL } from "../constants";
import  GameComment  from "../types/GameComment";
import { get, post } from "./requester";

const getAll = async (gameId: string): Promise<GameComment[]> => {
    const result: Record<string, GameComment> = await get(`${BASE_URL}/${gameId}/comments`);
    const comments: GameComment[] = Object.values(result);
    return comments;
}
const create = async (gameId: string, comment: GameComment) =>
  post(`${BASE_URL}/${gameId}/comments`, comment);


export default{
    create,
    getAll
}
