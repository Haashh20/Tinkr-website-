"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black text-white">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tinkr-yellow/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-tinkr-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-black/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-border-subtle shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-tinkr-yellow"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">LEARNING REIMAGINED</span>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-8 leading-tight tracking-tight">
              Custom Designed Learning Experiences That Push <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tinkr-yellow to-tinkr-gold">
                Creative Boundaries.
              </span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              At Tinkr Learning, we transform workplace learning into immersive experiences that inspire collaboration, unlock creativity, and strengthen teams. Every workshop is thoughtfully designed to generate ideas through meaningful challenges while guaranteeing an unforgettable experience.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://forms.gle/6X3zGnMzgxPAUMxCA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-text-main text-white rounded-full hover:bg-black transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/events"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-[#1a1a1a] text-white border border-border-subtle rounded-full hover:bg-[#222] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Experiences
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Optional Cinematic Image/Video Overlay at bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-primary to-transparent z-10"
      />
    </section>
  );
}
