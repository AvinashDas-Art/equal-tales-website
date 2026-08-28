/**
 * Equal Tales Entertainment — Filmography Catalog
 * Structured data for the cinematic showcase homepage (index.html).
 *
 * category: "Feature Films" | "Series & Originals" | "Documentaries & Shorts" | "Private Screeners"
 * type: "youtube" | "showcase"
 * genre: short display tag shown on poster hover overlays.
 *
 * YouTube thumbnails are requested at maxresdefault resolution; the render
 * script (see index.html) falls back to hqdefault.jpg on load error, since
 * not every upload has a maxres asset.
 *
 * Flagship-only hero fields (see index.html "Hero" section):
 *   posterUrl        — local vertical poster, preferred over thumbnailUrl on cards.
 *   heroBackdropUrl   — local horizontal image, used as the hero's CSS background
 *                        and as the <video poster> shown until the mp4 loop loads
 *                        (see assets/videos/hero-loop.mp4 in index.html).
 */
window.FILMS_DATA = [
  {
    id: "anaarkali-of-aarah",
    title: "Anaarkali of Aarah",
    subtitle: "Full Film",
    category: "Feature Films",
    genre: "Drama",
    type: "youtube",
    videoId: "_jebuKnAfus",
    thumbnailUrl: "https://img.youtube.com/vi/_jebuKnAfus/maxresdefault.jpg",
    posterUrl: "assets/images/poster-anaarkali.jpg",
    heroBackdropUrl: "assets/images/hero-anaarkali.jpg",
    year: 2017,
    flagship: true,
    logline: "When a powerful university vice-chancellor humiliates her on stage, a folk singer refuses to back down.",
    synopsis: "Avinash Das's acclaimed directorial debut, starring Swara Bhaskar, Pankaj Tripathi and Sanjay Mishra. A widely celebrated, deeply rooted story of a small-town Bhojpuri singer's fight for dignity against patriarchal power — hailed as one of the boldest feminist statements in Indian cinema."
  },
  {
    id: "she-trailer",
    title: "She",
    subtitle: "Official Trailer",
    category: "Series & Originals",
    genre: "Crime Drama",
    type: "youtube",
    videoId: "WPlXILGpOFk",
    thumbnailUrl: "https://img.youtube.com/vi/WPlXILGpOFk/maxresdefault.jpg",
    year: 2020,
    logline: "An undercover assignment sends a shy constable into Mumbai's underworld — and unlocks a side of her she never knew.",
    synopsis: "Official trailer for the Netflix Original series She, starring Aaditi Pohankar and Vijay Varma — a gripping exploration of identity, desire and empowerment set against Mumbai's underbelly."
  },
  {
    id: "she-scene",
    title: "She",
    subtitle: "Aaditi Pohankar and the Waiter",
    category: "Series & Originals",
    genre: "Crime Drama",
    type: "youtube",
    videoId: "KEHGy1HObnA",
    thumbnailUrl: "https://img.youtube.com/vi/KEHGy1HObnA/maxresdefault.jpg",
    year: 2020,
    logline: "A pivotal scene from Netflix's She.",
    synopsis: "A pivotal scene from Netflix's She, featuring Aaditi Pohankar in one of the series' most talked-about moments."
  },
  {
    id: "she-theme",
    title: "She — Aadhi Raatein",
    subtitle: "Original Theme",
    category: "Documentaries & Shorts",
    genre: "Original Score",
    type: "youtube",
    videoId: "UC69CUXRkqg",
    thumbnailUrl: "https://img.youtube.com/vi/UC69CUXRkqg/maxresdefault.jpg",
    year: 2020,
    logline: "The haunting theme from Netflix's She.",
    synopsis: "The haunting theme \"Aadhi Raatein\" from Netflix's She, created with Imtiaz Ali, Ishaan Chhabra, Nikhita Gandhi and Irshad Kamil."
  },
  {
    id: "runaway-lugaai-ep1",
    title: "Runaway Lugaai",
    subtitle: "Episode 1",
    category: "Series & Originals",
    genre: "Comedy",
    type: "youtube",
    videoId: "PseXVJ60EWQ",
    thumbnailUrl: "https://img.youtube.com/vi/PseXVJ60EWQ/maxresdefault.jpg",
    year: 2021,
    logline: "A runaway bride sets off a season of chaos, comedy and self-discovery.",
    synopsis: "Episode 1 of Runaway Lugaai, the MX Player comedy-drama series starring Naveen Kasturia — love, chaos and a runaway bride set the tone for the season."
  },
  {
    id: "runaway-lugaai-ep2",
    title: "Runaway Lugaai",
    subtitle: "Episode 2",
    category: "Series & Originals",
    genre: "Comedy",
    type: "youtube",
    videoId: "v6clEB4Y8m8",
    thumbnailUrl: "https://img.youtube.com/vi/v6clEB4Y8m8/maxresdefault.jpg",
    year: 2021,
    logline: "The search for Bulbul begins.",
    synopsis: "Episode 2 of Runaway Lugaai — the search for Bulbul begins, deepening the season's comic mystery."
  },
  {
    id: "runaway-lugaai-ep3",
    title: "Runaway Lugaai",
    subtitle: "Episode 3",
    category: "Series & Originals",
    genre: "Comedy",
    type: "youtube",
    videoId: "lx0v2AmP4gk",
    thumbnailUrl: "https://img.youtube.com/vi/lx0v2AmP4gk/maxresdefault.jpg",
    year: 2021,
    logline: "A stranger complication arrives.",
    synopsis: "Episode 3 of Runaway Lugaai, featuring Ruhi Singh, as the runaway-bride mystery gathers pace."
  },
  {
    id: "runaway-lugaai-ep8",
    title: "Runaway Lugaai",
    subtitle: "Episode 8",
    category: "Series & Originals",
    genre: "Comedy",
    type: "youtube",
    videoId: "c5Mx9YlVHxo",
    thumbnailUrl: "https://img.youtube.com/vi/c5Mx9YlVHxo/maxresdefault.jpg",
    year: 2021,
    logline: "The season heads toward its climax.",
    synopsis: "Episode 8 of Runaway Lugaai, with Naveen Kasturia and Sanjay Mishra, as the season heads toward its climax."
  },
  {
    id: "runaway-lugaai-ep10",
    title: "Runaway Lugaai",
    subtitle: "Episode 10 — Season Finale",
    category: "Series & Originals",
    genre: "Comedy",
    type: "youtube",
    videoId: "cTzUlQhXiOw",
    thumbnailUrl: "https://img.youtube.com/vi/cTzUlQhXiOw/maxresdefault.jpg",
    year: 2021,
    logline: "The runaway-bride comedy reaches its finale.",
    synopsis: "The Season 1 finale of Runaway Lugaai, bringing the runaway-bride comedy to a close."
  },
  {
    id: "raat-baaki-hai-trailer",
    title: "Raat Baaki Hai",
    subtitle: "Official Trailer",
    category: "Feature Films",
    genre: "Thriller",
    type: "youtube",
    videoId: "02uIFAZzDnQ",
    thumbnailUrl: "https://img.youtube.com/vi/02uIFAZzDnQ/maxresdefault.jpg",
    year: 2021,
    logline: "One night. One house. Secrets that refuse to stay buried.",
    synopsis: "Official trailer for Raat Baaki Hai, a ZEE5 Original psychological thriller starring Anup Soni and Paoli Dam — a night of secrets, suspicion and betrayal, told with a noir-inspired edge."
  },
  {
    id: "raat-baaki-hai-scene-1",
    title: "Raat Baaki Hai",
    subtitle: "Best Scene I",
    category: "Feature Films",
    genre: "Thriller",
    type: "youtube",
    videoId: "d_aLbh3Vly8",
    thumbnailUrl: "https://img.youtube.com/vi/d_aLbh3Vly8/maxresdefault.jpg",
    year: 2021,
    logline: "A key scene from Raat Baaki Hai.",
    synopsis: "A key scene from Raat Baaki Hai, starring Anup Soni and Paoli Dam."
  },
  {
    id: "raat-baaki-hai-scene-2",
    title: "Raat Baaki Hai",
    subtitle: "Best Scene II",
    category: "Feature Films",
    genre: "Thriller",
    type: "youtube",
    videoId: "BSLZpSj2PIE",
    thumbnailUrl: "https://img.youtube.com/vi/BSLZpSj2PIE/maxresdefault.jpg",
    year: 2021,
    logline: "A key scene from Raat Baaki Hai.",
    synopsis: "A key scene from Raat Baaki Hai, starring Anup Soni and Paoli Dam."
  },
  {
    id: "raat-baaki-hai-rahul-dev",
    title: "Raat Baaki Hai",
    subtitle: "Rahul Dev as Officer Rajesh Ahlawat",
    category: "Feature Films",
    genre: "Thriller",
    type: "youtube",
    videoId: "vMj810eBUxU",
    thumbnailUrl: "https://img.youtube.com/vi/vMj810eBUxU/maxresdefault.jpg",
    year: 2021,
    logline: "A key scene from Raat Baaki Hai.",
    synopsis: "A key scene from Raat Baaki Hai featuring Rahul Dev as Officer Rajesh Ahlawat."
  },
  {
    id: "raat-baaki-hai-scene-3",
    title: "Raat Baaki Hai",
    subtitle: "Best Scene III",
    category: "Feature Films",
    genre: "Thriller",
    type: "youtube",
    videoId: "RrKfnRhMoUI",
    thumbnailUrl: "https://img.youtube.com/vi/RrKfnRhMoUI/maxresdefault.jpg",
    year: 2021,
    logline: "A key scene from Raat Baaki Hai.",
    synopsis: "A key scene from Raat Baaki Hai, starring Anup Soni and Paoli Dam."
  },
  {
    id: "raat-baaki-hai-scene-4",
    title: "Raat Baaki Hai",
    subtitle: "Best Scene IV",
    category: "Feature Films",
    genre: "Thriller",
    type: "youtube",
    videoId: "afQZSsbYwDQ",
    thumbnailUrl: "https://img.youtube.com/vi/afQZSsbYwDQ/maxresdefault.jpg",
    year: 2021,
    logline: "A key scene from Raat Baaki Hai.",
    synopsis: "A key scene from Raat Baaki Hai, starring Anup Soni and Paoli Dam."
  },
  {
    id: "inn-galiyon-mein",
    title: "Inn Galiyon Mein",
    subtitle: "Private Screener",
    category: "Private Screeners",
    genre: "Musical Drama",
    type: "showcase",
    posterUrl: "https://img.youtube.com/vi/fePIz2odTnE/maxresdefault.jpg",
    trailerVideoId: "fePIz2odTnE",
    year: 2025,
    badge: "Private Screener - Musical Drama",
    logline: "A musical, political drama celebrating communal harmony.",
    synopsis: "Starring Javed Jaffrey, Vivaan Shah and Avantika Dassani - a beautifully crafted musical and political film celebrating unity, told through soulful music and poignant storytelling. The trailer is public; the full film is available on request.",
    credits: [
      { role: "Director", name: "Avinash Das" },
      { role: "Cast", name: "Javed Jaffrey, Vivaan Shah, Avantika Dassani" }
    ],
    contactEmail: "avinashdasfilmsgmail.com@gmail.com"
  },
  {
    id: "patang-ki-dor",
    title: "Patang Ki Dor",
    subtitle: "Song — Inn Galiyon Mein",
    category: "Documentaries & Shorts",
    genre: "Music Video",
    type: "youtube",
    videoId: "dGpOl8-k62Q",
    thumbnailUrl: "https://img.youtube.com/vi/dGpOl8-k62Q/maxresdefault.jpg",
    year: 2025,
    logline: "A soulful song from Inn Galiyon Mein.",
    synopsis: "\"Patang Ki Dor\", the soulful song from Inn Galiyon Mein, composed by Amaal Mallik and performed by Armaan and Palak Malik."
  },
  {
    id: "munuren",
    title: "Munuren",
    subtitle: "The Ordinary People",
    category: "Documentaries & Shorts",
    genre: "Documentary",
    type: "youtube",
    videoId: "8yV0ydgwpZs",
    thumbnailUrl: "https://img.youtube.com/vi/8yV0ydgwpZs/maxresdefault.jpg",
    year: 2023,
    logline: "An intimate portrait of Jharkhand's tribal communities.",
    synopsis: "A documentary portraying the rich yet challenging lives of Jharkhand's tribal communities — an extraordinary tale of resilience, capturing indigenous culture with authenticity and grace."
  },
  {
    id: "sahiya-2026",
    title: "SAHiYA",
    subtitle: "Private Screener",
    category: "Private Screeners",
    genre: "TBA",
    type: "showcase",
    posterUrl: "",
    year: 2026,
    badge: "Private Screener - 2026",
    logline: "Details to be added - send genre, logline, synopsis, credits and a poster image to complete this entry.",
    synopsis: "SAHiYA (2026) is currently on the private screener / festival circuit and is not available for public playback. Title and year are confirmed - genre, logline, synopsis, credits and poster still need to be supplied to finish this card.",
    credits: [
      { role: "Director", name: "Avinash Das" }
    ],
    contactEmail: "avinashdasfilmsgmail.com@gmail.com"
  }
];
