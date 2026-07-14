"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const categories = ["All Insights", "Leadership & Strategy", "Team Culture", "Experiential Learning", "Case Studies"];

const articles = [
  {
    id: 1,
    title: "Why the Traditional Offsite is Dead",
    excerpt: "Trust falls and endless slide decks aren't working anymore. Here is how modern HR leaders are architecting experiences that actually drive cultural change.",
    category: "Leadership & Strategy",
    readTime: "6 min read",
    author: "Sameer Nagi",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    date: "Mar 15, 2024",
    featured: true
  },
  {
    id: 2,
    title: "The Psychology of Play in Corporate Environments",
    excerpt: "Discover why introducing constraints and creative tasks forces teams out of their silos and into genuine collaboration.",
    category: "Experiential Learning",
    readTime: "5 min read",
    author: "Harsha Nagi",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    date: "Feb 28, 2024",
    featured: false
  },
  {
    id: 3,
    title: "Building CSR into Your Quarterly Objectives",
    excerpt: "How aligning team-building activities with corporate social responsibility (CSR) creates a deeper sense of purpose among employees.",
    category: "Team Culture",
    readTime: "4 min read",
    author: "Tinkr Editorial",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
    date: "Feb 10, 2024",
    featured: false
  },
  {
    id: 4,
    title: "Case Study: Revitalizing a Remote Tech Team",
    excerpt: "See how a Fortune 500 tech company used the LogiQuest robot-building challenge to bridge the gap between their distributed engineering pods.",
    category: "Case Studies",
    readTime: "8 min read",
    author: "Sameer Nagi",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    date: "Jan 22, 2024",
    featured: false
  },
  {
    id: 5,
    title: "Navigating Change Management Through Simulation",
    excerpt: "When restructuring hits, morale often drops. Learn how experiential simulations help teams adapt to new leadership dynamics seamlessly.",
    category: "Leadership & Strategy",
    readTime: "7 min read",
    author: "Harsha Nagi",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    date: "Jan 05, 2024",
    featured: false
  },
  {
    id: 6,
    title: "The Introvert's Guide to Corporate Retreats",
    excerpt: "Designing inclusive activities that allow both introverts and extroverts to shine without forced socialization.",
    category: "Team Culture",
    readTime: "5 min read",
    author: "Tinkr Editorial",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    date: "Dec 18, 2023",
    featured: false
  }
];

export default function BlogPreview() {
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const filteredArticles = activeCategory === "All Insights" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const featuredArticle = filteredArticles.find(a => a.featured) || filteredArticles[0];
  const gridArticles = filteredArticles.filter(a => a.id !== featuredArticle?.id);

  return (
    <section className="py-24 relative bg-tinkr-yellow text-black">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-text-main text-white shadow-md"
                  : "bg-bg-secondary opacity-80 hover:bg-border-subtle hover:"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-20 group cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-bg-secondary rounded-3xl overflow-hidden border border-border-subtle hover:border-tinkr-yellow/50 transition-colors duration-500">
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 bg-white rounded-full text-xs font-bold text-tinkr-gold uppercase tracking-wider shadow-sm">
                        {featuredArticle.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm opacity-80 font-medium">
                        <Clock className="w-4 h-4" /> {featuredArticle.readTime}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight group-hover:text-tinkr-gold transition-colors">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-lg opacity-80 font-light mb-8 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-border-subtle flex items-center justify-center font-bold text-sm">
                          {featuredArticle.author.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{featuredArticle.author}</span>
                          <span className="text-xs opacity-80">{featuredArticle.date}</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-text-main group-hover:text-white transition-colors duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Grid Articles */}
            {gridArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {gridArticles.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group cursor-pointer flex flex-col h-full"
                  >
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative bg-bg-secondary border border-border-subtle">
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-tinkr-gold uppercase tracking-wider shadow-sm">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4 text-sm opacity-80 font-medium">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-border-subtle"></span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {article.readTime}</span>
                      </div>
                      <h4 className="text-2xl font-heading font-bold mb-4 leading-snug group-hover:text-tinkr-gold transition-colors">
                        {article.title}
                      </h4>
                      <p className="opacity-80 font-light line-clamp-2 mb-6 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-border-subtle">
                        <span className="text-sm font-semibold">{article.author}</span>
                        <ArrowRight className="w-5 h-5 opacity-80 group-hover:text-tinkr-gold group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {gridArticles.length === 0 && !featuredArticle && (
              <div className="text-center py-24 opacity-80 font-light text-lg">
                No insights found for this category yet.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
