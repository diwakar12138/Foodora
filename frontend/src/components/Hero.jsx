function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl overflow-hidden">

        <div className="grid md:grid-cols-2 items-center">

          {/* Left Side */}
          <div className="p-10 md:p-16 text-white">

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Delicious Food
              <br />
              Delivered To
              <br />
              Your Door 🚀
            </h1>

            <p className="mt-6 text-lg text-orange-100">
              Order your favourite meals from the best restaurants
              near you with fast delivery and exciting offers.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Order Now
              </button>

              <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-orange-600 transition">
                Explore Menu
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center p-10">

            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"
              alt="Burger"
              className="w-[420px] rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;