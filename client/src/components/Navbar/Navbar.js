import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { auth, provider } from "../../firebase";
import "./Navbar.css";

const Navbar = () => {
  const { currentUser, dispatch } = useContext(AuthContext);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;

      localStorage.setItem("ws-share-user", JSON.stringify(user));

      dispatch({ type: "LOGIN", payload: user });
    });
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <h2>WS SHARE</h2>
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-auth">
        {currentUser ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <button className="navbar-auth__signup" onClick={signInWithGoogle}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
