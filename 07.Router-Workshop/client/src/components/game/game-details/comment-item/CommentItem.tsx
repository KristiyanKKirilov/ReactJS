import GameComment from "../../../../types/GameComment";

export default function CommentItem({
  username, 
  text,
  _id
}: GameComment) {
  return (      
        <li className="comment">
          <p>{username}: {text}</p>
        </li>
  );
}
