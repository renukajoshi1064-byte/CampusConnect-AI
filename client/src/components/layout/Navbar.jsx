import "./Navbar.css";
import {
  GraduationCap,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Logo */}

      <div className="navbar-logo">

        <div className="logo-icon">
          <GraduationCap size={29} />
        </div>

        <div className="logo-text">

          <h2>
            CampusConnect <span>AI</span>
          </h2>

          <p>
            Placement & Recruitment Portal
          </p>

        </div>

      </div>

      {/* Navigation links */}

      <nav
        className={`nav-links ${
          menuOpen ? "nav-open" : ""
        }`}
      >

        <a
          href="#home"
          className="active-link"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#features"
          onClick={() => setMenuOpen(false)}
        >
          Features
        </a>

        <a
          href="#how-it-works"
          onClick={() => setMenuOpen(false)}
        >
          How it Works
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

      </nav>

      {/* Sign-in button */}

      <button className="navbar-signin">

        <LogIn size={19} />

        Sign In

      </button>

      {/* Mobile menu button */}

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >

        {menuOpen ? (
          <X size={25} />
        ) : (
          <Menu size={25} />
        )}

      </button>

    </header>
  );
};

export default Navbar;