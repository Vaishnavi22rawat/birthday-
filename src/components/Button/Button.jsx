import React, { useEffect, useState } from "react";
import "./Button.css";

import {
  FaWhatsapp,
  FaArrowUp,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";

const Button = () => {
  const [showTop, setShowTop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".contact-wrapper")) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-buttons">

      {/* Contact Button */}
      <div className="contact-wrapper">

        <button
          className={`contact-btn ${showMenu ? "active" : ""}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaTimes /> : <FaPhoneAlt />}
        </button>

        <div className={`contact-menu ${showMenu ? "show" : ""}`}>

          <a
            href="tel:+919811256658"
            className="call-btn"
            aria-label="Call"
          >
            <FaPhoneAlt />
          </a>

          <a
            href="https://wa.me/919811256658"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

      {/* Scroll To Top */}

      {showTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}

    </div>
  );
};

export default Button;