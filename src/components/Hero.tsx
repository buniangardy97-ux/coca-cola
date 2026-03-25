import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-carbonated-black"
      onMouseMove={handleMouseMove}
    >
      {/* Fluid Liquid Background */}
      <div className="absolute inset-0 opacity-60">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-coke-red via-[#8a0004] to-carbonated-black blur-3xl scale-150" 
        />
      </div>

      {/* Parallax Fizz Particles */}
      {Array.from({ length: 30 }).map((_, i) => {
        const randomX = Math.random() * windowSize.width;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-ice-white rounded-full opacity-40 mix-blend-overlay"
            initial={{ y: windowSize.height + 100, x: randomX }}
            animate={{
              y: -100,
              x: randomX + (mousePosition.x - windowSize.width / 2) * 0.05,
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      })}

      {/* Interactive Contour Bottle SVG */}
      <motion.div 
        className="absolute z-10 w-64 h-[500px] opacity-20 pointer-events-none"
        animate={{
          x: (mousePosition.x - windowSize.width / 2) * -0.02,
          y: (mousePosition.y - windowSize.height / 2) * -0.02,
        }}
      >
        <svg viewBox="0 0 200 600" className="w-full h-full drop-shadow-2xl">
          <path 
            d="M 70,0 C 70,0 130,0 130,0 C 130,50 150,100 160,200 C 170,300 160,400 160,500 C 160,580 130,600 100,600 C 70,600 40,580 40,500 C 40,400 30,300 40,200 C 50,100 70,50 70,0 Z" 
            fill="none" 
            stroke="url(#bottle-glow)" 
            strokeWidth="4"
          />
          <defs>
            <linearGradient id="bottle-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F40009" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-ice-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 drop-shadow-lg"
        >
          Real Magic
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-3xl font-light tracking-wide"
        >
          Refreshing the World, Making a Difference.
        </motion.p>
      </div>
    </section>
  );
}
