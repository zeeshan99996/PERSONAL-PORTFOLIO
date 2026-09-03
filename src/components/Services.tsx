"use client";

import React, { useState, useRef, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ChevronDown, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const [openId, setOpenId] = useState<string | null>("01");
  const statsRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats reveal animation
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      className="relative z-10 pt-20 pb-28 px-4 md:px-12 bg-[#141416] text-white border-t border-white/10 overflow-visible"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Services Section Grid: LEFT Column for Services List (Level), RIGHT Column for WHAT I CAN DO FOR YOU Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20">
          
          {/* Left Column: Services Accordion List aligned PERFECTLY LEVEL at the top */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] mb-2">
              <Layers className="h-4 w-4" />
              <span className="tracking-widest uppercase">{"// 02. CAPABILITIES & SERVICES"}</span>
            </div>

            {/* Services Accordion List */}
            <div className="flex flex-col border-t border-white/10 pt-2">
              {PORTFOLIO_DATA.services.map((service) => {
                const isOpen = openId === service.id;

                return (
                  <div
                    key={service.id}
                    className={`border-b border-white/10 transition-colors duration-300 ${
                      isOpen ? "bg-[#1A1A1E]/80" : "hover:bg-[#1A1A1E]/40"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(service.id)}
                      data-cursor={isOpen ? "CLOSE" : "EXPAND"}
                      className="w-full py-5 flex items-center justify-between text-left group px-3"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-[#CCFF00] font-bold">
                          {service.id}
                        </span>
                        <h3 className="font-display text-lg sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3">
                        <div
                          className={`h-8 w-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${
                            isOpen ? "bg-[#CCFF00] text-black rotate-180" : "group-hover:border-[#CCFF00] text-white"
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden px-4 pb-6"
                        >
                          <div className="space-y-4 pt-1">
                            <p className="font-body text-xs sm:text-sm text-graphite-400 font-light leading-relaxed">
                              {service.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {service.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-0.5 rounded-full bg-neutral-800 border border-white/10 text-[11px] font-mono text-[#CCFF00]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: WHAT I CAN DO FOR YOU Heading on the RIGHT side (Perfectly Level) */}
          <div className="lg:col-span-6 space-y-4 pt-2">
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-white drop-shadow-md">
              WHAT I <span className="text-[#CCFF00]">CAN DO</span><br />FOR YOU
            </h2>
          </div>

        </div>

        {/* Stats Grid at Bottom of Services */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/10"
        >
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-[#1A1A1E] border border-white/5 hover:border-[#CCFF00]/30 transition-all duration-300 group"
            >
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white group-hover:text-[#CCFF00] transition-colors flex items-baseline gap-1">
                <span>{stat.prefix}{stat.value}</span>
                <span className="text-[#CCFF00] text-3xl sm:text-4xl">{stat.suffix}</span>
              </div>
              <p className="mt-3 font-mono text-xs text-graphite-400 tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
