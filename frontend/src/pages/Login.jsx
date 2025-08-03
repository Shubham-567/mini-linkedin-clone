import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { loginUser } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPassHidden, setIsPassHidden] = useState(true);

  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { user, token } = await loginUser({ email, password });
      login(user, token);

      //   alert("login success");
      navigate("/");
    } catch (error) {
      setError(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className='form-wrapper'>
        <div className='form-container'>
          <h2 className='form-heading'>Welcome Back</h2>

          <p className='form-desc'>Sign in to continue to your account</p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='email' className='form-label'>
                Email
              </label>

              <input
                id='email'
                type='email'
                placeholder='Enter your email'
                className='form-input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor='password' className='form-label'>
                Password
              </label>

              <input
                id='password'
                type={isPassHidden ? "password" : "text"}
                placeholder='Enter your password'
                className='form-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='showPassword'
                value={isPassHidden}
                onChange={() => setIsPassHidden(!isPassHidden)}
              />
              <label htmlFor='showPassword'>Show Password</label>
            </div>

            <button type='submit' className='primary-btn w-full'>
              Log In
            </button>

            {error && (
              <p className='text-red-500 text-sm text-center'>{error}</p>
            )}

            <p className='text-sm text-center'>
              Don’t have an account?{" "}
              <Link to='/register' className='text-primary hover:underline'>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
