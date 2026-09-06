import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FaqVideo({ item }) {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-video-section">
      <div className="container">
        <div className="faq-video-wrap">

          {item.faqs?.length > 0 && (
            <div className="faq-box">
              <h2>Frequently Asked Questions</h2>

              {item.faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <button
                    className="faq-question"
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                  >
                    <span>{faq.question}</span>
                    {active === index ? <FaMinus /> : <FaPlus />}
                  </button>

                  {active === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {item.video && (
            <div className="video-box">
              <iframe
                width="100%"
                height="400"
                src={item.video}
                title={item.title}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}