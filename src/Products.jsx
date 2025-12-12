import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "./Popup"; // Make sure Popup.jsx is in same folder

const ProductsData = [
  {
    id: 1,
    img: "/women.png",
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "/women2.jpg",
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "/women3.jpg",
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "/women4.jpg",
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: "/women2.jpg",
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, offset: 100 });
  }, []);

  const handleClick = (product) => {
    setSelectedProduct(product);
    setOrderPopup(true);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores modi.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              onClick={() => handleClick(data)}
              className="space-y-3 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg p-2 rounded-lg"
            >
              <img
                src={data.img}
                alt={data.title}
                className="h-[220px] w-[150px] object-cover rounded-md"
                loading="lazy"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="mt-10 bg-primary text-white py-2 px-6 rounded-md hover:bg-opacity-80 transition">
            View All Products
          </button>
        </div>
      </div>

      {/* Popup */}
      <Popup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        product={selectedProduct}
      />
    </div>
  );
};

export default Products;
