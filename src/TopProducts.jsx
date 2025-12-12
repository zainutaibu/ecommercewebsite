import React from "react";

const ProductsData = [
  {
    id: 1,
    img: "/shirt.png", // Ensure this is in 'public/' folder
    title: "Casual Wear",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.5,
  },
  {
    id: 2,
    img: "/shirt2.png",
    title: "Printed Shirt",
    description: "Stylish printed shirt for all seasons.",
    rating: 4.2,
  },
  {
    id: 3,
    img: "/shirt3.png",
    title: "Women Shirt",
    description: "Elegant wear for women.",
    rating: 4.7,
  },
];

const TopProducts = () => {
  return (
    <div className="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 px-5 text-white">
      {ProductsData.map((data) => (
        <div
          key={data.id}
          className="bg-white/10 p-5 rounded-xl text-center group transition duration-300 hover:shadow-xl hover:bg-white/20 hover:scale-[1.03]"
        >
          <img
            src={data.img}
            alt={data.title}
            loading="lazy"
            className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
          />
          <h1 className="text-xl font-bold mb-2">{data.title}</h1>
          <p className="text-gray-300 text-sm mb-4">{data.description}</p>
          <p className="text-yellow-400 font-semibold">⭐ {data.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default TopProducts;
