export const serviceCategories = [
  { id: "all", label: "All Services", icon: "✨" },
  { id: "themes", label: "Birthday Themes", icon: "🎉" },
  { id: "games", label: "Games & Rentals", icon: "🎮" },
  { id: "activities", label: "Event Activities", icon: "🎯" },
  { id: "decor", label: "Balloon & Decor", icon: "🎈" },
  { id: "artists", label: "Artists & Performers", icon: "🪄" },
  { id: "food", label: "Food & Stalls", icon: "🍿" },
];

export const servicesData = [
  // THEMES
  {
    id: "srv-1",
    title: "Cocomelon Theme Decoration",
    slug: "cocomelon-theme-decoration",
    category: "themes",
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
    price: "7,999",
    rating: 4.9,
    reviews: 184,
    description: "Vibrant Cocomelon themed backdrop with customized balloon arches, character cutouts, LED lights, and welcome board for toddler birthday parties.",
    features: [
      "8x6 ft Printed Backdrop with Arch",
      "200+ Premium Latex Balloons",
      "3D Cocomelon Character Cutouts",
      "LED Happy Birthday Neon Sign"
    ]
  },
  {
    id: "srv-2",
    title: "Jungle Safari Birthday Theme",
    slug: "jungle-safari-theme-decoration",
    category: "themes",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
    price: "8,499",
    rating: 4.8,
    reviews: 142,
    description: "Wild jungle theme decoration with artificial leaves, animal standees, green-gold balloon garlands, and safari entry arch.",
    features: [
      "Wild Animal Props (Lion, Giraffe, Elephant)",
      "Organic Leaf Balloon Garland",
      "Customized Name Board",
      "Cake Table Setup & Lighting"
    ]
  },
  {
    id: "srv-3",
    title: "Princess & Castle Theme Party",
    slug: "princess-castle-theme-party",
    category: "themes",
    badge: "Girls Favorite",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
    price: "9,999",
    rating: 5.0,
    reviews: 210,
    description: "Magical fairy tale princess setup complete with pink 3D castle backdrop, crown props, balloon pillars, and royal entryway.",
    features: [
      "Royal Palace Castle Backdrop",
      "Pink & Gold Chrome Balloon Garland",
      "Tiara & Crown Photo Props",
      "Personalized Birthday Girl Banner"
    ]
  },
  {
    id: "srv-4",
    title: "Superhero Avengers Setup",
    slug: "superhero-avengers-theme",
    category: "themes",
    badge: "Boys Favorite",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop",
    price: "8,999",
    rating: 4.9,
    reviews: 165,
    description: "Action-packed Avengers and Superhero theme party decor with life-size hero cutouts, city skyline backdrop, and balloon columns.",
    features: [
      "3D Superhero Cutouts (Spider-Man, Hulk, Cap)",
      "Cityscape Theme Backdrop",
      "Red, Blue & Gold Balloon Arch",
      "Action Props & Photo Booth"
    ]
  },

  // GAMES
  {
    id: "srv-5",
    title: "Air Hockey Table Rental",
    slug: "air-hockey-on-rent-in-delhi",
    category: "games",
    badge: "Hot Rental",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    price: "4,500",
    rating: 4.9,
    reviews: 95,
    description: "Commercial standard LED Air Hockey Table rental for high-energy fast-paced fun at birthdays and corporate carnivals.",
    features: [
      "Full Commercial Size Table",
      "Includes 4 Pushers & 6 Pucks",
      "On-site Attendant Included",
      "Electronic Scoreboard"
    ]
  },
  {
    id: "srv-6",
    title: "Electronic Basketball Arcade Machine",
    slug: "electronic-basketball-Games",
    category: "games",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
    price: "5,500",
    rating: 4.8,
    reviews: 112,
    description: "Double hoop arcade basketball shooting machine with automatic digital timer and sound effects for competitive event entertainment.",
    features: [
      "Dual Basketball Hoops",
      "Includes 6 Mini Basketballs",
      "Digital Timer & Sound System",
      "Suitable for Kids & Adults"
    ]
  },
  {
    id: "srv-7",
    title: "Foosball Table Rental",
    slug: "foosball-table-on-rent-in-delhi",
    category: "games",
    badge: "Classy Fun",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    price: "3,500",
    rating: 4.7,
    reviews: 88,
    description: "Premium wooden foosball table rental for 2-4 players. Perfect entertainment for house parties and birthday gatherings.",
    features: [
      "Sturdy Tournament Grade Wooden Build",
      "Multiple Foosball Balls",
      "Compact Setup Area",
      "Ideal for All Age Groups"
    ]
  },
  {
    id: "srv-8",
    title: "Bull Ride Machine (Mechanical Bull)",
    slug: "bull-ride-on-rent",
    category: "games",
    badge: "Super Hit",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    price: "12,000",
    rating: 5.0,
    reviews: 130,
    description: "Thrilling mechanical rodeo bull ride with padded inflatable safety bed and variable speed control operator.",
    features: [
      "High Safety Padded Air Cushion Mattress",
      "Professional Trained Operator",
      "Multiple Speed Levels for Safety",
      "Great Attraction for Large Parties"
    ]
  },

  // ACTIVITIES
  {
    id: "srv-9",
    title: "Live Magic Show & Magician",
    slug: "magic-show-for-birthday-party",
    category: "activities",
    badge: "Kids Special",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    price: "3,500",
    rating: 4.9,
    reviews: 240,
    description: "Interactive 45-minute stage magic performance with rabbit trick, mind illusions, and birthday kid special trick.",
    features: [
      "45 Mins Live Interactive Magic Show",
      "Includes Sound System Setup",
      "Special Hero Illusion for Birthday Child",
      "Completely Safe & Child Friendly"
    ]
  },
  {
    id: "srv-10",
    title: "Tattoo & Face Painting Artist",
    slug: "tattoo-artist-for-birthday-party",
    category: "activities",
    badge: "All-Time Fav",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    price: "2,500",
    rating: 4.8,
    reviews: 198,
    description: "Professional temporary glitter tattoo artist and face painter using skin-safe organic skin colors.",
    features: [
      "Skin-Safe Non-Toxic Paints & Glitters",
      "100+ Design Stencils (Superheroes, Animals)",
      "3 Hours Unlimited Tattoos for Kids",
      "Quick & Mess-Free Application"
    ]
  },
  {
    id: "srv-11",
    title: "Puppet Show & Storytelling",
    slug: "puppet-show-on-rent",
    category: "activities",
    badge: "Traditional",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    price: "3,000",
    rating: 4.7,
    reviews: 86,
    description: "Classic Kathputli puppet show featuring lively musical folk tales and funny comedy skits enjoyed by all generations.",
    features: [
      "30-40 Minute Live Puppet Performance",
      "Custom Puppet Stage Setup",
      "Live Musical Accompaniment",
      "Morals & Humorous Storylines"
    ]
  },
  {
    id: "srv-12",
    title: "Pottery Wheel Artist & Workshop",
    slug: "pottery-wheel-artist-on-rent",
    category: "activities",
    badge: "Creative",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop",
    price: "3,500",
    rating: 4.9,
    reviews: 104,
    description: "Hands-on pottery making activity. Master artisan guides kids to mold clay pots, cups, and piggy banks to take home.",
    features: [
      "Electric Pottery Wheel Setup",
      "Organic Eco-Friendly Clay",
      "Master Artisan Trainer",
      "Kids Take Home Their Handcrafted Clay Items"
    ]
  },

  // DECOR
  {
    id: "srv-13",
    title: "Organic Balloon Arch & Backdrop",
    slug: "organic-balloon-arch-decor",
    category: "decor",
    badge: "Elegant",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
    price: "4,999",
    rating: 4.9,
    reviews: 175,
    description: "Aesthetic pastel organic balloon Garland arch with customized name board for chic milestone birthdays and anniversary setups.",
    features: [
      "300+ Premium Chrome & Pastel Balloons",
      "Ring Backdrop Stand Rental",
      "Personalized Neon or Wooden Name Plate",
      "Floor Balloon Scatter"
    ]
  },
  {
    id: "srv-14",
    title: "LED Light & Ceiling Balloon Setup",
    slug: "led-light-ceiling-balloon-setup",
    category: "decor",
    badge: "Night Special",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    price: "5,999",
    rating: 4.8,
    reviews: 92,
    description: "Atmospheric ceiling decor with helium metallic balloons, hanging ribbons, fairy LED strings, and illuminated entry path.",
    features: [
      "150 Ceiling Floating Balloons",
      "Fairy Light Backdrop Curtain",
      "Illuminated Birthday Number Cutout",
      "Pathway Light Pillars"
    ]
  },

  // ARTISTS
  {
    id: "srv-15",
    title: "Caricature Artist Live Drawing",
    slug: "caricature-artist-on-rent",
    category: "artists",
    badge: "Unique Gift",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    price: "3,500",
    rating: 4.9,
    reviews: 110,
    description: "Expert caricature artist draws hilarious cartoon portraits of guests live on custom branded paper sheets.",
    features: [
      "3 Hours Live Drawing Session",
      "Customized Sheets with Birthday Branding",
      "Quick 3-5 Minute Sketch per Guest",
      "Memorable Keepsake Giveaway for Guests"
    ]
  },
  {
    id: "srv-16",
    title: "Cartoon Costume Mascot (Mickey/Pikachu)",
    slug: "cartoon-character-mascot-on-rent",
    category: "artists",
    badge: "Kid Delight",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=800&auto=format&fit=crop",
    price: "2,500",
    rating: 4.8,
    reviews: 155,
    description: "Life-sized cartoon mascot character greeting kids, posing for photos, and dancing during cake cutting ceremony.",
    features: [
      "Choice of Character (Mickey, Chhota Bheem, Pikachu, Minion)",
      "Interactive Greeting & Cake Cutting Participation",
      "Photo Session with Guests",
      "2-3 Hours Duration"
    ]
  },

  // FOOD & STALLS
  {
    id: "srv-17",
    title: "Live Cotton Candy (Candy Floss) Stall",
    slug: "candy-floss-stall-on-rent",
    category: "food",
    badge: "Sweet Treat",
    image: "https://images.unsplash.com/photo-1582058091505-f87aede55a10?q=80&w=800&auto=format&fit=crop",
    price: "2,500",
    rating: 4.9,
    reviews: 160,
    description: "Unlimited fresh fluffy pink and blue cotton candy spun live for all party guests by professional attendant.",
    features: [
      "Unlimited Servings for 3 Hours",
      "Hygienic Sugar & Natural Colors",
      "Attendant Included",
      "Popular Choice for Kids & Adults"
    ]
  },
  {
    id: "srv-18",
    title: "Fresh Popcorn Machine Stall",
    slug: "popcorn-stall-on-rent",
    category: "food",
    badge: "Snack Time",
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=800&auto=format&fit=crop",
    price: "2,500",
    rating: 4.8,
    reviews: 145,
    description: "Hot crispy buttered popcorn machine stall serving freshly popped corn in customized birthday cones.",
    features: [
      "Hot Fresh Buttered Popcorn",
      "Unlimited Servings for 3 Hours",
      "Commercial Grade Cinema Popcorn Machine",
      "Includes Branded Serving Cones"
    ]
  },
  {
    id: "srv-19",
    title: "Chocolate Fountain Stall with Dip Fruits",
    slug: "chocolate-fountain-stall-on-rent",
    category: "food",
    badge: "Deluxe",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop",
    price: "4,000",
    rating: 4.9,
    reviews: 118,
    description: "3-tier flowing warm Belgian chocolate fountain served with marshmallows, fruit skewers, and wafer biscuits.",
    features: [
      "3-Tier Warm Chocolate Cascade",
      "Includes Marshmallows, Wafers, & Fruit Dippers",
      "Professional Service Attendant",
      "Delightful Dessert Table Feature"
    ]
  }
];
