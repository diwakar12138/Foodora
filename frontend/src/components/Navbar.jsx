import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-8 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-orange-500 w-52"
        >
          Foodie
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-10 font-medium">

          <Link
            to="/"
            className="hover:text-orange-500 transition"
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="hover:text-orange-500 transition"
          >
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

        <div className="w-52 flex justify-end items-center gap-5">

          <IoSearch className="text-2xl cursor-pointer hover:text-orange-500" />

          {/* Cart */}

          {user && (
            <Link
              to="/cart"
              className="relative"
            >
              <FaShoppingCart className="text-2xl" />

              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                0
              </span>
            </Link>
          )}

          {/* User Not Logged In */}

          {!user ? (
            <>
              <Link
                to="/login"
                className="hover:text-orange-500"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2"
              >
                <FaUserCircle className="text-3xl text-orange-500" />

                <span className="font-semibold">
                  {user.name}
                </span>
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}

          <FaBars className="text-2xl md:hidden cursor-pointer" />

        </div>

      </div>
    </nav>
  );
}

export default Navbar;