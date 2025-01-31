import { Comment } from "../../../../types/Comment";

export default function CommentItem({
    username,
    text
}: Comment) {
  return (      
        <li className="comment">
          <p>{username}: {text}</p>
        </li>
  );
}
