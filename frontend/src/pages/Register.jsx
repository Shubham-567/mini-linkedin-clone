import { useState } from "react";
import useAuthStore from "../store/authStore";
import { registerUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });

  const [error, setError] = useState("");
  const [isPassHidden, setIsPassHidden] = useState(true);

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { user, token } = await registerUser(formData);
      login(user, token);
      //   alert("Registration success");
      navigate("/");
    } catch (error) {
      setError(error?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className='form-wrapper'>
      <div className='form-container'>
        <h2 className='form-heading'>Create Account</h2>
        <p className='form-desc'>Register to join the community</p>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              className='form-input'
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              className='form-input'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type={isPassHidden ? "password" : "text"}
              className='form-input'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='showPassword'
              onChange={() => setIsPassHidden(!isPassHidden)}
            />
            <label htmlFor='showPassword'>Show Password</label>
          </div>

          <div>
            <label htmlFor='bio' className='form-label'>
              Bio <span className='text-gray-500'>(Optional)</span>
            </label>
            <textarea
              id='bio'
              name='bio'
              className='form-input h-24 resize-none'
              placeholder='Tell us something about yourself'
              value={formData.bio}
              onChange={handleChange}></textarea>
          </div>

          <button type='submit' className='primary-btn w-full'>
            Register
          </button>

          {error && <p className='text-red-500 text-sm text-center'>{error}</p>}

          <p className='text-sm text-center'>
            Already have an account?{" "}
            <Link to='/login' className='text-primary hover:underline'>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
