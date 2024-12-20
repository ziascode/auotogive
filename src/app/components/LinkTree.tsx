"use client";
import React, { useState } from "react";
import "../globals.css";

export default function LinkTree() {
  const [links] = useState([
    { name: "Automate your Friday Sadaqah", url: "/donate", icon: "🕌" },
    { name: "Daily Sadaqah for 2025", url: "/donate", icon: "❤" },
    { name: "10 Days of Sha'ban", url: "/donate", icon: "☀️" },
    { name: "Sign Up for 10 Nights of Ramadan", url: "/pennyappeal.ca/auto-donation", icon: "🌙" },
  ]);

  return (
    <div className="absolute top-1/3 w-full flex flex-col items-center z-10 calls pt-14 pb-0">
      {/* Header Section */}
      <header className="text-center mb-8">
        <img
          src="./pac-logo-notag-white.svg"
          alt="Penny Appeal"
          className="w-80 mx-auto mb-4 fade-in-down"
          
        />
        <h1 className="text-2xl font-bold text-white fade-in-text">
          Automate Your Giving
        </h1>
        <p className="text-gray-600 fade-in-text">Make an impact with every action.</p>
      </header>

      {/* Links Section */}
      <main className="flex flex-col items-center w-full px-4">
        {links.map((link, index) => (
          <a
            href={link.url}
            key={index}
            className="w-full max-w-md py-4 mb-4 flex items-center justify-between bg-white text-orange-600 font-medium shadow-lg rounded-lg hover:shadow-xl scale-on-hover transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-xl px-4">{link.icon}</span>
            <span>{link.name}</span>
            <span className="text-lg px-4">→</span>
          </a>
        ))}
      </main>

      {/* Footer Section */}
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p className="fade-in-text" style={{ animationDelay: "1.5s" }}>
          © {new Date().getFullYear()} Penny Appeal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
