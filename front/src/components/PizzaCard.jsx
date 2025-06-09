const PizzaCard = ({ image, title, description, price, isNew, isBestSeller }) => {
    return (
      <div className="bg-bg text-text rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-secondary">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover"
          />
          {(isNew || isBestSeller) && (
            <div className="absolute top-2 left-2 px-3 py-1 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: isBestSeller ? '#C0392B' : '#F1C40F' }}>
              {isBestSeller ? 'Best Seller' : 'Nouveauté'}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-gray-700 mb-2">{description}</p>
          <div className="flex items-center justify-between mt-4">
          <p className="text-primary font-semibold text-lg">
          {!isNaN(parseFloat(price)) ? `${parseFloat(price).toFixed(2)} €` : 'Prix indisponible'}

</p>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition">
              Ajouter
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PizzaCard;
  