import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white"
    >
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-xl mx-auto space-y-6">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>

          <div
            data-aos="fade-up"
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary px-6 py-3 rounded-md hover:bg-opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
