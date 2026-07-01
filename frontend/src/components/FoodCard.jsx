import { FaStar, FaHeart } from "react-icons/fa";

function FoodCard({ food }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

      <div className="relative">

        <img
          src={food.image}
          alt={food.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
        />

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
          <FaHeart className="text-red-500" />
        </button>

      </div>

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {food.name}
        </h2>

        <div className="flex justify-between items-center mt-3">

          <span className="text-orange-500 font-bold text-xl">
            ₹{food.price}
          </span>

          <div className="flex items-center gap-1">

            <FaStar className="text-yellow-500" />

            <span>{food.rating}</span>

          </div>

        </div>

        <button
          className="
          mt-5
          w-full
          bg-orange-500
          hover:bg-orange-600
          text-white
          py-3
          rounded-xl
          transition
          "
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default FoodCard;