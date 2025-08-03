import { useEffect } from "react";
import { getAllPost } from "../services/postService";
import userPostStore from "../store/postStore";
import PostCard from "./PostCard";

function PostList() {
  const { posts, loading, setPosts, setLoading } = userPostStore();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getAllPost();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [setPosts, setLoading]);

  if (loading) return <p className='text-lg'>Loading Recent Posts...</p>;

  return (
    <div className='space-y-6'>
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p className='text-center text-gray-500'>No posts available.</p>
      )}
    </div>
  );
}

export default PostList;
