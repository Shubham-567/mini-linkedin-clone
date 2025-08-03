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

  if (loading) return <p>Loading profile...</p>;
  if (error)
    return <p className='text-red-500 text-lg text-center mt-20'>{error}</p>;

  return (
    <div className='flex flex-col lg:flex-row justify-center gap-4 px-4 py-6 lg:px-14 w-full'>
      <div className='w-full lg:max-w-2/3 space-y-6'>
        {user && <ProfileCard user={user} />}
        <UserPosts posts={posts} />
      </div>

      <div className='flex flex-col items-center gap-4 w-full lg:w-1/3'>
        <div className='card flex flex-col gap-4 w-full'>
          <h4 className='heading-1'>People you may know</h4>

          <div className='flex items-center gap-2'>
            <img
              src={"/images/profile.jpg"}
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
              src={"/images/profile.jpg"}
              className='rounded-full h-10 w-10'
              alt='User'
            />
            <div>
              <h3 className='font-semibold'>John Doe</h3>
              <p className='text-text-muted'>Lead Developer at Google</p>
            </div>
          </div>
        </div>

        <div className='card flex flex-col gap-4 w-full'>
          <h4 className='heading-1'>Connection</h4>

          <div className='flex items-center gap-2'>
            <img
              src={"/images/profile.jpg"}
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
              src={"/images/profile.jpg"}
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
