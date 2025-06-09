/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // ✅ Scelta Uno — Classico italiano
        "primary": "#C0392B",   // rosso pomodoro , usato per pulsanti, link evidenze
        "secondary": "#27AE60", // verde basilico, usato per accenti , navbar, bordi 
        "bg": "#FDF6F0",        // beige chiaro
        "bg-secondary": " #EAF8EF" , //verde chiaro per alternare
        "text": "#333333",      // nero morbido
        "highlight": "#F1C40F", // giallo mozzarella

       /*  // ✅ Scelta Due — Rustico moderno
        "rustic-primary": "#8B4513",    // marrone legno
        "rustic-secondary": "#F4A261",  // arancio zucca
        "rustic-bg": "#FFF8F1",         // avorio
        "rustic-text": "#2C2C2C",       // grigio antracite
        "rustic-highlight": "#E76F51",  // rosso rame

        // ✅ Scelta Tre — Fresh & Light
        "fresh-primary": "#FF6B6B",     // rosso fragola
        "fresh-secondary": "#4ECDC4",   // verde acqua
        "fresh-bg": "#FFFFFF",          // bianco puro
        "fresh-text": "#222222",        // grigio scuro
        "fresh-highlight": "#FFE66D",   // giallo limone

        // ✅ Scelta Quattro — Scuro elegante
        "elegant-primary": "#D35400",   // arancione bruciato
        "elegant-secondary": "#2C3E50", // blu notte
        "elegant-bg": "#1C1C1C",        // nero profondo
        "elegant-text": "#ECF0F1",      // grigio chiaro
        "elegant-highlight": "#F39C12", // oro caldo

        // ✅ Scelta Cinque — Verde naturale
        "green-primary": "#2ECC71",     // verde insalata
        "green-secondary": "#E74C3C",   // rosso ciliegia
        "green-bg": "#FAFAFA",          // grigio chiaro neutro
        "green-text": "#333333",        // nero morbido
        "green-highlight": "#F39C12",   // giallo sole */
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Aggiungi questo plugin
}

