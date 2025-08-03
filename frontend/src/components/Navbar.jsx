import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Navbar() {
  const { user } = useAuthStore();

  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <span className='font-bold text-lg'>ConnectSphere</span>
      </Link>

      <div className='flex items-center gap-4'>
        <Link to='/create-post' className='cta'>
          <Plus size={16} />
          Create Post
        </Link>

        {user && (
          <Link to={`/profile/${user.id}`}>
            <img
              src={user.avatar || "https://placehold.co/48x48"}
              alt='user-avatar'
              className='size-10 rounded-full object-cover'
            />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
