// pages/index.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DayBackground from "./components/IslamicBackground";
import LinkTree from "./components/LinkTree";

export default function Home() {
  return (
    <div className="relative h-screen">

      <LinkTree />
      <DayBackground/>
      <div className="absolute bottom-10 w-full text-center text-white z-10">
        <motion.p
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {/* Empower your donations with ease. */}
        </motion.p>
      </div>
    </div>
  );
}
