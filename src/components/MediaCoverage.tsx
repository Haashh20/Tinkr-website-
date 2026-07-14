"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function MediaCoverage() {
  const articles = [
    {
      source: "The Hindu",
      title: "How Tinkr Learning is Reshaping Corporate Retreats",
      date: "October 12, 2023",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
    },
    {
      source: "Times of India",
      title: "The Rise of Experiential Learning in Top Tier MNCs",
      date: "August 05, 2023",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
    },
    {
      source: "New Indian Express",
      title: "Founders Sameer & Harsha Nagi on the Future of Work",
      date: "May 22, 2023",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section className="py-24 bg-bg-secondary relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-4">
              In The Media.
            </h2>
            <p className="text-lg text-text-secondary font-light max-w-xl">
              Discover what top publications are saying about our innovative approach to employee engagement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group block"
            >
              <Link href="#" className="block h-full bg-white rounded-3xl overflow-hidden border border-border-subtle hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-text-main" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-4 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    <span className="text-tinkr-gold">{article.source}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text-main leading-snug group-hover:text-tinkr-gold transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
