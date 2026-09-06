import { useState } from "react";
import "./Contact.css";

import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import bannerImg from "../../assets/banner/games-&-activity-banner.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Birthday Planner! My name is ${formData.name}. Phone: ${formData.phone || "N/A"}. Email: ${formData.email || "N/A"}. Message: ${formData.message}`
    );
    window.open(`https://wa.me/919811256658?text=${text}`, "_blank");
  };

  return (
    <>
      <Navbar />

      <Banner
        title="Contact Us"
        banner={bannerImg}
        breadcrumbs={[{ label: "Contact Us", path: "/contact" }]}
      />

      <section className="contact-section">
        <div className="container default-padding">
          <div className="contact-grid">
            {/* LEFT SIDE */}
            <div className="contact-left">
              {/* Address */}
              <div className="contact-card full-width">
                <div className="card-icon">
                  <FaMapMarkerAlt />
                </div>

                <div className="card-content">
                  <h3>Address</h3>
                  <p>
                    52, MCD School Road, Opp. Karmic Connection Group,
                    Chandan Hulla, Chhatarpur, Delhi - 110074
                  </p>
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="contact-row">
                {/* Phone Card */}
                <div className="contact-card">
                  <div className="card-icon">
                    <FaPhoneAlt />
                  </div>

                  <div className="card-content">
                    <h3>Phone</h3>

                    <a href="tel:+919811256658">+91 98112 56658</a>
                    <br />
                    <a href="tel:+918235597671">+91 82355 97671</a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-card">
                  <div className="card-icon">
                    <FaEnvelope />
                  </div>

                  <div className="card-content">
                    <h3>Email</h3>

                    <a href="mailto:info@birthdayplanner.co">
                      info@birthdayplanner.co
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="map-box">
                <iframe
                  title="Birthday Planner Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.32914413011!2d77.18192297528275!3d28.469632675754088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1feb430a990f%3A0x48066a6b6d608ce2!2sBirthday%20Planner!5e0!3m2!1sen!2sin!4v1783320757385!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="contact-form-box">
              <h2>Book Event / Send Message</h2>

              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />

                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />

                <textarea
                  rows="7"
                  placeholder="Your Message (Event date, theme, games needed)..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>

                <button type="submit" style={{ background: "#25d366" }}>
                  <FaWhatsapp />
                  <span>Send Booking Inquiry on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Button />
    </>
  );
}