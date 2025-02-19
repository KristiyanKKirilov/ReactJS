import commentsApi from "../api/comments-api";

export default function useCreateComment(){
    const createHandler = (gameId: string, comment: string) => commentsApi.create(gameId, comment);
   
    return createHandler;
}
