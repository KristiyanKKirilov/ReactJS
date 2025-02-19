import { BASE_URL, COMMENTS_URL } from "../constants";
import  GameComment  from "../types/GameComment";
import { get, post } from "./requester";

const getAll = async (gameId: string): Promise<string[]> => {
    const result: Record<string, string> = await get(`${COMMENTS_URL}`);
    const comments: string[] = Object.values(result);
    return comments;
}
const create = async (gameId: string,  comment: string) =>
  post(`${COMMENTS_URL}`, {gameId, comment});


export default{
    create,
    getAll
}
