import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Navbar() {
  const { user } = useAuthStore();

  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <span className='font-bold text-lg'>Mini LinkedIn</span>
      </Link>

      <div className='flex items-center gap-4'>
        {user ? (
          <>
            <Link to='/create-post' className='cta'>
              <Plus size={16} />

              <span className='max-sm:hidden'>Create Post</span>
            </Link>

            <Link to={`/profile/${user.id}`}>
              <img
                src={user.avatar || "/images/profile.jpg"}
                alt='user-avatar'
                className='size-10 rounded-full object-cover'
              />
            </Link>
          </>
        ) : (
          <Link to='/login' className='cta'>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
