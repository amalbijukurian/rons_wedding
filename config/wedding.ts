// ==========================================
// WEDDING INVITATION CONFIGURATION
// Edit this file to customize your wedding invitation
// ==========================================

export const weddingConfig = {
  // ==========================================
  // COUPLE INFORMATION
  // ==========================================
  couple: {
    groomName: "Ronnie Abraham",
    brideName: "Anet Joy",
    tagline: "We're getting married",
    hashtag: "#RonnieAndAnet",
    // Short story about how you met
    story: "Our love story began in a small coffee shop, where a chance encounter turned into a lifetime of beautiful moments. From that first smile to this very day, every moment has been a blessing.",
  },

  // ==========================================
  // WEDDING DATE
  // ==========================================
  date: {
    day: 19,
    month: "April",
    monthNumber: 4, // 1-12
    year: 2026,
    displayFormat: "19 / 04 / 2026", // How the date appears on the invitation
  },

  // ==========================================
  // EVENTS
  // ==========================================
  events: [
    {
      id: "engagement",
      title: "Engagement Ceremony",
      date: "April 11, 2026",
      time: "4:00 PM - 7:00 PM",
      venue: "The Garden Pavilion",
      address: "123 Rose Garden Lane, Mumbai, India",
      description: "Join us as we exchange rings and celebrate our promise to each other.",
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      date: "April 19, 2026",
      time: "11:00 AM - 1:00 PM",
      venue: "St. Rita’s Church",
      address: "1, North Champannoor, Angamaly, Kerala 683573",
      description: "Witness our union as we say 'I do' in a beautiful ceremony.",
    },
    {
      id: "reception",
      title: "Reception & Dinner",
      date: "April 19, 2026",
      time: "7:00 PM - 11:00 PM",
      venue: "The Grand Ballroom",
      address: "789 Celebration Avenue, Mumbai, India",
      description: "Celebrate with us over dinner, music, and dancing.",
    },
  ],

  // ==========================================
  // COUPLE PROFILES
  // ==========================================
  profiles: {
    groom: {
      name: "Ronnie",
      fullName: "Ronnie Abraham",
      role: "The Groom",
      description: "A passionate soul who believes in love, laughter, and living life to the fullest. When not working as a software engineer, you'll find him exploring new places and capturing moments.",
      image: "/ronnie-child.jpeg?height=400&width=400", // Replace with actual image path
      parents: "Son of Mr. Abraham George & Mrs. Mini Abraham",
    },
    bride: {
      name: "Anet",
      fullName: "Anet Joy",
      role: "The Bride",
      description: "A creative spirit with a heart full of dreams. She finds joy in art, literature, and creating beautiful memories. Her smile lights up every room she enters.",
      image: "/placeholder.svg?height=400&width=400", // Replace with actual image path
      parents: "Daughter of Mr. Joy K.L & Mrs. Reena Joy",
    },
  },

  // ==========================================
  // INVITATION MESSAGE
  // ==========================================
  invitation: {
    title: "You're Invited",
    message: `Together with their families,
Ronnie James & Anet Rose
request the pleasure of your company
at the celebration of their marriage.`,
    footer: "Your presence would make our special day even more memorable.",
  },

  // ==========================================
  // LOCATION / VENUE
  // ==========================================
  location: {
    mainVenue: "Green Park Convention Centre",
    address: "NH 544, OppMGF Hyundai, Desom, Aluva, Kerala 683102",
    // Google Maps embed URL - Replace with your actual venue
    mapEmbedUrl: "https://maps.google.com/maps?width=600&height=400&hl=en&q=green%20park%2Caluva&t=p&z=14&ie=UTF8&iwloc=B&output=embed",
    // Google Maps link for directions
    directionsUrl: "https://maps.app.goo.gl/koLUSn3JGTGWTSW9A",
  },

  // ==========================================
  // GALLERY IMAGES
  // ==========================================
  gallery: {
    title: "Our Moments",
    subtitle: "A glimpse into our journey together",
    images: [
      {
        src: "/first-date.jpeg?height=600&width=400",
        alt: "Couple photo 1",
        caption: "Our first date",
      },
      {
        src: "/ronnie-single.jpeg?height=400&width=600",
        alt: "Couple photo 2",
        caption: "Beach sunset",
      },
      {
        src: "/anet-camera.png?height=500&width=500",
        alt: "Couple photo 3",
        caption: "Mountain adventure",
      },
      {
        src: "/anet-single.png?height=600&width=400",
        alt: "Couple photo 4",
        caption: "City lights",
      },
      {
        src: "/ronnie-guitar.png?height=400&width=600",
        alt: "Couple photo 5",
        caption: "Garden picnic",
      },
      {
        src: "/together.jpeg?height=500&width=500",
        alt: "Couple photo 6",
        caption: "The proposal",
      },
    ],
  },

  // ==========================================
  // RSVP SETTINGS
  // ==========================================
  rsvp: {
    enabled: true,
    deadline: "April 10, 2026",
    contactEmail: "rsvp@ronnieandanet.com",
    contactPhone: "+91 98765 43210",
  },

  // ==========================================
  // SOCIAL & SHARING
  // ==========================================
  social: {
    instagram: "https://instagram.com/ronnieandanet",
    facebook: "",
    twitter: "",
    website: "",
  },

  // ==========================================
  // MUSIC SETTINGS
  // ==========================================
  music: {
    enabled: true,
    autoplay: false,
    // Add your music file path here
    src: "", // e.g., "/music/wedding-song.mp3"
  },

  // ==========================================
  // META / SEO
  // ==========================================
  meta: {
    title: "Ronnie & Anet | Wedding Invitation",
    description: "Join us in celebrating the wedding of Ronnie & Anet on April 19, 2026",
    ogImage: "/og-image.jpg", // Open Graph image for social sharing
  },
}

export type WeddingConfig = typeof weddingConfig
