import GameComment from "./GameComment";

export default interface Game {
    _id: string;
    title: string;
    category: string;
    maxLevel: number;
    imageUrl: string;
    summary: string;
    comments: GameComment[];
}
