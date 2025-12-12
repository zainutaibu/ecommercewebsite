import React from "react";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import DarkMode from "./DarkMode";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center text-lg font-bold gap-1">
          <FiShoppingBag size={22} />
          ShopMe
        </a>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 w-60">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500 dark:placeholder:text-gray-300"
          />
          <IoMdSearch className="text-gray-500 dark:text-gray-300" />
        </div>

        {/* Cart & Dark Mode */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleOrderPopup}
            className="flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-full text-sm"
          >
            <span className="hidden sm:inline">Order</span>
            <FaCartShopping />
          </button>
          <DarkMode />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-white/10">
        <ul className="flex justify-center gap-6 py-2 text-sm font-medium">
          <li><a href="#" className="hover:text-primary">Home</a></li>
          <li><a href="#" className="hover:text-primary">Top Rated</a></li>
          <li><a href="#" className="hover:text-primary">Kids Wear</a></li>
          <li><a href="#" className="hover:text-primary">Mens Wear</a></li>
          <li><a href="#" className="hover:text-primary">Electronics</a></li>

          {/* Dropdown */}
          <li className="relative group cursor-pointer">
            <span className="flex items-center gap-1">
              Trending Products <FaCaretDown />
            </span>
            <ul className="absolute hidden group-hover:block top-full mt-1 bg-white dark:bg-gray-800 rounded shadow-md w-44">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10">Best Sellers</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10">Top Deals</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10">New Arrivals</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
