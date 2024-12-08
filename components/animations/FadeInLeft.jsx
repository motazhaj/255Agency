import React from "react";
import * as motion from "framer-motion/client";

const FadeInLeft = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, type: "spring", ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeft;
