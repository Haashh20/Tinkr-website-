"use client";

import { motion } from "framer-motion";

export default function ClientMarquee() {
  const clients = [
    "Google", "Microsoft", "Oracle", "Deloitte", "Amazon", "Schneider Electric", "Salesforce", "Accenture", "IBM", "Intel"
  ];

  // Duplicate the array to create a seamless loop
  const marqueeItems = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 bg-tinkr-yellow overflow-hidden border-b border-border-subtle text-black">
      <div className="relative w-full flex items-center h-20 overflow-hidden">
        
        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-32 pr-16 md:pr-32"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed here
          }}
        >
          {marqueeItems.map((client, idx) => (
            <div 
              key={idx} 
              className="inline-flex items-center text-3xl font-heading font-extrabold text-black opacity-20 hover:opacity-100 hover:text-tinkr-yellow transition-all duration-300 cursor-default"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
