
export default function DayBackground() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-[#e78a43] to-[#FFED9B] overflow-hidden">
      {/* Cloud Animations */}
      {[...Array(5)].map((_, i) => {
        const randomWidth = Math.random() * 170 + 50; // Random width
        const randomTop = Math.random() * 80 + 40; // Random vertical position
        const randomLeft = Math.random() * 100; // Random horizontal position
        const animationDuration = Math.random() * 10 + 20; // Random animation duration between 20-30s

        return (
          <img
            key={i}
            src="./cloudZ.png" // Assuming you have cloud images in the 'public' folder
            alt="cloud"
            className="absolute cloud-animation"
            style={{
              width: `${randomWidth}px`,
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              animationDuration: `${animationDuration}s`,
            }}
          />
        );
      })}
    </div>
  );
}
