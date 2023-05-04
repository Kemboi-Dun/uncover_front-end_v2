import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth_container">
      <div className="auth_wrapper">
        <div className="auth_title">
          <h2>Create an Account</h2>
          <p>
            By creating an account you agree to our{" "}
            <span className="term_redirect">
              <Link className="link" to="/">
                Terms and Conditions
              </Link>
            </span>
          </p>
        </div>
        <div className="auth_form">
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" required />
            <label htmlFor="email">Email</label>
            <input type="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" required />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" required />
            <div className="error_message">
              Please enter the correct credentials.
            </div>
            {/* <div className="terms_option">
  <input type="checkbox" />
  <span>

  Agree to Our Terms & Conditions
  </span>
</div> */}
            <button type="submit" class="btn">
              Register
            </button>
          </form>
          <div className="redirect">
            Already have an account?
            <span>
              <Link className="link" to="/login">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
