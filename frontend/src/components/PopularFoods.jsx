import FoodCard from "./FoodCard";
import { popularFoods } from "../utils/foodData";

function PopularFoods() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        🔥 Popular Foods
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {popularFoods.map((food) => (

          <FoodCard
            key={food.id}
            food={food}
          />

        ))}

      </div>

    </section>
  );
}

export default PopularFoods;