import GameComment from "./GameComment";

export default interface CommentItemProps {
    comment: {
        _id: string;
        comment: GameComment;
    }; // Type the comment prop
  }
