import React from 'react';
import { motion } from 'motion/react';

export function AreaItem({ src, alt, gradient }) {
  return (
    <motion.li
      className="relative group"
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`w-20 scale-110 aspect-square bg-gradient-to-tr ${gradient} absolute -top-2 left-1/4 rounded-full skew-y-12 opacity-0 blur-lg skew-x-12 rotate-90 group-hover:opacity-40 transition-opacity duration-300`}
      ></div>
      <a href="#" className="z-10 relative">
        <img className="h-20 md:h-24 object-cover overflow-visible" src={src} alt={alt} />
      </a>
    </motion.li>
  );
}