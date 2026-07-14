"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingSocials() {
  const [isMailOpen, setIsMailOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const emails = [
    "shivi@tinkrlearning.com",
    "sameer@tinkrlearning.com",
    "saumye@tinkrlearning.com"
  ];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMailOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col gap-3" ref={menuRef}>
      <AnimatePresence>
        {isMailOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[100%] right-0 mb-4 w-64 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-border-subtle overflow-hidden"
          >
            <div className="p-4 bg-bg-secondary border-b border-border-subtle">
              <p className="font-heading font-bold text-sm text-text-main">Send an email to:</p>
            </div>
            <div className="flex flex-col p-2">
              {emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-main hover:bg-bg-secondary rounded-xl transition-colors truncate flex items-center gap-3"
                  onClick={() => setIsMailOpen(false)}
                >
                  <Mail className="w-4 h-4 text-tinkr-yellow" />
                  {email}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/917010295833"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group relative z-10"
        title="Chat on WhatsApp"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-0.5 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>


      <button
        onClick={() => setIsMailOpen(!isMailOpen)}
        className="w-12 h-12 md:w-14 md:h-14 bg-tinkr-yellow rounded-full flex items-center justify-center text-text-main shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group relative z-10"
        title="Email Us"
      >
        {isMailOpen ? (
          <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-0.5 transition-transform" />
        )}
      </button>
    </div>
  );
}
