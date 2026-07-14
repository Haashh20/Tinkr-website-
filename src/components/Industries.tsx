"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, HeartPulse, Building2, Briefcase, Factory, ShoppingBag, Rocket, Zap, GraduationCap, Package } from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Technology", icon: <MonitorSmartphone className="w-6 h-6" /> },
    { name: "Consulting", icon: <Briefcase className="w-6 h-6" /> },
    { name: "BFSI", icon: <Building2 className="w-6 h-6" /> },
    { name: "Healthcare", icon: <HeartPulse className="w-6 h-6" /> },
    { name: "FMCG", icon: <Package className="w-6 h-6" /> },
    { name: "Manufacturing", icon: <Factory className="w-6 h-6" /> },
    { name: "Retail", icon: <ShoppingBag className="w-6 h-6" /> },
    { name: "Energy", icon: <Zap className="w-6 h-6" /> },
    { name: "Education", icon: <GraduationCap className="w-6 h-6" /> },
    { name: "Startups", icon: <Rocket className="w-6 h-6" /> },
  ];

  return (
    <section id="industries" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1a1a1a]/5 rounded-full filter blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-tinkr-yellow"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-white/70">Industries</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight">
              Designed For Organizations Across Every Industry
            </h2>
            <p className="text-lg text-white/60 font-light mb-8">
              From Fortune 500 companies to fast-growing startups, Tinkr designs customized learning experiences that align with your business goals, culture and people.
            </p>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((ind, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="flex flex-col items-center justify-center p-6 bg-[#1a1a1a]/5 border border-white/10 rounded-2xl hover:bg-[#1a1a1a]/10 hover:border-tinkr-yellow/50 transition-all duration-300 group cursor-default"
                >
                  <div className="text-white/50 group-hover:text-tinkr-yellow mb-4 transition-colors">
                    {ind.icon}
                  </div>
                  <span className="font-semibold text-sm md:text-base tracking-wide">
                    {ind.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
