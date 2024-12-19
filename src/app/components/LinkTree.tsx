// components/LinkTree.tsx
"use clinet";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "../globals.css";

export default function LinkTree() {
   const [links] = useState([
      { name: "Automate your Friday Sadaqah", url: "/donate", icon: "🕌" },
      { name: "Daily Sadaqah for 1 Year", url: "/donate", icon: "❤" },
      { name: "10 Days of Sha'ban", url: "/donate", icon: "☀️" },
      { name: "Sign Up for 10 Nights of Ramadan", url: "/pennyappeal.ca/auto-donation", icon: "🌙" },
    ]);

  return (
    <div className="absolute top-1/3 w-full flex flex-col items-center z-10 calls pt-14 pb-0">
      {/* Header Section */}
      <header className="text-center mb-8">
        <motion.img
          src="./pac-logo-notag-white.svg"
          alt="Penny Appeal"
          className="w-96 mx-auto mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <h1 className="text-2xl font-bold text-white">
          Automate Your Giving
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
        {/* <div className="w-full max-w-md h-36 py-4 mb-4 flex items-center justify-between bg-white text-orange-600 font-medium shadow-lg rounded-lg hover:shadow-xl bgimage" >
        <h1>d</h1>
        </div> */}
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
