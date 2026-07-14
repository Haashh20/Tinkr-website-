"use client";

import { motion } from "framer-motion";
import { Lightbulb, Heart, Zap, Leaf, Award, Compass } from "lucide-react";

export default function WhyChooseTinkr() {
  const reasons = [
    {
      title: "Experiential Learning",
      description: "Learning by doing instead of listening.",
      icon: <Zap className="w-8 h-8 text-tinkr-yellow" />,
    },
    {
      title: "Creative Thinking",
      description: "Experiences that challenge conventional thinking and unlock innovation.",
      icon: <Lightbulb className="w-8 h-8 text-tinkr-yellow" />,
    },
    {
      title: "Collaboration",
      description: "Strengthen trust, communication and teamwork through immersive activities.",
      icon: <Compass className="w-8 h-8 text-tinkr-yellow" />,
    },
    {
      title: "Technology Experiences",
      description: "Engineering and design challenges that encourage problem-solving.",
      icon: <Award className="w-8 h-8 text-tinkr-yellow" />,
    },
    {
      title: "CSR Experiences",
      description: "Create meaningful social impact while building stronger teams.",
      icon: <Heart className="w-8 h-8 text-tinkr-yellow" />,
    },
    {
      title: "Employee Wellbeing",
      description: "Creative workshops that promote mindfulness, appreciation and workplace connection.",
      icon: <Leaf className="w-8 h-8 text-tinkr-yellow" />,
    }
  ];

  return (
    <section className="py-24 bg-tinkr-yellow relative text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black mb-6">
            Why Organizations Choose Tinkr
          </h2>
          <p className="text-lg text-black/80 font-light">
            Every experience is intentionally designed to create measurable business impact while making learning enjoyable and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl bg-white/50 border border-border-subtle hover:border-tinkr-yellow hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-border-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-black mb-4 group-hover:text-tinkr-gold transition-colors">
                {reason.title}
              </h3>
              <p className="text-black/80 leading-relaxed font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
