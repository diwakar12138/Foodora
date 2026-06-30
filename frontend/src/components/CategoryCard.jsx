function CategoryCard({ category }) {
  return (
    <div
      className="
      group
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
      cursor-pointer
      p-5
      flex
      flex-col
      items-center
      hover:-translate-y-2
      "
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-orange-100 transition-transform duration-300 group-hover:scale-110"
      />

      <h2 className="mt-4 text-lg font-semibold">
        {category.name}
      </h2>
    </div>
  );
}

export default CategoryCard;