import { useState } from "react";
import "./Navbar.css";
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
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
<Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>   
     <a href="#" onClick={() => setMenuOpen(false)}>Training</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Jobs</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      {/* BUTTONS */}
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Get Started</button>
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