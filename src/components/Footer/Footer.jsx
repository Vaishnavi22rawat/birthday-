import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Multilines from "../Multilines/Multilines";

import logo from "../../assets/logo.jpg";

import insta1 from "../../assets/footer/insta1.jpg";
import insta2 from "../../assets/footer/insta2.jpg";
import insta3 from "../../assets/footer/insta3.jpg";
import insta4 from "../../assets/footer/insta4.jpg";
import insta5 from "../../assets/footer/insta5.jpg";
import insta6 from "../../assets/footer/insta6.jpg";

import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="footer">
          <Multilines />

        {/* Top Shape */}
        <div className="footer-top-shape"></div>
        

        <div className="footer-container">

          {/* Column 1 */}
          <div className="footer-col">

            <img src={logo} alt="Logo" className="footer-logo" />

            <p>
              BirthdayPlanner provides broad range of Theme Party and
              Games that's unique in itself.
            </p>

            <div className="footer-socials">

              <a href="/">
                <FaInstagram />
              </a>

              <a href="/">
                <FaFacebookF />
              </a>

              <a href="/">
                <FaPinterestP />
              </a>

              <a href="/">
                <FaXTwitter />
              </a>

              <a href="/">
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Column 2 */}
          <div className="footer-col">

            <h3>Quick Links</h3>

            <ul className="footer-links">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/games-activity-for-event/">Games & Activities</Link></li>
              <li><Link to="/themes">Themes</Link></li>
              <li><Link to="/blog">Blog & Tips</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>

            </ul>

          </div>

          {/* Column 3 */}
          <div className="footer-col">

            <h3>Contact Us</h3>

            <div className="footer-contact">

              <p>
                <FaMapMarkerAlt />
                Address: 52, MCD school road, oppo. karmic connection
                group, Chandan Hulla, Chhatarpur, New Delhi-74
              </p>

              <p>
                <FaPhoneAlt />
                +91 9811256658
              </p>

              <p>
                <MdEmail />
                niranjankumar.205@gmail.com
              </p>

            </div>

          </div>

          {/* Column 4 */}
          <div className="footer-col">

            <h3>Instagram Feed</h3>

            <div className="insta-feed">

              <div className="insta-item">
                <img src={insta1} alt="Instagram" />
              </div>

              <div className="insta-item">
                <img src={insta2} alt="Instagram" />
              </div>

              <div className="insta-item">
                <img src={insta3} alt="Instagram" />
              </div>

              <div className="insta-item">
                <img src={insta4} alt="Instagram" />
              </div>

              <div className="insta-item">
                <img src={insta5} alt="Instagram" />
              </div>

              <div className="insta-item">
                <img src={insta6} alt="Instagram" />
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p>
            ©copyright 2026 birthday planner.
          </p>

          <div className="footer-policy">
            <a href="/">Term & Condition</a>
            <a href="/">Privacy Policy</a>
          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;