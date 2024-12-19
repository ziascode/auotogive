"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DayBackground from "./components/IslamicBackground";

export default function Linktree() {
  const [links] = useState([
    { name: "Donate Now", url: "/donate", icon: "💳" },
    { name: "Volunteer", url: "/volunteer", icon: "🙌" },
    { name: "Projects", url: "/projects", icon: "🌍" },
    { name: "Get Involved", url: "/get-involved", icon: "🤝" },
  ]);

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center font-sans">
      <DayBackground/>
      
      {/* Header Section */}
      <header className="text-center mb-8">
        <motion.img
          src="https://pennyappeal.ca/images/logo-orange.png"
          alt="Penny Appeal"
          className="w-24 mx-auto mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <h1 className="text-2xl font-bold text-orange-600">
          Your Gateway to Giving
        </h1>
        <p className="text-gray-600">Make an impact with every action.</p>
      </header>

      {/* Links Section */}
      <main className="flex flex-col items-center w-full px-4">
        {links.map((link, index) => (
          <motion.a
            href={link.url}
            key={index}
            className="w-full max-w-md py-4 mb-4 flex items-center justify-between bg-white text-orange-600 font-medium shadow-lg rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <span className="text-xl px-4">{link.icon}</span>
            <span>{link.name}</span>
            <span className="text-lg px-4">→</span>
          </motion.a>
        ))}
      </main>

      {/* Footer Section */}
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          © {new Date().getFullYear()} Penny Appeal. All Rights Reserved.
        </motion.p>
      </footer>
    </div>
  );
}
