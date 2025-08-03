import { Link } from "react-router-dom";
import { formatDate } from "../utils/utils";

function PostCard({ post }) {
  // console.log(post.author._id);

  return (
    <div className='card'>
      <div className='post-header'>
        <Link to={`/profile/${post.author._id}`}>
          <img
            src={post.author.avatar || "https://placehold.co/48x48"}
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

      <div className='flex gap-4 text-gray-500 text-sm'>
        <p>0 Likes</p>
        <p>0 Comments</p>
      </div>
    </div>
  );
}

export default PostCard;
