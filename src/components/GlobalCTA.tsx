"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

interface GlobalCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function GlobalCTA({
  title = "Ready to Reimagine Learning?",
  description = "Create meaningful employee engagement experiences that your teams will remember long after the workshop ends.",
  buttonText = "Book a Discovery Call",
  buttonLink = "https://forms.gle/6X3zGnMzgxPAUMxCA",
  secondaryButtonText = "Download Brochure",
  secondaryButtonLink = "#",
}: GlobalCTAProps) {
  return (
    <section id="cta" className="py-24 md:py-32 bg-tinkr-yellow relative overflow-hidden text-black">
      {/* Abstract subtle bg shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tinkr-yellow/10 rounded-full filter blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full filter blur-[120px] translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-black mb-8 leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-xl text-black/70 font-light mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {buttonLink.startsWith("http") ? (
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-tinkr-yellow text-[#1F1F1F] font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(244,196,48,0.2)] hover:shadow-[0_0_40px_rgba(244,196,48,0.4)] group"
              >
                {buttonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            ) : (
              <Link
                href={buttonLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-tinkr-yellow text-[#1F1F1F] font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(244,196,48,0.2)] hover:shadow-[0_0_40px_rgba(244,196,48,0.4)] group"
              >
                {buttonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            {secondaryButtonText && (
              <a
                href={secondaryButtonLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent text-black font-semibold text-lg rounded-full border-2 border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                {secondaryButtonText}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
