// components/DayBackground.tsx
import { motion } from "framer-motion";
import Image from 'next/image';

export default function DayBackground() {
  return (
    <div className="relative h-screen bg-gradient-to-b high from-[#e78a43] to-[#FFED9B] overflow-hidden">
      {/* Actual Cloud Images Animation */}
      {[...Array(5)].map((_, i) => (
        <motion.img
          key={i}
          src="./cloudZ.png"  // Assuming you have cloud images in the 'public' folder
          alt="cloud"
          className="absolute"
          style={{
            width: `${Math.random() *170 + 50}px`, // Adjust cloud size randomly
            top: `${Math.random() * 80 + 40}%`, // Random vertical position
            left: `${Math.random() * 100}%`, // Random horizontal position
          }}
          animate={{
            x: [0, 180, -180],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
            delay:Math.random(),
          }}
        />
      ))}

      {/* <Image
        src="/mosk1.png" // Path to the image file (public folder or external URL)
        alt="Example Image"
        width={390} // Image width in pixels
        height={180} // Image height in pixels
        style={{
            transform: "translateX(30%)",
            marginLeft: '0px', 
            marginTop: '95vh'
          }}
      /> */}

      

    </div>
  );
}
