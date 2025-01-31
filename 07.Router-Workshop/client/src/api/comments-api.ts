import { BASE_URL } from "../constants";
import { Comment } from "../types/Comment";
import { get, post } from "./requester";

const getAll = async (gameId: string): Promise<Comment[]> => {
    const result: Record<string, Comment> = await get(`${BASE_URL}/${gameId}/comments`);
    const comments: Comment[] = Object.values(result);
    return comments;
}

const create = (gameId: string, username: string, text: string) =>
  post(`${BASE_URL}/${gameId}/comments`, { username, text });


export default{
    create,
    getAll
}
