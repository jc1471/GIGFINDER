const artistDB = {

  "charlotte-de-witte": {
    name: "Charlotte de Witte",
    bio: "Belgian techno DJ and producer known for her dark, driving sound and stripped-back minimalism. A dominant force in global techno.",
    image: "/artists/charlotte.jpg",
    social: {
      instagram: "https://instagram.com/charlottedewittemusic",
      spotify: "https://open.spotify.com/artist/charlotte"
    }
  },

  "nina-kraviz": {
    name: "Nina Kraviz",
    bio: "Russian DJ, producer and singer blending acid, techno and experimental sounds with a unique artistic identity.",
    image: "/artists/nina.jpg",
    social: {
      instagram: "https://instagram.com/ninakraviz",
      spotify: "https://open.spotify.com/artist/nina"
    }
  },

  "bicep": {
    name: "Bicep",
    bio: "Northern Irish electronic duo known for emotional rave music, blending house, techno and breakbeat.",
    image: "/artists/bicep.jpg",
    social: {
      instagram: "https://instagram.com/feelmybicep",
      spotify: "https://open.spotify.com/artist/bicep"
    }
  },

  "fred-again..": {
    name: "Fred again..",
    bio: "UK producer blending emotional storytelling with electronic music, known for his 'Actual Life' series.",
    image: "/artists/fred.jpg",
    social: {
      instagram: "https://instagram.com/fredagainagainagainagainagain",
      spotify: "https://open.spotify.com/artist/fred"
    }
  },

  "caribou": {
    name: "Caribou",
    bio: "Electronic project by Dan Snaith, combining psychedelic textures with dance music and live instrumentation.",
    image: "/artists/caribou.jpg",
    social: {
      instagram: "https://instagram.com/caribouband",
      spotify: "https://open.spotify.com/artist/caribou"
    }
  },

  "arctic-monkeys": {
    name: "Arctic Monkeys",
    bio: "British indie rock band known for sharp lyrics and evolving sound, from garage rock to lounge-inspired albums.",
    image: "/artists/arctic.jpg",
    social: {
      instagram: "https://instagram.com/arcticmonkeys",
      spotify: "https://open.spotify.com/artist/arctic"
    }
  },

  "tame-impala": {
    name: "Tame Impala",
    bio: "Psychedelic music project by Kevin Parker blending rock, synths and dreamy production.",
    image: "/artists/tame.jpg",
    social: {
      instagram: "https://instagram.com/tameimpala",
      spotify: "https://open.spotify.com/artist/tame"
    }
  },

  "disclosure": {
    name: "Disclosure",
    bio: "UK house duo bringing modern dance music to mainstream audiences with soulful vocals and clean production.",
    image: "/artists/disclosure.jpg",
    social: {
      instagram: "https://instagram.com/disclosure",
      spotify: "https://open.spotify.com/artist/disclosure"
    }
  },

  "peggy-gou": {
    name: "Peggy Gou",
    bio: "South Korean DJ and producer known for house music with a distinctive global and fashion-forward identity.",
    image: "/artists/peggy.jpg",
    social: {
      instagram: "https://instagram.com/peggygou_",
      spotify: "https://open.spotify.com/artist/peggy"
    }
  },

  "jamie-xx": {
    name: "Jamie xx",
    bio: "Producer and member of The xx, known for blending UK garage, house and experimental electronic sounds.",
    image: "/artists/jamie.jpg",
    social: {
      instagram: "https://instagram.com/jamiexx",
      spotify: "https://open.spotify.com/artist/jamie"
    }
  },

  "the-blaze": {
    name: "The Blaze",
    bio: "French electronic duo known for emotional cinematic music and iconic visual storytelling.",
    image: "/artists/blaze.jpg",
    social: {
      instagram: "https://instagram.com/theblazeprod",
      spotify: "https://open.spotify.com/artist/blaze"
    }
  },

  "local-noise-collective": {
    name: "Local Noise Collective",
    bio: "Underground experimental group pushing boundaries with noise, ambient textures and live improvisation.",
    image: "/artists/local.jpg",
    social: {
      instagram: "#",
      spotify: "#"
    }
  },

  "echo-drift": {
    name: "Echo Drift",
    bio: "Ambient electronic artist crafting immersive soundscapes and minimal compositions.",
    image: "/artists/echo.jpg",
    social: {
      instagram: "#",
      spotify: "#"
    }
  },

  "sombra-beat": {
    name: "Sombra Beat",
    bio: "Latin house project blending rhythmic grooves with electronic dance energy.",
    image: "/artists/sombra.jpg",
    social: {
      instagram: "#",
      spotify: "#"
    }
  }

};
export function getArtistById(id) {
    console.log("LOOKING FOR:", id);

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("FOUND:", artistDB[id]);
            resolve(artistDB[id]);
        }, 300); // fake api delay
    });
}