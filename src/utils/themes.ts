import tema1 from "@/assets/temas/Tema_1.svg";
import tema1Dark from "@/assets/temas/Tema_1_dark.svg";
import tema2 from "@/assets/temas/Tema_2.svg";
import tema3 from "@/assets/temas/Tema_3.svg";
import tema5 from "@/assets/temas/Tema_5.svg";
import tema9 from "@/assets/temas/Tema_9.svg";

export const themes = {
  // Tema Principal (Light Mode)
  default: {
    primaryBackground: tema1,
    progressBarBG: "bg-[#DDDEEB]",
    // Icon
    cardBackground: "bg-white",
    cardHover: "shadow-[#B1B7FF]",
    // Message
    receivedBackground: "bg-[#CCD0FF]",
    sentBackground: "bg-[#DDDEEB]",
    // Text
    hashtag: "text-[#969EF5]",
    textPrimary: "text-[#1E1E25]",
    textDefault: "text-gray",
    textLight: "text-[#C5C6D0]",
    // Highlight
    highlightHover: "hover:text-[#B1B7FF] hover:shadow-[#B1B7FF]",
  },
  defaultDark: {
    primaryBackground: tema1Dark,
    progressBarBG: "bg-[#D2D3FB]",
    // Icon
    cardBackground: "bg-[#1E1E25]",
    cardHover: "shadow-[#B1B7FF]",
    // Message
    receivedBackground: "bg-[#CCD0FF]",
    sentBackground: "bg-[#DDDEEB]",
    // Text
    hashtag: "text-[#969EF5]",
    textPrimary: "text-[#f1f1f1]",
    textDefault: "text-gray",
    textLight: "text-[#F1F1F1]",
    // Highlight
    highlightHover: "hover:text-[#B1B7FF] hover:shadow-[#B1B7FF]",
  },
  // Tema Salmon (#EE6F74)
  salmon: {
    primaryBackground: tema2,
    progressBarBG: "bg-[#EEE7E1]",
    //Card
    cardBackground: "bg-white",
    cardHover: "shadow-[#FFD1C1]",
    // Message
    receivedBackground: "bg-[#FFD1C1]",
    sentBackground: "bg-[#EEE7E1]",
    // Text
    hashtag: "text-[#EE6F74]",
    textPrimary: "text-[#1E1E25]",
    textDefault: "text-gray",
    textLight: "text-[#EEE7E1]",
    // Highlight
    highlightHover: "hover:text-[#FDA4AF] hover:shadow-[#FFD1C1]",
  },
  salmonDark: {
    primaryBackground: tema2,
    progressBarBG: "bg-[#EEE7E1]",
    //Card
    cardBackground: "bg-[#282828]",
    cardHover: "shadow-[#FFD1C1]",
    // Message
    receivedBackground: "bg-[#FFD1C1]",
    sentBackground: "bg-[#EEE7E1]",
    // Text
    hashtag: "text-[#EE6F74]",
    textPrimary: "text-[#f1f1f1]",
    textDefault: "text-gray",
    textLight: "text-[#EEE7E1]",
    // Highlight
    highlightHover: "hover:text-[#FDA4AF] hover:shadow-[#FFD1C1]",
  },

  // Tema Blue (#48648C)
  pixelBlue: {
    primaryBackground: tema3,
    progressBarBG: "bg-[#E8EBF2]", // Cor HEX equivalente a rgba(72, 100, 140, 0.12)
    // Card
    cardBackground: "bg-white",
    cardHover: "shadow-[#52689A]",
    // Message
    receivedBackground: "bg-[#48648C]",
    sentBackground: "bg-[#E8EBF2]", // Cor HEX equivalente a rgba(72, 100, 140, 0.12)
    // Text
    hashtag: "text-[#48648C]",
    textPrimary: "text-[#1E1E25]",
    textDefault: "text-gray",
    textLight: "text-[#D4D5E1]",
    // Highlight
    highlightHover: "hover:text-[#52689A] hover:shadow-[#52689A]",
  },
  pixelBlueDark: {
    primaryBackground: tema3,
    progressBarBG: "bg-[#ACB7CB]", // Cor HEX equivalente a rgba(72, 100, 140, 0.12)
    // Card
    cardBackground: "bg-[#121212]",
    cardHover: "shadow-[#52689A]",
    // Message
    receivedBackground: "bg-[#48648C]",
    sentBackground: "bg-[#E8EBF2]", // Cor HEX equivalente a rgba(72, 100, 140, 0.12)
    // Text
    hashtag: "text-[#48648C]",
    textPrimary: "text-[#f1f1f1]",
    textDefault: "text-gray",
    textLight: "text-[#D4D5E1]",
    // Highlight
    highlightHover: "hover:text-[#52689A] hover:shadow-[#52689A]",
  },
  // Tema Blue dots
  dotsBlue: {
    primaryBackground: tema5,
    progressBarBG: "bg-[#DDDEEB]",
    // Card
    cardBackground: "bg-white",
    cardHover: "shadow-[#3C3AA1]",
    // Message
    receivedBackground: "bg-[#B1B1FA]", // Cor mais clara: #B1B1FA
    sentBackground: "bg-[#E8EBF2]", // Cor HEX equivalente a rgba(72, 100, 140, 0.12)
    // Text
    hashtag: "text-[#3C3AA1]",
    textPrimary: "text-[#1E1E25]",
    textDefault: "text-gray",
    textLight: "text-[#D4D5E1]",
    // Highlight
    highlightHover: "hover:text-[#3C3AA1] hover:shadow-[#3C3AA1]",
  },
  dotsBlueDark: {
    primaryBackground: tema5,
    progressBarBG: "bg-[#DDDEEB]",
    // Card
    cardBackground: "bg-[#121212]",
    cardHover: "shadow-[#1E1A78]",
    // Message
    receivedBackground: "bg-[#B1B1FA]", // Cor mais clara: #B1B1FA
    sentBackground: "bg-[#E8EBF2]", // Cor HEX equivalente a rgba(72, 100, 140, 0.12)
    // Text
    hashtag: "text-[#3C3AA1]",
    textPrimary: "text-[#f1f1f1]",
    textDefault: "text-gray",
    textLight: "text-[#D4D5E1]",
    // Highlight
    highlightHover: "hover:text-[#1E1A78] hover:shadow-[#1E1A78]",
  },
  // Tema Red
  red: {
    primaryBackground: tema9,
    progressBarBG: "bg-[#E0E0E0]",
    // Card
    cardBackground: "bg-white",
    cardHover: "shadow-[#CC1B1E]", // Cor HEX equivalente a rgba(204, 27, 30, 0.79)
    // Message
    receivedBackground: "bg-[#F5C6C7]", // Cor HEX equivalente a rgba(204, 27, 30, 0.28)
    sentBackground: "bg-[#E0E0E0]",
    // Text
    hashtag: "text-[#CC1B1E]",
    textPrimary: "text-[#1E1E25]",
    textDefault: "text-gray",
    textLight: "text-[#F5C6C7]", // Cor HEX equivalente a rgba(212, 0, 212, 0.0549)
    // Highlight
    highlightHover: "hover:text-[#CC1B1E] hover:shadow-[#CC1B1E]",
  },
  redDark: {
    primaryBackground: tema9,
    progressBarBG: "bg-[#E0E0E0]",
    // Card
    cardBackground: "bg-[#121212]",
    cardHover: "shadow-[#CC1B1E]", // Cor HEX equivalente a rgba(204, 27, 30, 0.79)
    // Message
    receivedBackground: "bg-[#CC1B1E]", // Cor HEX equivalente a rgba(204, 27, 30, 0.28)
    sentBackground: "bg-[#282828]",
    // Text
    hashtag: "text-[#CC1B1E]",
    textPrimary: "text-[#f1f1f1]",
    textDefault: "text-gray",
    textLight: "text-[#F5A594]", // Cor HEX equivalente a rgba(212, 0, 212, 0.0549)
    // Highlight
    highlightHover: "hover:text-[#CC1B1E] hover:shadow-[#CC1B1E]",
  },
};
