"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Counter = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeOut));
      
      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [end, duration, inView]);

  return (
    <div ref={nodeRef} className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-2">
      {count}{suffix}
    </div>
  );
};

export default function Stats() {
  const stats = [
    { 
      value: 100, 
      suffix: "+", 
      label: "Corporate Clients", 
      description: "Across Technology, Consulting, Healthcare, Manufacturing, BFSI and Global Enterprises." 
    },
    { 
      value: 10, 
      suffix: "+", 
      label: "Years of Creating Experiences", 
      description: "Helping organizations reimagine learning through creativity and collaboration." 
    },
    { 
      value: 30, 
      suffix: "+", 
      label: "Professional Facilitators", 
      description: "Experienced experts delivering impactful learning experiences across India." 
    },
    { 
      value: 1000, 
      suffix: "+", 
      label: "Participants", 
      description: "Programs designed for intimate leadership teams as well as enterprise-wide engagement initiatives." 
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden text-white">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:divide-x lg:divide-border-subtle">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-start px-4"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <div className="text-lg md:text-xl text-white font-bold mb-3">
                {stat.label}
              </div>
              <p className="text-sm text-white/80 font-light text-balance">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
