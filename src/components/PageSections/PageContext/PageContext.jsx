import { FaPhoneAlt } from "react-icons/fa";

export default function PageContext({ item }) {
  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hi Birthday Planner! I want to book: ${item.title}. Please share available dates and pricing.`
    );
    window.open(`https://wa.me/919811256658?text=${text}`, "_blank");
  };

  return (
    <div className="container default-padding">
      {item.sections?.map((section, index) => {
        switch (section.layout) {
          case "image-text":
            return (
              <div className="detail-row" key={index}>
                <div className="detail-image">
                  <img src={section.image} alt={section.title} />
                </div>

                <div className="detail-text">
                  <h2>{section.title}</h2>

                  {Array.isArray(section.description)
                    ? section.description.map((paragraph, i) => (
                        <p
                          key={i}
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      ))
                    : (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: section.description,
                        }}
                      />
                    )}
                </div>
              </div>
            );

          case "full-text":
            return (
              <div className="detail-full-text" key={index}>
                <h2>{section.title}</h2>

                {Array.isArray(section.description)
                  ? section.description.map((paragraph, i) => (
                      <p
                        key={i}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))
                  : (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: section.description,
                      }}
                    />
                  )}
              </div>
            );

          case "text-image":
          default:
            return (
              <div className="detail-row" key={index}>
                <div className="detail-text">
                  <h2>{section.title}</h2>

                  {Array.isArray(section.description)
                    ? section.description.map((paragraph, i) => (
                        <p
                          key={i}
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      ))
                    : (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: section.description,
                        }}
                      />
                    )}
                </div>

                <div className="detail-image">
                  <img src={section.image} alt={section.title} />
                </div>
              </div>
            );
        }
      })}

      {/* BOOK NOW CTA BOX */}
      <div
        style={{
          marginTop: "40px",
          padding: "30px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
          color: "#ffffff",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 6px 0", fontSize: "1.3rem", fontWeight: "800", color: "#ffffff" }}>
            Ready to book {item.title}?
          </h3>
          <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.92rem" }}>
            Instant availability check & best discount rates across Delhi, Gurgaon, Noida & NCR.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={handleWhatsAppBooking}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#e91e63",
              color: "#ffffff",
              border: "none",
              padding: "12px 28px",
              borderRadius: "30px",
              fontWeight: "700",
              fontSize: "0.95rem",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(233, 30, 99, 0.35)",
            }}
          >
            Book Now
          </button>

          <a
            href="tel:+919811256658"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#ffffff",
              color: "#0f172a",
              textDecoration: "none",
              padding: "12px 24px",
              borderRadius: "30px",
              fontWeight: "700",
              fontSize: "0.95rem",
            }}
          >
            <FaPhoneAlt size={16} /> Call Organizer
          </a>
        </div>
      </div>
    </div>
  );
}