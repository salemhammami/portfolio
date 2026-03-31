import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "motion/react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};
