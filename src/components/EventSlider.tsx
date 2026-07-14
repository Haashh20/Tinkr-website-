"use client";

import { motion } from "framer-motion";

const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1475721025870-2434421d742e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
];

export default function EventSlider() {
  // Duplicating the array so we can scroll from 0 to -50% smoothly.
  // With 8 items, duplicating once gives 16 items. -50% moves exactly 8 items over.
  const duplicatedImages = [...PLACEHOLDER_IMAGES, ...PLACEHOLDER_IMAGES];

  return (
    <div className="w-full bg-tinkr-yellow text-text-main py-6 overflow-hidden">
      <div className="mb-4 px-6 md:px-12 container mx-auto">
        <h3 className="text-xl md:text-2xl font-heading font-extrabold mb-1 text-center">
          Our Experiences In Action
        </h3>
        <p className="text-sm font-medium text-center opacity-80 max-w-2xl mx-auto">
          Take a glimpse at the energy and creativity from our recent events.
        </p>
      </div>
      
      {/* Infinite Slider */}
      <div className="relative w-full overflow-hidden flex">
        {/* Gradients for smooth fading on edges, using yellow to match bg */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-tinkr-yellow to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-tinkr-yellow to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-3 md:gap-4 px-2 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40 // Adjust speed here
          }}
        >
          {duplicatedImages.map((src, idx) => (
            <div 
              key={idx} 
              className="w-[140px] h-[90px] md:w-[200px] md:h-[130px] rounded-xl overflow-hidden relative group shrink-0 shadow-sm border border-black/5"
            >
              <img 
                src={src} 
                alt={`Tinkr Event Glimpse ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
