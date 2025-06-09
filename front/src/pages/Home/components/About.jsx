const AboutSection = () => {
  return (
    <section className="relative bg-bg-secondary py-20 px-4 md:px-8 lg:px-16 overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Elementi decorativi di sfondo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-highlight rounded-full opacity-10 -translate-x-1/3 -translate-y-1/3 z-0 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary rounded-full opacity-5 translate-x-1/3 translate-y-1/3 z-0 blur-xl"></div>

      {/* Contenuto principale */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Testo */}
        <div className="md:w-1/2 text-center md:text-left p-6 md:p-8">
          <div className="text-primary text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">{"CORRADO"}</div>
          <h2 className="text-text text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {"DE LA PASSION À LA NAISSANCE DE MAKÈ PIZZA"}
          </h2>
          <p className="text-text text-lg md:text-xl leading-relaxed mb-4">
            {"De jeune apprenti à maître pizzaiolo, Corrado a transformé sa passion en art, perfectionnant sa technique et innovant pour offrir une expérience unique de la pizza."}
          </p>
          <p className="text-text text-lg md:text-xl leading-relaxed mb-4">
            {"Après des années dans des pizzerias et des établissements à relancer, il réalise son rêve en 2021 : Makè Pizza voit le jour. Une pizzeria à emporter et en livraison qui combine ingrédients d’excellence, pâtes légères et un service irréprochable."}
          </p>
          <p className="text-text text-lg md:text-xl leading-relaxed font-semibold mb-8">
            {"Corrado a transformé son expérience en mission : transmettre une émotion positive à chaque pizza, "}
            <span className="text-highlight font-extrabold">{"parce qu’une pizza peut illuminer votre journée."}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#livraison"
              className="bg-primary text-highlight font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition"
            >
              Commander pour livraison
            </a>
            <a
              href="#emporter"
              className="bg-primary text-highlight font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition"
            >
              Commander à emporter
            </a>
          </div>
        </div>

        {/* Immagine unica */}
        <div className="relative md:w-1/2 flex items-center justify-center p-6 md:p-8">
          <img
            src="/img/chef.jpg"
            alt="chef"
            width={600}
            height={500}
            className="rounded-3xl object-cover shadow-2xl w-full h-auto max-w-md"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
