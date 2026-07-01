import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PopularFoods from "../components/PopularFoods";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <PopularFoods />
    </>
  );
}

export default Home;