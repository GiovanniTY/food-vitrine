import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-text text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
        {/* Colonna 1: Contatti Pizzeria */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold text-highlight mb-4">{"Makè Pizza"}</h3>
          <p className="text-gray-300 mb-2 flex items-center gap-2">
            <MapPin className="size-5 text-secondary" />
            {"Rue de l'Église 123, 7160 Chapelle-lez-Herlaimont"}
          </p>
          <p className="text-gray-300 mb-2 flex items-center gap-2">
            <Phone className="size-5 text-secondary" />
            <a href="tel:+3212345678" className="hover:text-highlight transition-colors">
              {"+32 123 45 678"}
            </a>
          </p>
          <p className="text-gray-300 mb-2 flex items-center gap-2">
            <Mail className="size-5 text-secondary" />
            <a href="mailto:info@makepizza.be" className="hover:text-highlight transition-colors">
              {"info@makepizza.be"}
            </a>
          </p>
        </div>

        {/* Colonna 2: Link Utili */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">{"Liens Utiles"}</h3>
          <ul className="space-y-2">
            <li>
              <a href="#menu" className="text-gray-300 hover:text-highlight transition-colors">
                {"Menu"}
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-300 hover:text-highlight transition-colors">
                {"À propos"}
              </a>
            </li>
            <li>
              <a href="#reviews" className="text-gray-300 hover:text-highlight transition-colors">
                {"Témoignages"}
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-highlight transition-colors">
                {"Contact"}
              </a>
            </li>
          </ul>
        </div>

        {/* Colonna 3: Social Network */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4">{"Suivez-nous"}</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/makepizza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-highlight transition-colors"
            >
              <Facebook className="size-7" />
            </a>
            <a
              href="https://instagram.com/makepizza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-highlight transition-colors"
            >
              <Instagram className="size-7" />
            </a>
            {/* Puoi aggiungere altri social qui */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm">{"© 2025 Makè Pizza. Tous droits réservés."}</div>
    </footer>
  )
}

export default Footer
