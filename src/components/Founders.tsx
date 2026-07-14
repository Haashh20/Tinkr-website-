"use client";

import { motion } from "framer-motion";

export default function Founders() {
  const founders = [
    {
      name: "Sameer Nagi",
      role: "Co-Founder & CEO",
      bio: "Former Microsoft executive turned experiential learning pioneer. Sameer brings two decades of enterprise leadership experience to designing programs that truly resonate with corporate teams.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      linkedin: "#",
    },
    {
      name: "Harsha Nagi",
      role: "Co-Founder & Chief Learning Officer",
      bio: "An award-winning educator and organizational psychologist. Harsha's innovative methodologies form the foundation of Tinkr's unique blend of creative and strategic workshops.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      linkedin: "#",
    }
  ];

  return (
    <section className="py-24 relative bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-tinkr-yellow"></span>
            <span className="text-sm font-bold uppercase tracking-widest opacity-80">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">
            Meet the Founders.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
              className="group flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl bg-bg-secondary text-text-main border border-border-subtle hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-tinkr-yellow/50 transition-all duration-500"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full md:rounded-2xl overflow-hidden bg-bg-secondary relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-heading font-bold mb-1">
                  {founder.name}
                </h3>
                <p className="text-sm font-semibold text-tinkr-gold mb-4 uppercase tracking-wider">
                  {founder.role}
                </p>
                <p className="opacity-80 font-light leading-relaxed mb-6">
                  {founder.bio}
                </p>
                
                <a 
                  href={founder.linkedin}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle opacity-80 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
