import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
};

export default Navbar;
