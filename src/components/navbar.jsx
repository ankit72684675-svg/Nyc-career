import { useState } from "react";
import "./navbar.css";
import logo from "../assets/mylogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="Navigate Your Career Logo" />

        <div className="logo-text">
          <h3>Navigate Your Career</h3>
          <p>Talent & Career Solutions</p>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
  Home
</Link>
<Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>   
<Link to="/training" onClick={() => setMenuOpen(false)}>
  Training
</Link>
        <Link to="/Jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
       <Link to="/contact" onClick={() => setMenuOpen(false)}>
  Contact
</Link>
      </nav>

      {/* BUTTONS */}
      <div className="nav-buttons">
        <Link className="login-btn" to="/login" onClick={() => setMenuOpen(false)}>
          Login
        </Link>
        <Link className="signup-btn" to="/get-started" onClick={() => setMenuOpen(false)}>
          Get Started
        </Link>
      </div>

      {/* HAMBURGER */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  );
}

export default Navbar;