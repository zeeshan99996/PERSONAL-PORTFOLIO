"use client";

import React, { useState, useRef, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const [openId, setOpenId] = useState<string | null>("01");
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading & text reveals
      gsap.from(".about-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-bio", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        },
      });

      // Stats reveal
      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 90%",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative z-10 pt-12 pb-24 px-4 md:px-12 bg-[#1A1A1E] text-white border-t border-white/10 overflow-visible space-y-20"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Stage 1 Top Layout: LEFT Column for Stage 1 Portrait Card Landing (Desktop), RIGHT Column for ABOUT ME */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Reserved Spacer for Stage 1 Portrait Card Landing (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 h-[490px] w-full" />

          {/* Mobile Only: Inline Portrait Image Card */}
          <div className="block lg:hidden w-full flex justify-center mb-6">
            <div className="w-[260px] sm:w-[300px] rounded-[2rem] p-3 bg-[#F5F3EF] shadow-xl">
              <div className="w-full h-[320px] sm:h-[360px] rounded-[1.6rem] overflow-hidden bg-neutral-100">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Zeeshan Portrait"
                  className="w-full h-full object-cover object-top block"
                />
              </div>
            </div>
          </div>

          {/* Right Column: ABOUT ME Heading, Editorial Bio, & Capability Checkmarks */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="about-title font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none text-white whitespace-normal lg:whitespace-nowrap drop-shadow-md">
              ABOUT <span className="text-[#CCFF00]">ME.</span>
            </h2>

            <p className="about-bio font-body text-lg sm:text-2xl lg:text-3xl text-graphite-600 font-light leading-relaxed pt-1">
              &quot;{PORTFOLIO_DATA.personal.bio}&quot;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 font-mono text-xs sm:text-sm text-graphite-400">
              <div className="flex items-center gap-2 border-l-2 border-[#CCFF00]/60 pl-3">
                <CheckCircle2 className="h-4 w-4 text-[#CCFF00] shrink-0" />
                <span>WEBSITES & WEB APPLICATIONS</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 border-[#CCFF00]/60 pl-3">
                <CheckCircle2 className="h-4 w-4 text-[#CCFF00] shrink-0" />
                <span>SAAS PLATFORMS & DASHBOARDS</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 border-[#CCFF00]/60 pl-3">
                <CheckCircle2 className="h-4 w-4 text-[#CCFF00] shrink-0" />
                <span>CUSTOM E-COMMERCE STORES</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 border-[#CCFF00]/60 pl-3">
                <CheckCircle2 className="h-4 w-4 text-[#CCFF00] shrink-0" />
                <span>OPTIMIZED CODE PERFORMANCE</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stage 2 Bottom Layout: LEFT Column (lg:col-span-7) for MY SERVICES Heading + Refined Services Accordion, RIGHT Column (lg:col-span-5) for Stage 2 Portrait Card Landing */}
        <div id="services" className="capabilities-heading grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-16 md:pt-20 border-t border-white/10 scroll-mt-24">
          
          {/* Left Column: MY SERVICES Heading & Refined Services Accordion List (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 pt-0">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-white whitespace-normal lg:whitespace-nowrap drop-shadow-md">
              MY <span className="text-[#CCFF00]">SERVICES.</span>
            </h2>

            {/* Refined Services Accordion List */}
            <div className="flex flex-col border-t border-white/10 pt-1 w-full">
              {PORTFOLIO_DATA.services.map((service) => {
                const isOpen = openId === service.id;

                return (
                  <div
                    key={service.id}
                    className={`border-b border-white/10 transition-colors duration-300 ${
                      isOpen ? "bg-[#141416]/90" : "hover:bg-[#141416]/50"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(service.id)}
                      data-cursor={isOpen ? "CLOSE" : "EXPAND"}
                      className="w-full py-4 md:py-5 flex items-center justify-between text-left group px-2 sm:px-5"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="font-mono text-xs sm:text-sm text-[#CCFF00] font-bold">
                          {service.id}
                        </span>
                        <h3 className="font-display text-base sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3">
                        <div
                          className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${
                            isOpen ? "bg-[#CCFF00] text-black rotate-180" : "group-hover:border-[#CCFF00] text-white"
                          }`}
                        >
                          <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
                          className="overflow-hidden px-3 sm:px-5 pb-4 sm:pb-5"
                        >
                          <div className="space-y-3 pt-1 max-w-3xl">
                            <p className="font-body text-xs sm:text-base text-graphite-400 font-light leading-relaxed">
                              {service.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                              {service.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 sm:px-2.5 rounded-full bg-neutral-800 border border-white/10 text-[10px] sm:text-xs font-mono text-[#CCFF00]"
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

          {/* Right Column: Reserved Spacer for Stage 2 Portrait Card Landing (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 h-[490px] w-full" />

        </div>

        {/* Crisp, High-Contrast White-Text 3-Column Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-12 border-t border-white/10 opacity-100"
        >
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-8 rounded-2xl bg-[#141416] border border-white/10 hover:border-[#CCFF00]/40 transition-all duration-300 group opacity-100 shadow-xl"
            >
              <div className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white group-hover:text-[#CCFF00] transition-colors flex items-baseline gap-1">
                <span>{stat.prefix}{stat.value}</span>
                <span className="text-[#CCFF00] text-2xl sm:text-4xl">{stat.suffix}</span>
              </div>
              <p className="mt-2 sm:mt-3 font-mono text-xs sm:text-sm text-white font-bold tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
