import "./navbar.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import {
  MdEmail,
  MdPhone,
} from "react-icons/md";

export default function TopBar() {
  return (
    <div className="topbar">

      {/* Left Side */}
      <div className="top-contact">

        <span>
          <MdEmail />
          niranjankumar.205@gmail.com 
        </span>

        <div className="shine"></div>
        <span>
          <MdPhone />
          +91 9811256658 
        </span>

      </div>

      {/* Right Side */}
       <div className="social-icons">

        <a href="#">
          <FaFacebookF />
        </a>

        <a href="#">
          <FaInstagram />
        </a>

        <a href="#">
          <FaYoutube />
        </a>

      </div>

    </div>
  );
}