import React from 'react';
// import '../assets/css/theme.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <main className="container d-flex flex-column">
      <div className="row align-items-center justify-content-center g-0 min-vh-100">
        <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
          <a href="#" className="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle d-none">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </a>
          {/* Card */}
          <div className="card smooth-shadow-md">
            {/* Card body */}
            <div className="card-body p-6">
              <div className="mb-4">
                {/* <a href="../index.html"><img src="../assets/images/brand/logo/logo-2.svg" className="mb-2 text-inverse" alt="Image" /></a> */}
                <h3 className='login-title'>ClassicCarSwitch</h3>
                <p className="mb-6">Please enter your user information.</p>
              </div>
              {/* Form */}
              <form>
                {/* Username */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">User Name</label>
                  <input type="text" id="username" className="form-control" name="username" placeholder="User Name" required />
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-control" name="email" placeholder="Email address here" required />
                </div>
                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" id="password" className="form-control" name="password" placeholder="**************" required />
                </div>
                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                  <input type="password" id="confirm-password" className="form-control" name="password" placeholder="**************" required />
                </div>
                {/* Checkbox */}
                <div className="mb-3">
                  <div className="form-check custom-checkbox">
                    <input type="checkbox" className="form-check-input" id="agreeCheck" />
                    <label className="form-check-label" htmlFor="agreeCheck">
                      <span className="fs-5">
                        I agree to the <a href="terms-condition-page.html">Terms of Service</a> and
                        <a href="terms-condition-page.html">Privacy Policy.</a>
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  {/* Button */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Create Free Account
                    </button>
                  </div>
                  <div className="d-md-flex justify-content-between mt-4">
                    <div className="mb-2 mb-md-0">
                      <Link to='/signin' className="fs-5">Already member? Login</Link>
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
}

export default Signup;
