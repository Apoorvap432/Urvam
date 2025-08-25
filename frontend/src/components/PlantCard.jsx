import React from "react";
import { motion } from "framer-motion";

const PlantCard = ({ plants }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col"
    >
      <img
        src={
          plants.imageUrl?.startsWith("http")
            ? plants.imageUrl
            : `http://localhost:5000${plants.imageUrl}`
        }
        alt={plants.name}
        className="h-40 w-full object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{plants.name}</h3>
      <p className="text-sm text-gray-500">{plants.categories.join(", ")}</p>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-green-600 font-bold">₹{plants.price}</span>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            plants.inStock
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {plants.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </motion.div>
  );
};

export default PlantCard;
