import PostList from "../components/PostList";

function Home() {
  return (
    <div className='max-w-3xl mx-auto px-4 py-6'>
      <h1 className='text-2xl font-bold mb-6'>Your Feed</h1>
      <PostList />
    </div>
  );
}

export default Home;
