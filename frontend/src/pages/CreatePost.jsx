import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/postService";
import userPostStore from "../store/postStore";

function CreatePost() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const addPost = userPostStore((state) => state.addPost);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!text.trim()) {
      setError("Post content is required.");
      return;
    }

    try {
      const newPost = await createPost(text);
      addPost(newPost);
      navigate("/");
    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className='max-w-xl mx-auto mt-10 bg-bg p-6 rounded-xl shadow'>
      <h2 className='text-xl font-semibold mb-4'>Create a New Post</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          className='w-full ring ring-border rounded-lg p-3 min-h-[120px] focus:outline-none focus:ring focus:border-primary bg-bg-light'
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

        <button
          type='submit'
          className='mt-4 bg-primary hover:bg-primary/90 text-text-white px-5 py-2 rounded-lg font-medium transition'>
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
