import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <form>
        <h1>Login</h1>
        <label>
          <span>Email</span>
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" placeholder="Enter your password" />
        </label>
        <input type="submit" value="Sign In" />
        <p className="auth__suggestion">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
