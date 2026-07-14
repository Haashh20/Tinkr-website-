"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Users, Target } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Creative", "CSR", "Technology", "Wellbeing", "Leadership"];

const experiences = [
  { id: 1, title: "Anybody Can Paint", category: "Creative", duration: "2-3 Hours", participants: "15-500+", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80", outcomes: ["Collaboration", "Creative Thinking"], excerpt: "Bring a shared vision to life by creating one stunning collaborative mural while strengthening communication, diversity and teamwork." },
  { id: 2, title: "Paintastic", category: "Creative", duration: "2-3 Hours", participants: "15-500+", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80", outcomes: ["Trust", "Collective Purpose"], excerpt: "Transform individual creativity into one unified masterpiece that represents trust, collaboration and collective purpose." },
  { id: 3, title: "Plantivate", category: "Wellbeing", duration: "1-2 Hours", participants: "10-200+", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80", outcomes: ["Mindfulness", "Sustainability"], excerpt: "Design beautiful tabletop terrariums while discovering mindfulness, creativity and sustainable thinking." },
  { id: 4, title: "Anybody Can Write", category: "Creative", duration: "2-3 Hours", participants: "10-100+", image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&w=800&q=80", outcomes: ["Storytelling", "Meaningful Conversations"], excerpt: "Explore storytelling through guided experiences that celebrate personal journeys and meaningful conversations." },
  { id: 5, title: "Chain Reaction", category: "Technology", duration: "3-4 Hours", participants: "20-200+", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", outcomes: ["Planning", "Communication"], excerpt: "Build interconnected engineering systems where collaboration, planning and communication determine success." },
  { id: 6, title: "Flow Factory", category: "CSR", duration: "3-4 Hours", participants: "20-300+", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80", outcomes: ["Process Optimization", "Teamwork"], excerpt: "Design assembly lines that create care kits for communities while learning process optimization and teamwork." },
  { id: 7, title: "Drone Build", category: "Technology", duration: "3-4 Hours", participants: "10-100+", image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80", outcomes: ["Complex Engineering", "Problem Solving"], excerpt: "Build, test and launch fully functional drones while solving complex engineering challenges together." },
  { id: 8, title: "Camera-derie", category: "Creative", duration: "4-6 Hours", participants: "15-150+", image: "https://images.unsplash.com/photo-1485002251469-80fb7858c422?auto=format&fit=crop&w=800&q=80", outcomes: ["Storytelling", "Execution"], excerpt: "Create impactful short films that combine storytelling, creativity and collaboration into memorable team experiences." },
];

interface ExperiencesPreviewProps {
  limit?: number;
  showExploreMore?: boolean;
  theme?: "black" | "yellow";
}

export default function ExperiencesPreview({ limit, showExploreMore = false, theme = "black" }: ExperiencesPreviewProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  let filteredExperiences = experiences.filter(exp => 
    activeCategory === "All" ? true : exp.category === activeCategory
  );

  if (limit) {
    filteredExperiences = filteredExperiences.slice(0, limit);
  }

  return (
    <section id="experiences" className={`py-24 ${theme === "yellow" ? "bg-tinkr-yellow text-black" : "bg-black text-white"}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className={`text-4xl md:text-5xl font-heading font-extrabold mb-6 ${theme === "yellow" ? "text-black" : "text-white"}`}>
              Experiences That Inspire Teams To Think, Build & Create Together.
            </h2>
            <p className={`text-lg font-light ${theme === "yellow" ? "opacity-80 text-black" : "text-white/80"}`}>
              Every Tinkr experience is carefully designed around experiential learning, ensuring participants don't just attend a workshop—they become part of the learning journey.
            </p>
          </div>
          
          {!showExploreMore && (
            <Link
              href="/events"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-border-subtle bg-[#1a1a1a] text-white font-semibold rounded-full hover:bg-tinkr-yellow hover:border-tinkr-yellow transition-all duration-300"
            >
              Explore All Experiences
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Filters */}
        {!showExploreMore && (
          <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                  ? "bg-text-main text-white shadow-md" 
                  : "bg-[#1a1a1a] text-white/80 border border-border-subtle hover:border-text-main hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-border-subtle hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-1.5 bg-[#1a1a1a]/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {exp.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-6 group-hover:text-tinkr-gold transition-colors">
                    {exp.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-6 mb-8 text-sm text-white/80 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-tinkr-yellow" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-tinkr-yellow" />
                      {exp.participants}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border-subtle">
                    <div className="flex gap-2">
                      {exp.outcomes.slice(0,2).map((outcome, i) => (
                        <span key={i} className="text-xs font-semibold px-3 py-1 bg-[#222] text-white/80 rounded-md">
                          {outcome}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/events/${exp.title.toLowerCase().replace(/ /g, '-')}`}
                      className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-text-main group-hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {showExploreMore && (
          <div className="mt-12 text-center flex justify-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-3 bg-text-main text-white font-semibold rounded-full hover:bg-black transition-all shadow-md"
            >
              Explore All Experiences
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
