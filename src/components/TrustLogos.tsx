"use client";

import { motion } from "framer-motion";

export default function TrustLogos() {
  const coreLogos = [
    { name: "Google" },
    { name: "Microsoft" },
    { name: "Oracle" },
    { name: "Salesforce" },
    { name: "Amazon" },
    { name: "Schneider Electric" },
    { name: "Hexagon" },
    { name: "Genpact" },
    { name: "McKinsey" },
    { name: "Deloitte" },
    { name: "Kantar" },
    { name: "JPMorgan" },
    { name: "Dr. Reddy's" },
    { name: "Providence" },
    { name: "Glenmark" },
    { name: "Medtronic" },
    { name: "Nestlé" },
    { name: "Reckitt" },
    { name: "Haier" },
    { name: "Wells Fargo" },
    { name: "American Express" },
  ];
  
  const logos = [...coreLogos, ...coreLogos];

  return (
    <section className="py-12 bg-tinkr-yellow border-b border-border-subtle overflow-hidden text-black">
      <div className="container mx-auto px-6 md:px-12 mb-8">
        <p className="text-center text-sm font-semibold text-black/80 uppercase tracking-widest">
          Trusted by 100+ Organizations Across Industries
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-tinkr-yellow to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-tinkr-yellow to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex items-center gap-16 md:gap-24 opacity-60 grayscale min-w-max pr-16"
        >
          {logos.map((logo, idx) => (
            <div key={idx} className="text-2xl md:text-3xl font-bold font-heading inline-block">
              {logo.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
