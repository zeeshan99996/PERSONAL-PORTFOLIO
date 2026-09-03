"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Cpu, ArrowUpRight } from "lucide-react";

export default function Stack() {
  const [activeTech, setActiveTech] = useState<string>(PORTFOLIO_DATA.techStack[0].name);
  const selectedTech = PORTFOLIO_DATA.techStack.find((t) => t.name === activeTech) || PORTFOLIO_DATA.techStack[0];

  return (
    <section
      id="stack"
      className="relative py-28 px-4 md:px-12 bg-[#1A1A1E] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] mb-4">
              <Cpu className="h-4 w-4" />
              <span className="tracking-widest uppercase">{"// 03. TECHNICAL ECOSYSTEM"}</span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase leading-none text-white">
              MY <span className="text-[#CCFF00]">STACK.</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-graphite-400 text-right">
            <p>15+ TECHNOLOGIES & TOOLS</p>
            <p className="text-[#CCFF00]">EXPERT LEVEL FLUENCY</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 flex flex-wrap gap-3 sm:gap-4">
            {PORTFOLIO_DATA.techStack.map((item) => {
              const isActive = activeTech === item.name;

              return (
                <button
                  key={item.name}
                  onMouseEnter={() => setActiveTech(item.name)}
                  onClick={() => setActiveTech(item.name)}
                  data-cursor="TECH"
                  className={`group relative px-5 py-3 sm:px-6 sm:py-4 rounded-xl border text-lg sm:text-2xl font-display font-extrabold uppercase tracking-tight transition-all duration-300 ${
                    isActive
                      ? "bg-[#CCFF00] text-black border-[#CCFF00] shadow-lg shadow-lime-accent/20 scale-105"
                      : "bg-[#141416] text-graphite-600 border-white/5 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.name}
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isActive ? "rotate-45 text-black" : "opacity-0 group-hover:opacity-100 text-[#CCFF00]"
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-4 sticky top-28 p-8 rounded-2xl bg-[#141416] border border-white/10 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest">
                {"// "} {selectedTech.category}
              </span>
              <span className="h-2 w-2 rounded-full bg-[#CCFF00] animate-pulse" />
            </div>

            <h3 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-white tracking-tight mb-4">
              {selectedTech.name}
            </h3>

            <p className="font-body text-sm sm:text-base text-graphite-600 font-light leading-relaxed mb-6">
              {selectedTech.desc}
            </p>

            <div className="space-y-3 font-mono text-xs text-graphite-400 border-t border-white/10 pt-6">
              <div className="flex justify-between items-center">
                <span>USAGE LEVEL</span>
                <span className="text-[#CCFF00] font-bold">PRODUCTION READY</span>
              </div>
              <div className="flex justify-between items-center">
                <span>ARCHITECTURE</span>
                <span className="text-white">FULL-STACK COMPATIBLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
