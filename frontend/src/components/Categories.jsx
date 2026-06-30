import CategoryCard from "./CategoryCard";
import { categories } from "../utils/foodData";

function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">

      <h2 className="text-4xl font-bold text-center mb-10">
        Explore Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
  {categories.map((category) => (
    <CategoryCard
      key={category.id}
      category={category}
    />
  ))}
</div>

    </section>
  );
}

export default Categories;