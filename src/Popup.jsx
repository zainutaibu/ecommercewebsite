import React from "react";
import { FaStar } from "react-icons/fa6";

const Popup = ({ orderPopup, setOrderPopup, product }) => {
  if (!orderPopup || !product) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
        <button
          onClick={() => setOrderPopup(false)}
          className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black"
        >
          &times;
        </button>

        <img
          src={product.img}
          alt={product.title}
          className="w-40 h-40 object-cover rounded-md mx-auto mb-4"
        />
        <h2 className="text-xl font-bold text-center mb-2">{product.title}</h2>
        <p className="text-center text-gray-600 mb-2">Color: {product.color}</p>
        <div className="flex justify-center items-center gap-1 mb-4">
          <FaStar className="text-yellow-400" />
          <span>{product.rating}</span>
        </div>

        <div className="text-center">
          <button
            className="bg-primary text-white py-2 px-6 rounded hover:bg-opacity-90 transition"
            onClick={() => alert(`Ordered: ${product.title}`)}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
