import { Link } from "react-router-dom";
import { formatDate } from "../utils/utils";
import { MessageCircle, ThumbsUp } from "lucide-react";

function PostCard({ post }) {
  // console.log(post.author._id);

  return (
    <div className='card'>
      <div className='post-header'>
        <Link to={`/profile/${post.author._id}`}>
          <img
            src={post.author.avatar || "/images/profile.jpg"}
            alt={post.author.name}
            className='post-img'
          />
        </Link>
        <div>
          <Link to={`/profile/${post.author._id}`}>
            <h3 className='post-author'>{post.author.name}</h3>
          </Link>
          <p className='post-date'>{formatDate(post.createdAt)}</p>
        </div>
      </div>

      <p className='post-text'>{post.text}</p>

      <div className='flex gap-4 items-center text-gray-500 text-sm'>
        <p className='flex gap-1 items-center'>
          <ThumbsUp className='size-4' />0 Likes
        </p>
        <p className='flex gap-1 items-center'>
          <MessageCircle className='size-4' />0 Comments
        </p>
      </div>
    </div>
  );
}

export default PostCard;
