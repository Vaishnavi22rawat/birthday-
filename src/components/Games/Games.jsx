import React from "react";
import "./Games.css";
import Cards from "../../components/Cards/Cards";

import airHockey from "../../assets/games/air-hockey.webp";
import ballBucket from "../../assets/games/ball-in-bucket.webp";
import jenga from "../../assets/games/jenga-game.webp";
import vrgame from "../../assets/games/virtual-xbox.webp";
import claw from "../../assets/games/claw-machine.webp";
import tableTennis from "../../assets/games/table-tennis.webp";
import snake from "../../assets/games/snake-ladder.webp";
import balloon from "../../assets/games/balloon-shooting.webp";

const games = [
  {
    title: "Air Hockey",
    slug: "air-hockey-game-rental",
    image: airHockey,
    price: "1",
    badge: "Popular",
    rating: 4.9,
    reviews: 145,
  },
  {
    title: "Ball In Bucket",
    slug: "ball-in-bucket-game-rental",
    image: ballBucket,
    price: "1",
    badge: "",
    rating: 4.7,
    reviews: 88,
  },
  {
    title: "Jenga Game",
    slug: "jenga-game-rental",
    image: jenga,
    price: "1",
    badge: "",
    rating: 4.8,
    reviews: 110,
  },
  {
    title: "Virtual Game",
    slug: "virtual-game-rental",
    image: vrgame,
    price: "1",
    badge: "Trending",
    rating: 5.0,
    reviews: 96,
  },
  {
    title: "Claw Machine",
    slug: "claw-machine-rental",
    image: claw,
    price: "1",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 172,
  },
  {
    title: "Table Tennis",
    slug: "table-tennis-rental",
    image: tableTennis,
    price: "1",
    badge: "",
    rating: 4.6,
    reviews: 64,
  },
  {
    title: "Snake Ladder",
    slug: "snake-ladder-game-rental",
    image: snake,
    price: "1",
    badge: "",
    rating: 4.5,
    reviews: 53,
  },
  {
    title: "Balloon Shot",
    slug: "balloon-shooting-game-rental",
    image: balloon,
    price: "1",
    badge: "Popular",
    rating: 4.8,
    reviews: 130,
  },
];

const Games = () => {
  return (
    <section className="games-section default-padding">
      <div className="container">
        <div className="section-header">
          <span className="tag">Fun Activities</span>
          <h2>Games & Activities</h2>
        </div>

        <div className="games-grid">
          {games.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>

        <div className="view-btn-wrap">
          <button className="view-btn">View All Games</button>
        </div>
      </div>
    </section>
  );
};

export default Games;