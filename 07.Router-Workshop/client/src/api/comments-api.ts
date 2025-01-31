import { BASE_URL } from "../constants";
import { post } from "./requester";

const createComment = (gameId: string, username: string, text: string) =>
  post(`${BASE_URL}/${gameId}/comments`, { username, text });


export default{
    createComment,
}
