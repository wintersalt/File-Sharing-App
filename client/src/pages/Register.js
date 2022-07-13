import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
        <label>
          <span>Confirm Password</span>
          <input type="password" placeholder="Enter your password again" />
        </label>
        <input type="submit" value="Sign Up" />
        <p className="auth__suggestion">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
