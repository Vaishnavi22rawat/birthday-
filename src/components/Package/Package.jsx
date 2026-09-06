import "./Package.css";
import packageImg from "../../assets/birthday-img.jpg"; // change image path

export default function Package() {
  return (
    <section className="package-section default-padding">
      {/* Decorative Stars */}
      <div className="stars stars-left">
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
      </div>

      <div className="stars stars-right">
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
      </div>

      {/* Clouds */}
      <div className="cloud cloud-top"></div>
      <div className="cloud cloud-left"></div>
      <div className="cloud cloud-right"></div>

      <div className="package-container">
        {/* Image */}
        <div className="package-image">
          <img src={packageImg} alt="Birthday Package" />
        </div>

        {/* Content */}
        <div className="package-content">
          <h2>
            Don't miss out on the opportunity to give your child a
            birthday they'll never forget.
          </h2>

          <p>
            Choose our special package today and make their special
            day one to remember!
          </p>

          <button className="package-btn">
            Our Packages
          </button>
        </div>
      </div>
    </section>
  );
}