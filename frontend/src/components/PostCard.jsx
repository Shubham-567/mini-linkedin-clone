import { formatDate } from "../utils/utils";

function PostCard({ post }) {
  return (
    <div className='post-card'>
      <div className='post-header'>
        <img
          src={post.author.avatar || "https://placehold.co/48x48"}
          alt={post.author.name}
        />
        <div>
          <h3 className='post-author'>{post.author.name}</h3>
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
