const WhenAndWhereSection = () => {
    const googleMapsLink = "https://www.google.com/maps/place/Chapelle-lez-Herlaimont,+Belgium" // Link generico per la città
  
    return (
      <section className="relative bg-bg py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Elementi decorativi di sfondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full opacity-10 translate-x-1/2 -translate-y-1/2 z-0 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-highlight rounded-full opacity-5 -translate-x-1/2 translate-y-1/2 z-0 blur-xl"></div>
  
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
          {/* Sezione Mappa */}
          <div className="md:w-1/2 p-6 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-primary/30 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">{"Où nous trouver"}</h2>
            <p className="text-lg text-text mb-6">
              {"Venez nous rendre visite et découvrez le goût authentique de nos pizzas !"}
            </p>
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md border border-gray-200 mb-6">
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" aria-label="View on Google Maps">
                <img
                  src="https://via.placeholder.com/600x400/FDF6F0/333333?text=Mappa+di+Chapelle-lez-Herlaimont"
                  alt="Localisation de la pizzeria sur une carte"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
            <p className="text-lg font-semibold text-text mb-2">
              {"Rue de l'Église 123"} {/* Indirizzo di esempio */}
            </p>
            <p className="text-lg font-semibold text-text mb-4">{"7160 Chapelle-lez-Herlaimont, Belgique"}</p>
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary/90 transition-colors"
            >
              {"Voir sur Google Maps"}
            </a>
          </div>
  
          {/* Sezione Orari */}
          <div className="md:w-1/2 p-6 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-secondary/30 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">{"Nos Horaires"}</h2>
            <p className="text-lg text-text mb-6">{"Nous sommes impatients de vous accueillir !"}</p>
            <div className="w-full max-w-md text-left text-text text-lg space-y-3">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-semibold">{"Lundi:"}</span>
                <span className="text-primary font-bold">{"Fermé"}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-semibold">{"Mardi - Jeudi:"}</span>
                <span>{"18h00 - 22h00"}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-semibold">{"Vendredi - Samedi:"}</span>
                <span>{"18h00 - 23h00"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{"Dimanche:"}</span>
                <span>{"17h00 - 22h00"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default WhenAndWhereSection
  