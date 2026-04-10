import React from 'react';
import { motion } from 'framer-motion';

const CityCard = ({ name, imageUrl, onClick }) => {
  return (
    <motion.div 
      onClick={onClick}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
      role="button"
      aria-label={`View food delivery in ${name}`}
    >
      <img 
        src={imageUrl} 
        alt={`${name} delivery`} 
        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <button className="absolute bottom-4 left-4 bg-white text-gray-800 font-bold py-2 px-5 rounded-xl shadow-md group-hover:bg-pink-50 text-sm transition-colors z-10">
        {name}
      </button>
      
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default CityCard;
