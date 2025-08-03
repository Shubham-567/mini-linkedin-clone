import { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Navbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleLogout = () => {
    setMenuOpen(false);
    logout();
    navigate("/login");
  };

  // outside click will close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <span className='font-bold text-lg'>Mini LinkedIn</span>
      </Link>

      <div className='flex items-center gap-4 relative'>
        {user ? (
          <>
            <Link to='/create-post' className='cta'>
              <Plus size={16} />
              <span className='max-sm:hidden'>Create Post</span>
            </Link>

            <div ref={menuRef} className='relative'>
              <img
                src={user.avatar || "/images/profile.jpg"}
                alt='user-avatar'
                className='size-10 rounded-full object-cover cursor-pointer'
                onClick={() => setMenuOpen((prev) => !prev)}
              />

              {menuOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-bg border border-gray-400 rounded shadow-lg z-10 p-2 text-sm'>
                  <p className='font-semibold px-3 py-1'>{user.name}</p>
                  <hr className='my-1' />
                  <Link
                    to={`/profile/${user.id}`}
                    className='block px-3 py-2 hover:bg-gray-100'
                    onClick={() => setMenuOpen(false)}>
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className='w-full text-left px-3 py-2 text-red-500 font-medium hover:bg-red-100'>
                    Logout
                  </button>
                </div>
              )}
            </div>
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
