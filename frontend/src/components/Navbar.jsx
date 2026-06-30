import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-orange-500"
        >
          Foodie
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link to="/menu" className="hover:text-orange-500 transition">
            Menu
          </Link>

          <li className="cursor-pointer hover:text-orange-500">
            Offers
          </li>

          <li className="cursor-pointer hover:text-orange-500">
            Contact
          </li>

        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          <IoSearch
            className="text-2xl cursor-pointer hover:text-orange-500"
          />

          <Link
            to="/cart"
            className="relative"
          >

            <FaShoppingCart className="text-2xl" />

            <span
              className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center"
            >
              0
            </span>

          </Link>

          <Link to="/login">

            <FaUserCircle className="text-3xl hover:text-orange-500" />

          </Link>

          <FaBars className="text-2xl md:hidden cursor-pointer" />

        </div>

      </div>
    </nav>
  );
}

export default Navbar;