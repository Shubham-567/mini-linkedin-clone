import { useParams } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import { useEffect, useState } from "react";
import { getUserProfile } from "../services/userService";
import UserPosts from "../components/UserPosts";

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const { user, posts } = await getUserProfile(userId);

        setUser(user);
        setPosts(posts);
      } catch (error) {
        console.error(error);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='flex justify-center gap-4 px-4 py-6'>
      <div className='max-w-3xl space-y-6'>
        {user && <ProfileCard user={user} />}
        <UserPosts posts={posts} />
      </div>

      <div className='flex flex-col items-center gap-4'>
        <div className='card flex flex-col gap-4 min-w-[400px]'>
          <h4 className='heading-1'>People you may know</h4>

          <div className='flex items-center gap-2'>
            <img
              src={"https://placehold.co/48x48"}
              alt='User'
              className='rounded-full h-10 w-10'
            />
            <div>
              <h3 className='font-semibold'>John Doe</h3>
              <p className='text-text-muted'>Lead Developer at Google</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <img
              src={"https://placehold.co/48x48"}
              className='rounded-full h-10 w-10'
              alt='User'
            />
            <div>
              <h3 className='font-semibold'>John Doe</h3>
              <p className='text-text-muted'>Lead Developer at Google</p>
            </div>
          </div>
        </div>

        <div className='card flex flex-col gap-4 min-w-[400px]'>
          <h4 className='heading-1'>Connection</h4>

          <div className='flex items-center gap-2'>
            <img
              src={"https://placehold.co/48x48"}
              alt='User'
              className='rounded-full h-10 w-10'
            />
            <div>
              <h3 className='font-semibold'>John Doe</h3>
              <p className='text-text-muted'>Lead Developer at Google</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <img
              src={"https://placehold.co/48x48"}
              className='rounded-full h-10 w-10'
              alt='User'
            />
            <div>
              <h3 className='font-semibold'>John Doe</h3>
              <p className='text-text-muted'>Lead Developer at Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
