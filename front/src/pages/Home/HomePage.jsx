"use client"

import { useInView } from "react-intersection-observer"
import Hero from "./components/Hero"
import ProductSection from "./components/Product"
import AboutSection from "./components/About"
import ReviewsSection from "./components/Testimonial"
import WhenAndWhereSection from "./components/Contact"


const HomePage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Aggiungo useInView per la sezione About
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [avisRef, avisInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  /* const avisData = [
    {
      name: "Lisa & Winter",
      text: "J'ai eu l'occasion de faire plusieurs séances photos avec mon cheval  par Aline. Le résultat des photos a, à chaque fois été incroyable ! Elle prend le temps de capturer les meilleures part de chacun à travers la relation du couple cavalier/cheval. Le résultat ne peut donc être que magnifique ! Très pro, à l'écoute, disponible, pleines d'idées et le plus important, met à l'aise derrière l'objectif 📸 Je recommande +++",
      imageSrc: "/avis/avis1.jpeg",
    },
    {
      name: "La team Passion de famille",
      text: "On adore le travail d'Aline! Une belle évolution depuis tes débuts mais une chose reste : son talent pour mettre en avant les émotions du moment. Merci pour ça et à bientôt pour d'autres shootings 😉",
      imageSrc: "/avis/avis2.jpeg",
    },
    {
      name: "Clélia & Easy",
      text: "On a déjà vécu 2 séances ensemble avec Easy. La dernière était la séance grossesse qui m'a laissée de merveilleux souvenirs !! Les photos sont magnifiques et reflètent parfaitement l'amour et la complicité que nous avons, ma jument et moi. Merci pour ce travail magnifique 🤩 2 séances et ce ne seront pas les dernières ☺️",
      imageSrc: "/avis/avis5.jpeg",
    },
    {
      name: "Romain Gueli",
      text: "J'ai travaillé pour certaines agences de mannequins, et jamais je ne me suis senti aussi à l'aise devant un appareil photo, car tu es une personne simple, souriante, et tu sais ce que tu fais ! Je n'ai même pas besoin de te dire que le résultat est magnifique, les photos parlent d'elles-mêmes ! ❤️ Alors merci encore et à très bientôt",
      imageSrc: "/avis/avis3.jpeg",
    },
    {
      name: "Margot & Seeking",
      text: "Une photographe géniale ! Qui rend ce moment très agréable et qui dégage à travers ses photos le reflet de ce qu'on ne voit plus/pas (la confiance de mon cheval envers moi). On vit notre moment, on est libre de ses mouvements et elles captent ces moments magiques ! Elle nous guide si on est pas photogénique😉, nous conseille un cadre,... Elle nous aide si besoin. Enfin soit... je la recommande vivement !",
      imageSrc: "/avis/avis6.jpg",
    },
    {
      name: "Caroline & Tenente",
      text: "photographe très professionnelle tout en étant à l'écoute de ses « modèles » . Pour avoir fait plusieurs shotting avec , elle ne fait que se perfectionner d'année en année et ce pour notre plus grand plaisir .  De plus pour un rapport qualité prix génial ! Merci à elle :)",
      imageSrc: "/avis/avis4.jpeg",
    },
    {
      name: "Perrine & Aubade",
      text: "Une personne très attentive aux petits détails permettant de faire de grandes photos ! Une personne attentive avec un œil avisé, qui sait toujours trouver l'angle parfait même quand les modèles ont parfois un peu de mal à trouver leur posture",
      imageSrc: "/avis/avis7.jpg",
    },
    {
      name: "Aurelie",
      text: "Je voulais te dire un immense merci pour ce magnifique shooting grossesse ! Tu as su capturer un moment si spécial avec tellement de douceur, de bienveillance et de talent. Grâce à toi, j'ai des souvenirs précieux que je garderai toute ma vie, et les photos sont tout simplement sublimes ! Merci pour ton professionnalisme, ton écoute 🙏🏻",
      imageSrc: "/avis/avis8.jpeg",
    },
  ] */

  return (

      <div
        ref={heroRef}
        className={`transition-all duration-1000 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Hero />
        <ProductSection/>
        <AboutSection/>
        <ReviewsSection/>
        <WhenAndWhereSection/>
      </div>

    /*   <div
        ref={aboutRef}
        className={`transition-all duration-1000 ${
          aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <About />
      </div>

      <div
        ref={servicesRef}
        className={`transition-all duration-1000 ${
          servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Services />
      </div>

      <section
        ref={avisRef}
        className={`my-12 px-4 md:px-6 lg:px-8 transition-all duration-1000 ${
          avisInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <AvisCarousel avisData={avisData} />
      </section>
    </div>
   */
  )
}

export default HomePage