import PostList from "../components/PostList";

function Home() {
  return (
    <div className='max-w-3xl mx-auto px-4 py-6'>
      <h1 className='heading-1'>Your Feed</h1>
      <PostList />
    </div>
  );
}

export default Home;
