import { motion, useScroll, useTransform } from 'motion/react';

export default function Header() {
  const { scrollY } = useScroll();
  
  // Glassmorphism effects
  const headerBackground = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.85)']);
  const headerBackdrop = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);
  
  // Reveal Spencerian logo on scroll
  const logoOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const logoY = useTransform(scrollY, [0, 100], [-20, 0]);

  return (
    <motion.header
      style={{ background: headerBackground, backdropFilter: headerBackdrop }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-transparent transition-colors"
    >
      <motion.div 
        style={{ opacity: logoOpacity, y: logoY }} 
        className="text-coke-red font-serif italic text-3xl font-bold tracking-tight"
      >
        Coca-Cola
      </motion.div>
      <nav>
        <ul className="flex space-x-8 text-sm font-semibold text-carbonated-black uppercase tracking-widest">
          <li><a href="#home" className="hover:text-coke-red transition-colors">Home</a></li>
          <li><a href="#share" className="hover:text-coke-red transition-colors">Share a Coke</a></li>
          <li><a href="#sustainability" className="hover:text-coke-red transition-colors">Impact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}
