"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ type: "easeIn", duration: 1.0 }}
    >
      {children}
    </motion.div>
  );
}
