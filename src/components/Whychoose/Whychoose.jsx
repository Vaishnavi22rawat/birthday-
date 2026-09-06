import "./Whychoose.css";
import {
  FaRocket,
  FaUsers,
  FaCalendarCheck,
  FaLightbulb,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "Extensive Range of Celebration Services",
    text:
      "BirthdayPlanner.co offers a wide range of services, including Kids Artist Management, Birthday Parties, New Born Baby Celebrations, Anniversary Parties, Family Day Events, Inauguration Parties, Mundan Ceremonies, Kua Pujan Parties, Balloon Decorations, Boys Themes, Girls Themes, Flower Decorations, Theme Parties, and much more. We cater to diverse client requirements, making us a one-stop solution for all celebration needs across Delhi NCR.",
  },

  {
    icon: <FaUsers />,
    title: "Experienced Team of Event Experts",
    text:
      "With years of industry experience, BirthdayPlanner.co has a professional team skilled in organizing everything from intimate birthday celebrations to large-scale corporate and social events. Our team focuses on creativity, communication, execution strategy, and premium decoration concepts to deliver unforgettable experiences for every client.",
  },

  {
    icon: <FaCalendarCheck />,
    title: "Simple & Hassle-Free Online Booking",
    text:
      "BirthdayPlanner.co provides an easy and convenient online booking experience for all event services. Customers can explore themes, decoration ideas, entertainment services, and customized packages through the website. This streamlined process saves time, simplifies event planning, and ensures a smooth customer experience from inquiry to execution.",
  },

  {
    icon: <FaLightbulb />,
    title: "Unique Theme & Decoration Ideas",
    text:
      "We specialize in innovative theme parties and customized decoration concepts tailored to different age groups and occasions. From cartoon themes, princess themes, superhero parties, jungle setups, and LED decorations to luxury balloon decor and creative entertainment ideas, our team ensures every celebration feels unique and visually impressive.",
  },
];

const Whychoose = () => {
  return (
    <section className="why-section default-padding">
      <div className="container">
        <div className="section-header">
          <span className="tag">Why Choose Us</span>

          <h2>What Makes Us Unique</h2>

          <p>
            We combine creativity, professional planning, and premium event
            experiences to make every celebration unforgettable.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychoose;