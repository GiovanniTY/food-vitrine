import Button from "../../../components/button";
import PizzaCard from "../../../components/PizzaCard";

const products = [
  {
    id: 1,
    name: "Margherita",
    description: "Sauce tomate, mozzarella, basilic frais",
    price: "10€",
    image: "/img/pizza.jpg",
    badge: "best",
  },
  {
    id: 2,
    name: "Reine",
    description: "Jambon, champignons, mozzarella",
    price: "12€",
    image: "/img/pizza.jpg",
    badge: "best",
  },
  {
    id: 3,
    name: "4 Fromages",
    description: "Mozzarella, gorgonzola, parmesan, chèvre",
    price: "13€",
    image: "/img/pizza.jpg",
    badge: "best",
  },
];

const nouveautés = [
  {
    id: 4,
    name: "Truffe",
    description: "Crème de truffe, mozzarella, roquette",
    price: "15€",
    image: "/img/pizza.jpg",
    badge: "new",
  },
  {
    id: 5,
    name: "Veggie",
    description: "Légumes grillés, sauce tomate, mozzarella",
    price: "11€",
    image: "/img/pizza.jpg",
    badge: "new",
  },
];

const ProductSection = () => {
  return (
    <section className="bg-bg text-text py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Meilleures ventes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {products.map((pizza) => (
          <PizzaCard key={pizza.id} {...pizza} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 text-secondary">
        Nouveautés
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {nouveautés.map((pizza) => (
          <PizzaCard key={pizza.id} {...pizza} />
        ))}
      </div>

      <div className="text-center">
        <Button className="bg-primary text-white hover:bg-secondary text-lg px-6 py-3 rounded-2xl">
          Voir le menu complet
        </Button>
      </div>
    </section>
  );
};

export default ProductSection;
