"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import EventSlider from "./EventSlider";

export default function Footer() {
  return (
    <>
      <EventSlider />
      <footer className="bg-white border-t border-border-subtle pt-20 pb-8 text-text-main font-sans">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16 mb-16">
            
            {/* COLUMN 1: Brand & Social */}
            <div className="flex flex-col lg:col-span-1 pr-0 md:pr-4">
              <Link href="/" className="mb-6 inline-block">
                <img src="/logo.png" alt="Tinkr Logo" className="h-12 md:h-14 w-auto object-contain" />
              </Link>
              
              <p className="font-semibold text-base mb-2">Learning Reimagined.</p>
              <p className="text-text-secondary font-light text-sm leading-relaxed mb-8 text-balance">
                Custom-designed experiential learning programs that inspire creativity, strengthen collaboration, and transform workplace learning.
              </p>

              <div className="flex items-center gap-3 mt-auto">
                {[
                  { 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, 
                    name: "Instagram", 
                    href: "https://www.instagram.com/tinkr_learning?igsh=MTZ5bzRzczEzbnlkNg%3D%3D&utm_source=qr" 
                  },
                  { 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, 
                    name: "LinkedIn", 
                    href: "https://www.linkedin.com/company/tinkr-learning/" 
                  },
                  { 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>, 
                    name: "WhatsApp", 
                    href: "https://wa.me/917010295833" 
                  },
                  { 
                    icon: <Mail className="w-4 h-4" />, 
                    name: "Email", 
                    href: "mailto:sameer@tinkrlearning.com" 
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary bg-white hover:bg-tinkr-yellow hover:text-text-main hover:border-tinkr-yellow hover:scale-110 hover:shadow-md transition-all duration-300 group"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 2: Company */}
            <div className="flex flex-col">
              <h4 className="font-heading font-bold mb-6 text-lg tracking-wide">Company</h4>
              <ul className="flex flex-col gap-4">
                {["About Tinkr", "Experiences", "Industries", "Contact"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={item === "Experiences" ? "/events" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-text-secondary font-light text-sm hover:text-text-main transition-colors relative group inline-block"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-tinkr-yellow transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
                <li className="mt-2">
                  <a 
                    href="https://forms.gle/6X3zGnMzgxPAUMxCA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tinkr-gold font-semibold text-sm hover:text-tinkr-yellow transition-colors relative group inline-block"
                  >
                    Book a Discovery Call
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-tinkr-yellow transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: Experiences */}
            <div className="flex flex-col">
              <h4 className="font-heading font-bold mb-6 text-lg tracking-wide">Experiences</h4>
              
              <ul className="flex flex-col gap-4 mb-6">
                {["Creative Series", "LogiQuest (Tech)", "Creativate (CSR)", "Custom Workshops"].map((item) => (
                  <li key={item}>
                    <Link href="/events" className="text-text-secondary font-light text-sm hover:text-text-main transition-colors relative group inline-block">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-tinkr-yellow transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link href="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-text-main hover:text-tinkr-gold transition-colors group">
                View All Experiences
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* COLUMN 4: Contact & Social */}
            <div className="flex flex-col">
              <h4 className="font-heading font-bold mb-6 text-lg tracking-wide">Get In Touch</h4>
              
              <ul className="space-y-5 text-sm font-light text-text-secondary">
                <li>
                  <a href="mailto:sameer@tinkrlearning.com" className="flex items-start gap-3 hover:text-tinkr-gold transition-colors group">
                    <Mail className="w-5 h-5 text-tinkr-yellow shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="break-all">sameer@tinkrlearning.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+917010295833" className="flex items-start gap-3 hover:text-tinkr-gold transition-colors group">
                    <Phone className="w-5 h-5 text-tinkr-yellow shrink-0 group-hover:scale-110 transition-transform" />
                    <span>+91 70102 95833</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-tinkr-yellow shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Mantri Euphoria, Manchirevula,<br/>Hyderabad – 500075, India</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-tinkr-yellow shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Mon – Fri, 9:00 AM – 6:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-text-secondary">
            <p>© {new Date().getFullYear()} Tinkr Learning. All Rights Reserved.</p>
            <p className="font-semibold text-text-main hidden lg:block">Learning Reimagined.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-text-main transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-text-main transition-colors">Terms & Conditions</Link>
              <Link href="/cookies" className="hover:text-text-main transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
