import { useState } from 'react';
import { motion } from 'motion/react';

export default function CokeCanVisualizer() {
  const [name, setName] = useState('Alex');

  return (
    <section id="share" className="py-32 bg-ice-white text-carbonated-black flex flex-col items-center overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 text-coke-red tracking-tight">Share a Coke</h2>
        <p className="text-lg text-carbonated-black/70">Personalize your digital can and share the magic.</p>
      </div>
      
      <div className="mb-16 w-full max-w-md px-4 relative z-20">
        <label htmlFor="name-input" className="sr-only">Who are you sharing with?</label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 text-lg border-2 border-carbonated-black/20 rounded-xl focus:border-coke-red focus:ring-4 focus:ring-coke-red/20 focus:outline-none transition-all shadow-sm"
          placeholder="Enter a name..."
          maxLength={12}
          aria-live="polite"
        />
      </div>

      {/* 3D Can Container */}
      <div className="relative w-72 h-[450px] perspective-[1200px]">
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: [0, 15, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl overflow-visible">
            <defs>
              <linearGradient id="can-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a30005" />
                <stop offset="15%" stopColor="#F40009" />
                <stop offset="50%" stopColor="#ff1a24" />
                <stop offset="85%" stopColor="#F40009" />
                <stop offset="100%" stopColor="#7a0004" />
              </linearGradient>
              <linearGradient id="metal-top" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#999" />
                <stop offset="30%" stopColor="#eee" />
                <stop offset="70%" stopColor="#ccc" />
                <stop offset="100%" stopColor="#666" />
              </linearGradient>
              
              {/* SVG Filter for 3D Wrap-around perspective */}
              <path id="text-curve" d="M 20,220 Q 100,260 180,220" fill="transparent" />
            </defs>

            {/* Can Body */}
            <rect x="20" y="40" width="160" height="320" rx="4" fill="url(#can-gradient)" />
            
            {/* Can Top & Bottom Rims */}
            <ellipse cx="100" cy="40" rx="80" ry="18" fill="url(#metal-top)" />
            <ellipse cx="100" cy="360" rx="80" ry="18" fill="url(#metal-top)" />
            
            {/* Dynamic Text with SVG Path wrapping */}
            <text fill="white" fontSize="36" fontWeight="900" fontFamily="sans-serif" className="drop-shadow-md uppercase tracking-wider">
              <textPath href="#text-curve" startOffset="50%" textAnchor="middle">
                {name || 'Share'}
              </textPath>
            </text>

            {/* Classic Logo Placeholder */}
            <text
              x="100"
              y="140"
              textAnchor="middle"
              fill="white"
              fontSize="32"
              fontFamily="serif"
              fontStyle="italic"
              className="drop-shadow-sm"
              transform="scale(1, 1.2)"
            >
              Coca-Cola
            </text>
            
            {/* Dynamic Ribbon */}
            <path 
              d="M 20,280 Q 80,270 100,300 T 180,290" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="opacity-80"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
