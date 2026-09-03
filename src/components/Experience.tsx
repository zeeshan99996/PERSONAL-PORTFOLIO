"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase, MapPin, ChevronRight } from "lucide-react";

export default function Experience() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="relative py-28 px-4 md:px-12 bg-[#1A1A1E] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] mb-4">
          <Briefcase className="h-4 w-4" />
          <span className="tracking-widest uppercase">// 05. CAREER TRAJECTORY</span>
        </div>

        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase leading-none mb-16 text-white">
          EXPERIENCE<span className="text-[#CCFF00]">.</span>
        </h2>

        <div className="flex flex-col border-t border-white/10">
          {PORTFOLIO_DATA.experience.map((exp, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`group border-b border-white/10 py-8 px-2 sm:px-6 transition-all duration-500 cursor-pointer ${
                  isHovered ? "bg-[#141416]/80 border-l-4 border-l-[#CCFF00] pl-6" : ""
                }`}
                data-cursor="CAREER"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-3 font-mono text-sm sm:text-base font-bold text-[#CCFF00]">
                    {exp.period}
                  </div>

                  <div className="lg:col-span-5">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-xs text-graphite-400 mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-graphite-500">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </p>
                  </div>

                  <div className="lg:col-span-4 space-y-3 font-body text-sm text-graphite-600 font-light leading-relaxed">
                    <p>{exp.description}</p>
                    
                    <ul className="space-y-1.5 pt-2 font-mono text-xs text-graphite-400">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <ChevronRight className="h-3.5 w-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
