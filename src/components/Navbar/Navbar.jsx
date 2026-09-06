import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../../assets/logo.jpg";
import Topbar from "../Navbar/Topbar";

export default function Navbar() {
  const placeholders = [
    "Search cocomelon theme...",
    "Search jungle theme...",
    "Search air hockey...",
    "Search bouncy...",
    "Search pool party...",
    "Search caricature artist...",
    "Search tattoo artist...",
    "Search carnival games...",
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let currentText = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeout;

    const typeEffect = () => {
      const fullText = placeholders[currentText];

      if (!isDeleting) {
        setPlaceholder(fullText.substring(0, currentChar + 1));

        currentChar++;

        if (currentChar === fullText.length) {
          isDeleting = true;
          timeout = setTimeout(typeEffect, 1200);
          return;
        }
      } else {
        setPlaceholder(fullText.substring(0, currentChar - 1));

        currentChar--;

        if (currentChar === 0) {
          isDeleting = false;
          currentText = (currentText + 1) % placeholders.length;
        }
      }

      timeout = setTimeout(typeEffect, isDeleting ? 40 : 90);
    };

    typeEffect();

    return () => clearTimeout(timeout);
  }, []);

  return (
 <>
  <Topbar />

  <nav className="mainnav">
    <div className="container">
      <div className="navbar">

        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Birthday Planner Logo"
            />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-side">
              {/* SEARCH */}
          <div className="search-box">
            <input
              type="text"
              placeholder={placeholder}
            />
          </div>

          {/* HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* MENU */}
          <ul className={`menu ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/games-activity-for-event/"
                onClick={() => setMenuOpen(false)}
              >
                Games & Activity
              </Link>
            </li>

            <li>
              <Link
                to="/themes"
                onClick={() => setMenuOpen(false)}
              >
                Themes
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>

        </div>

      </div>

    </div>
  </nav>
</>
  );
}