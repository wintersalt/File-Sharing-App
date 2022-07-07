import {
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const notify = () => {
    toast("Logged in!");
  };

  const signIn = async () => {
    await setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithPopup(auth, provider);
    });

    console.log(auth);
    notify();
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
            <Link to="/">Find</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Terms</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-auth">
        <button className="navbar-auth__signup" onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
