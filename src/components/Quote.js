import React from "react";
import { motion } from "framer-motion";

function Quote() {

  const transition = {
    delay: 0.2
  }

  return (
    <div className="quote1">
      <motion.h1
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
      >
        Respirar, Viva, Sonreir
      </motion.h1>
    </div>
  );
}

export default Quote;
