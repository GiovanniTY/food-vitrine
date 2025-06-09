import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "../../../components/card"
import { Avatar, AvatarFallback } from "../../../components/avatar" // Ora importa dal tuo file
import Button from "../../../components/button"

const reviews = [
  {
    id: 1,
    name: "Paola Spadaro",
    date: "2024-12-25",
    avatarInitials: "P",
    rating: 5,
    text_fr: "Pizza délicieuse ! Pâte très légère et excellente qualité des ingrédients... fortement recommandé !!",
  },
  {
    id: 2,
    name: "Simone Bianco",
    date: "2024-12-12",
    avatarInitials: "S",
    rating: 5,
    text_fr:
      "Excellentes pizzas ! Dommage qu'ils ne puissent pas livrer plus de fois par semaine la pizza à pâte napolitaine 😋",
  },
  {
    id: 3,
    name: "Da_inblack",
    date: "2024-12-04",
    avatarInitials: "D",
    rating: 5,
    text_fr:
      "Excellente pour ne pas dire fantastique pizzeria à emporter ! Ce que j'ai aimé dans cette pizzeria, c'est que dès la première commande, ils m'ont...",
  },
  {
    id: 4,
    name: "Marco Rossi",
    date: "2024-11-18",
    avatarInitials: "M",
    rating: 4,
    text_fr: "Bonne pizza, mais le service était un peu lent. Je reviendrai pour réessayer.",
  },
]

const ReviewsSection = () => {
  return (
    <section className="relative bg-text py-20 px-4 md:px-8 lg:px-16 overflow-hidden rounded-[40px] mx-auto max-w-7xl my-12">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-8 fill-highlight text-highlight" />
          ))}
        </div>
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-2 leading-tight">
          {"PLUS DE 250 PIZZAS VENDUES CHAQUE JOUR"}
        </h2>
        <p className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
          {"ET DES CLIENTS TOUJOURS SATISFAITS!"}
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full size-12 hidden md:flex items-center justify-center"
          aria-label="Previous review"
        >
          <ChevronLeft className="size-8" />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
          {reviews.slice(0, 3).map((review) => (
            <Card key={review.id} className="bg-bg text-text rounded-xl shadow-lg p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-12 bg-primary text-white font-bold">
                      <AvatarFallback>{review.avatarInitials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <img src="/placeholder.svg?height=24&width=24" alt="Google logo" className="size-6" />
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-highlight text-highlight" />
                  ))}
                  <CheckCircle className="size-5 text-secondary ml-1" />
                </div>
                <p className="text-base leading-relaxed mb-3">
                  {review.text_fr.length > 150 ? `${review.text_fr.substring(0, 150)}...` : review.text_fr}
                </p>
                <a href="#" className="text-primary hover:underline text-sm font-medium">
                  {"Lire la suite"}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full size-12 hidden md:flex items-center justify-center"
          aria-label="Next review"
        >
          <ChevronRight className="size-8" />
        </Button>
      </div>
    </section>
  )
}

export default ReviewsSection
