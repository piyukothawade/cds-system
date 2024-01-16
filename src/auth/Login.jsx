// Signin.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ErrorAlert from '../component/ErrorAlert';
import { initializeUser, loginUser } from '../Store/userReducer';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const loading = false;  // You can use this if needed
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(initializeUser());
  }, [dispatch]);

  const user = useSelector(state => state.user);

  useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (user || localUser) {
      navigate('/home');
    }
  }, [user, navigate]);

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    let userCredentials = {
      username: email,
      password,
    };

    try {
      await dispatch(loginUser(userCredentials));
      navigate('/home');
    } catch (error) {
      setLoginError('Invalid username or password'); // Set your specific error message
    }
  };

  return (
    <main className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center g-0 min-vh-100">
        <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
          {/* ... (your existing code) */}
          <div className="card smooth-shadow-md">
            {/* Card body */}
            <div className="card-body p-6">
              <div className="mb-4">
                <h3 className='login-title'>ClassicCarSwitch</h3>
                <p className="mb-6">Please enter your user information.</p>
              </div>
              {/* Form */}
              <form method="post" onSubmit={handleLoginEvent}>
                {/* Display ErrorAlert above the email field */}
                {loginError && <ErrorAlert message={loginError} />}
                {/* Username */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Username or email</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    name="email"
                    placeholder="Email address here"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="**************"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  {/* Button */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      {loading ? 'Loading...' : 'Login'}
                    </button>
                  </div>
                  <div className="d-md-flex justify-content-between mt-4">
                    <div className="mb-2 mb-md-0">
                      <Link to='/signup' className="fs-5">Create An Account</Link>
                    </div>
                    <div>
                      <Link to='/forgot-password' className="text-inherit fs-5">Forgot your password?</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
