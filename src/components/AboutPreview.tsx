"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-tinkr-yellow relative text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/50 relative">
              {/* Placeholder for the large image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-tinkr-yellow/20 to-transparent mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Tinkr Team Workshop" 
                className="w-full h-full object-cover filter contrast-105"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-border-subtle max-w-xs hidden md:block">
              <p className="font-heading font-bold text-xl text-black mb-2">"People learn best through experiences."</p>
              <p className="text-sm text-black/80">— The Founders</p>
            </div>
          </motion.div>

          {/* Text/Story Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-tinkr-yellow"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-black/80">About Tinkr</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black mb-8 leading-tight">
              Learning Doesn't Have To Be Serious To Be Impactful.
            </h2>
            
            <div className="space-y-6 text-lg text-black/80 font-light text-balance">
              <p>
                Tinkr Learning was founded on one simple belief — people learn best through experiences. Instead of traditional classroom sessions, we design immersive workshops that encourage teams to think creatively, solve problems together, and build meaningful workplace relationships.
              </p>
              <p>
                Our experiences combine creativity, storytelling, design thinking, engineering challenges, technology, and CSR initiatives to help organizations strengthen communication, collaboration, innovation, and employee wellbeing while creating memories that last far beyond the workshop.
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 pb-2 border-b-2 border-text-main text-black font-semibold hover:text-tinkr-yellow hover:border-tinkr-yellow transition-colors group"
              >
                Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
