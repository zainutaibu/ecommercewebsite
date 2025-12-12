import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // ✅ base setting
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 max-w-xl mx-auto">
          <p className="text-sm text-primary">What our customers are saying</p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Cards */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="px-4">
              <div className="flex flex-col items-center gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-slate-600 bg-primary/10">
                <img
                  src={data.img}
                  alt={data.name}
                  loading="lazy"
                  className="rounded-full w-20 h-20"
                />
                <p className="text-xs text-gray-500 dark:text-slate-300 text-center">
                  {data.text}
                </p>
                <h1 className="text-xl font-bold dark:text-slate-300 text-black/80">
                  {data.name}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
