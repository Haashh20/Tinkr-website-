"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "This has been the BEST team-building activity I have experienced in my 20 years across the US and India.",
      name: "Madhuri",
      title: "Senior Director",
      company: "Global Technology Company",
    },
    {
      quote: "I instantly booked another session for my entire team after experiencing Anybody Can Paint.",
      name: "Medha",
      title: "AVP",
      company: "Fortune 500 Organization",
    },
    {
      quote: "This is one of the most creative and effective team-building experiences I have seen in a long time.",
      name: "Faisal",
      title: "CEO",
      company: "Financial Services Organization",
    },
  ];

  return (
    <section className="py-24 bg-black relative text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
            Trusted by HR Leaders.
          </h2>
          <p className="text-lg text-white/80 font-light">
            Don't just take our word for it. Hear from the visionaries who are redefining employee engagement with Tinkr.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-[#1a1a1a] p-10 rounded-3xl border border-border-subtle shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative flex flex-col h-full"
            >
              <div className="absolute -top-5 left-10 w-10 h-10 bg-tinkr-yellow rounded-full flex items-center justify-center text-white shadow-md">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              
              <div className="mt-4 flex-grow">
                <p className="text-lg text-white font-light leading-relaxed mb-8 text-balance">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t border-border-subtle pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#222] border border-border-subtle flex items-center justify-center font-heading font-bold text-white/80">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/80">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
