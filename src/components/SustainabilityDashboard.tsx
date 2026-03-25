import { motion } from 'motion/react';

// Mock JSON API Data
const sustainabilityData = [
  { id: 1, target: 'Recyclable Packaging', progress: 100, year: 2026, description: 'Globally by 2026' },
  { id: 2, target: 'Water Replenishment', progress: 100, year: 2026, description: 'Returning water to nature' },
  { id: 3, target: 'Reduced Carbon', progress: 85, year: 2026, description: 'Towards net zero emissions' },
];

function ProgressRing({ progress, label, description }: { progress: number; label: string; description: string }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-xl shadow-carbonated-black/5 hover:-translate-y-2 transition-transform duration-300">
      <div className="relative w-48 h-48 flex items-center justify-center mb-6" aria-live="polite" aria-label={`${label} is at ${progress}%`}>
        <svg className="transform -rotate-90 w-full h-full drop-shadow-sm">
          {/* Background Track */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-carbonated-black/5"
          />
          {/* Animated Progress */}
          <motion.circle
            cx="96"
            cy="96"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            className="text-coke-red"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-4xl font-black text-carbonated-black tracking-tighter">{progress}%</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-carbonated-black text-center mb-2">{label}</h3>
      <p className="text-sm text-carbonated-black/60 text-center">{description}</p>
    </div>
  );
}

export default function SustainabilityDashboard() {
  return (
    <section id="sustainability" className="py-32 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-carbonated-black mb-6 tracking-tight">2026 Sustainability Targets</h2>
          <p className="text-xl text-carbonated-black/60 max-w-2xl mx-auto">
            We are committed to making a difference. Track our progress towards a more sustainable future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {sustainabilityData.map((item) => (
            <ProgressRing 
              key={item.id} 
              progress={item.progress} 
              label={item.target} 
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
