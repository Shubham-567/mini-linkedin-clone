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
      <h2 className='form-heading text-start'>Create a New Post</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          className='form-input min-h-[120px] bg-bg-light'
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={500}
        />

        <p className='text-sm text-text-muted text-right'>Max 500 Characters</p>

        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

        <button type='submit' className='primary-btn w-full max-w-1/3'>
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
