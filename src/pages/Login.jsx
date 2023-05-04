import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth_container">
      <div className="auth_wrapper">
        <div className="auth_title">
          <h2>Welcome Back</h2>
        </div>
        <div className="auth_form">
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" required />

            <label htmlFor="password">Password</label>
            <input type="password" required />

            <div className="error_message">
              Please enter the correct credentials.
            </div>

            <button type="submit" class="btn">
              Login
            </button>
          </form>
          <div className="redirect">
            Don't have an account?
            <span>
              <Link className="link" to="/register">
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
