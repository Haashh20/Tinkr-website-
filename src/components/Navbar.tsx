"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Tinkr Logo" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-tinkr-yellow ${scrolled ? 'text-text-main' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://forms.gle/6X3zGnMzgxPAUMxCA"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-tinkr-yellow text-text-main rounded-full hover:bg-text-main hover:text-white transition-all duration-300 shadow-[0_4px_14px_0_rgba(244,196,48,0.39)] hover:shadow-[0_6px_20px_rgba(31,31,31,0.23)]"
          >
            Book a Discovery Call
          </a>
          <button
            className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-text-main' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-border-subtle overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-heading font-semibold text-text-main"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://forms.gle/6X3zGnMzgxPAUMxCA"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-tinkr-yellow text-text-main rounded-full"
              >
                Book a Discovery Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
