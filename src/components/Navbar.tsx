"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import Magnetic from "./Magnetic";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-[100] flex justify-center px-4 transition-all duration-500">
        <nav
          className={`flex items-center justify-between gap-4 md:gap-8 rounded-full border border-white/10 bg-neutral-900/80 backdrop-blur-xl px-4 py-2.5 shadow-2xl transition-all duration-300 ${
            scrolled ? "py-2 shadow-black/90 bg-neutral-950/95 border-lime-accent/20" : "py-2.5"
          }`}
        >
          {/* Left: Brand Name ZEESHAN.DEV */}
          <Link href="/" className="group flex items-center pl-2">
            <span className="font-display text-base sm:text-lg font-black tracking-wider uppercase text-white group-hover:text-[#CCFF00] transition-colors">
              ZEESHAN<span className="text-[#CCFF00]">.DEV</span>
            </span>
          </Link>

          {/* Center: Navigation Links — White default text, Lime Green on hover */}
          <div className="hidden md:flex items-center gap-6 font-body text-xs font-semibold tracking-wide">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.2}>
                <a
                  href={link.href}
                  className="text-white hover:text-[#CCFF00] transition-colors py-1 px-2"
                >
                  {link.name}
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Right: Pill Contact Button */}
          <div className="flex items-center gap-3 pr-1">
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                className="flex items-center gap-1.5 rounded-full bg-white px-5 py-2 text-xs font-bold text-black transition-all hover:bg-[#CCFF00] hover:shadow-lg hover:shadow-lime-accent/30"
              >
                <span>Contact</span>
              </a>
            </Magnetic>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center p-1.5 text-white md:hidden hover:text-[#CCFF00]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] flex flex-col justify-between bg-neutral-950/95 backdrop-blur-2xl p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6 font-display text-3xl font-extrabold uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-[#CCFF00] transition-colors flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-6 w-6 text-[#CCFF00]" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#CCFF00] transition-colors flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span>Contact</span>
                <ArrowUpRight className="h-6 w-6 text-[#CCFF00]" />
              </a>
            </div>

            <div className="flex flex-col gap-4 font-mono text-xs text-graphite-400 pt-6">
              <p>{PORTFOLIO_DATA.personal.location}</p>
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-white hover:text-[#CCFF00] underline">
                {PORTFOLIO_DATA.personal.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
