import React from "react";
import PostCard from "./PostCard";

function UserPosts({ posts }) {
  if (!posts?.length) {
    return <p className='text-center text-text-muted'>No posts yet</p>;
  }

  return (
    <div className='space-y-6'>
      <h3 className='heading-1'>Posts</h3>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default UserPosts;
