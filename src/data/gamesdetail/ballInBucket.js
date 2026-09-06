import ballBanner from "../../assets/games/ball-in-bucket/ball-in-bucket-game-banner.png";

import ballImg1 from "../../assets/games/ball-in-bucket/ball-in-bucket-game.webp";
import ballImg2 from "../../assets/games/ball-in-bucket/hire-ball-in-bucket-game.jpg";

import gallery1 from "../../assets/games/ball-in-bucket/ball-in-bucket-game-delhi.jpg";
import gallery2 from "../../assets/games/ball-in-bucket/ball-in-bucket-game-on-rental.jpg";
import gallery3 from "../../assets/games/ball-in-bucket/ball-in-bucket-game-for-hire.jpg";
import gallery4 from "../../assets/games/ball-in-bucket/ball-in-bucket.webp";

const ballInBucket = {
  id: 2,

  title: "Ball In Bucket Game On Rent In Delhi",

  slug: "ball-in-bucket-game-on-rent",

  banner: ballBanner,

  image: ballImg1,

  sections: [
    {
      title: "Ball In Bucket Game On Rent In Delhi",

      image: ballImg1,

      description: `
We provide Ball In Bucket Game on rent in Delhi, Gurgaon, Noida and across NCR for birthday parties, school events, corporate functions and carnival activities at affordable prices.

Ball In Bucket is a simple yet highly engaging game that tests a player's accuracy and throwing skills. Players need to toss balls into buckets placed at a distance and score points by successfully landing the balls inside.

The game is easy to understand, quick to play and keeps participants entertained throughout the event.
      `,
    },

    {
      title: "Why Ball In Bucket Game Is Perfect For Events",

      image: ballImg2,

      description: `
Ball In Bucket is suitable for kids, teenagers and adults, making it a great attraction for all types of events.

The game can be played individually or in teams, creating friendly competition and excitement among guests. Players aim to throw balls into buckets from a designated distance and advance through rounds based on their scores.

It requires minimal space, can be set up indoors or outdoors and is one of the most popular carnival-style games for birthday parties, family days, exhibitions and corporate events.
      `,
    },
  ],

  gallery: [
    {
      image: gallery1,
      size: "big",
    },
    {
      image: gallery2,
      size: "tall",
    },
    {
      image: gallery3,
      size: "normal",
    },
    {
      image: gallery4,
      size: "wide",
    },
  ],

  video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

  faqs: [
    {
      question: "How is the Ball In Bucket game played?",
      answer:
        "Players aim to toss balls into buckets placed at a distance. The objective is to score by landing the balls inside the buckets.",
    },
    {
      question: "Is Ball In Bucket suitable for kids?",
      answer:
        "Yes, the game is completely safe and suitable for kids, teenagers and adults.",
    },
    {
      question: "How much space is required for setup?",
      answer:
        "A small area of around 4×4 ft is usually sufficient for setting up the game.",
    },
    {
      question: "Can the game be played indoors and outdoors?",
      answer:
        "Yes, Ball In Bucket can be installed both indoors and outdoors depending on the venue.",
    },
  ],

      relatedGames: [
    "air-hockey-on-rent-in-delhi",
    "ball-in-bucket-game-on-rent",
    "jenga-game-on-rent-delhi",
    "virtual-game-on-rent-in-delhi",
  ],
};

export default ballInBucket;