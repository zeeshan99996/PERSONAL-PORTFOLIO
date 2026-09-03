"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <section
      id="process"
      className="relative pt-6 pb-20 px-4 md:px-12 bg-[#1A1A1E] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase leading-none mb-10 text-white">
          HOW <span className="text-[#CCFF00]">I WORK.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.process.map((stage, idx) => (
            <div
              key={stage.step}
              className="relative p-7 rounded-2xl bg-[#141416] border border-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 group flex flex-col justify-between h-[360px]"
              data-cursor="PROCESS"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-mono text-4xl font-extrabold text-[#CCFF00]">
                  {stage.step}
                </span>
                <span className="font-mono text-[10px] text-graphite-400 uppercase tracking-widest">
                  STAGE {idx + 1}/4
                </span>
              </div>

              <div className="my-auto">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white group-hover:text-[#CCFF00] transition-colors tracking-tight">
                  {stage.title}
                </h3>
                <p className="font-mono text-xs text-[#CCFF00] mt-1 uppercase tracking-wider">
                  {stage.subtitle}
                </p>
                <p className="mt-4 font-body text-sm text-graphite-600 font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-graphite-400 group-hover:text-[#CCFF00] transition-colors pt-4 border-t border-white/10">
                <span className="font-mono text-xs font-bold">NEXT PHASE</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
