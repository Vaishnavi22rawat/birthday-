import "./service.css";

const servicesData = [
  {
    type: "image",
    title: "Services For Event",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
  },

  {
    type: "text",
    title: "Important Information",
    description:
      "Those who gives good presentation , its not necessary that he will give you good production , lots of time these thing happens that those who give finest production is not able make good presentation .",
    author: "--Birthday Planner",
    className: "pink-card",
  },

  {
    type: "image",
    title: "Bhakti Sagar",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },

  {
    type: "text",
    title: "Balloon Decor Idea",
    links: [
      "Indoor balloon decor",
      "Outdoor balloon decor",
      "Balloon Decorator",
      "Gas Balloon Decorator",
    ],
    className: "orange-card",
  },

  {
    type: "image",
    title: "Gallery",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    type: "text",
    title: "Games & Activity For Event",
    links: [
      "Tattoo Artist",
      "Magic Show",
      "Puppet Show",
      "Game Coordinator",
    ],
    className: "green-card",
  },
];

const Service = () => {
  return (
    <section className="service-section default-padding">

      <div className="container">

        <div className="section-header">

          <span className="tag">
            Birthday Planner
          </span>

          <h2>
            Your One-Stop Destination
            For Birthday Celebrations
          </h2>

          <p>
            Themes • Decorations • Games • Entertainment • Photography • Venues
          </p>

        </div>

        <div className="service-grid">

          {servicesData.map((item, index) => (

            item.type === "image" ? (

              <div className="service-image-card" key={index}>

                <img src={item.image} alt={item.title} />

                <div className="image-overlay"></div>

                <h3>{item.title}</h3>

              </div>

            ) : (

              <div className={`service-text-card ${item.className}`} key={index}>

                <h3>{item.title}</h3>

                {item.description && (
                  <p>{item.description}</p>
                )}

                {item.author && (
                  <span>{item.author}</span>
                )}

                {item.links && (
                  <ul>
                    {item.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </ul>
                )}

              </div>

            )

          ))}

        </div>

      </div>

    </section>
  );
};

export default Service;