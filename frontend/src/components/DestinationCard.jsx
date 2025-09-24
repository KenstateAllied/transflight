// components/DestinationCard.jsx

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
      <img src={destination.image} alt={destination.name} className="w-full h-56 object-cover " />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{destination.name}</h2>
        <p className="text-sm text-gray-500">{destination.country}</p>
        <p className="text-sm text-gray-600">{destination.description}</p>
        <div className="flex justify-between items-center pt-2">
          <span className="text-green-600 font-semibold">{destination.price}</span>
          <span className="text-sm text-gray-500">{destination.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
