import React, { useEffect, useState } from "react";
import "./Counter.css";

import { FaSmile } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiPartyFlags } from "react-icons/gi";

const counterData = [
  {
    icon: <FaSmile />,
    number: 10000,
    text: "Happy Clients",
  },
  {
    icon: <GiPartyFlags />,
    number: 3000,
    text: "Party Themes",
  },
  {
    icon: <FaThumbsUp />,
    number: 2000,
    text: "Games & Activities",
  },
  {
    icon: <FaRegCalendarAlt />,
    number: 20,
    text: "Years Experience",
  },
];

const CounterCard = ({ icon, number, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = number / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="counter-card">
      <div className="counter-icon">{icon}</div>

      <h2>{count}+</h2>

      <p>{text}</p>
    </div>
  );
};

const Counter = () => {
  return (
    <section className="counter-section">
      <div
        className="counter-wrapper"
      >
        <div className="counter-overlay"></div>

        <div className="counter-container">
          {counterData.map((item, index) => (
            <CounterCard
              key={index}
              icon={item.icon}
              number={item.number}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;