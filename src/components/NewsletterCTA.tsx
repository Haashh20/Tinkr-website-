"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-t border-border-subtle">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tinkr-yellow/10 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-border-subtle overflow-hidden relative">
          
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tinkr-yellow/20 rounded-full filter blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[2px] bg-tinkr-yellow"></span>
                <span className="text-sm font-bold uppercase tracking-widest text-text-secondary">Newsletter</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6 leading-tight">
                Insights for the modern workplace.
              </h2>
              <p className="text-lg text-text-secondary font-light mb-8 max-w-lg leading-relaxed">
                Join 5,000+ HR leaders and executives who receive our latest strategies on team culture, experiential learning, and engagement every month.
              </p>
            </div>

            <div className="bg-bg-primary rounded-3xl p-8 md:p-10 border border-border-subtle">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-text-secondary" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="w-full pl-12 pr-4 py-4 bg-white border border-border-subtle rounded-xl text-text-main placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-tinkr-yellow focus:border-transparent transition-shadow"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-text-main text-white font-bold rounded-xl hover:bg-tinkr-yellow hover:text-text-main transition-colors duration-300 group shadow-md"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-text-secondary text-center font-light mt-2">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
