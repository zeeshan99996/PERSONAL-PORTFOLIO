"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, Github, Users } from "lucide-react";

export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const renderVisualMockup = () => {
    switch (project.visualIdentity.deviceType) {
      case "dashboard":
        return (
          <div className="w-full h-full bg-[#141416] rounded-xl p-4 font-mono text-xs text-white border border-white/10 flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[10px] text-graphite-400">app.synthai.io/dashboard</span>
              </div>
              <span className="text-[10px] text-[#CCFF00] px-2 py-0.5 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/20">
                LIVE METRICS
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 my-4">
              <div className="p-3 rounded bg-neutral-900 border border-white/5">
                <p className="text-[10px] text-graphite-400">PROMPTS / MIN</p>
                <p className="text-xl font-bold text-[#CCFF00] mt-1">1,420</p>
              </div>
              <div className="p-3 rounded bg-neutral-900 border border-white/5">
                <p className="text-[10px] text-graphite-400">LATENCY</p>
                <p className="text-xl font-bold text-sky-400 mt-1">210ms</p>
              </div>
              <div className="p-3 rounded bg-neutral-900 border border-white/5">
                <p className="text-[10px] text-graphite-400">UPTIME</p>
                <p className="text-xl font-bold text-emerald-400 mt-1">99.98%</p>
              </div>
            </div>
            <div className="h-28 rounded bg-neutral-900 border border-white/5 p-3 flex items-end gap-1">
              {[40, 65, 45, 80, 95, 70, 85, 100, 75, 90, 110, 130, 95, 120].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${(h / 130) * 100}%` }}
                  className="flex-1 bg-gradient-to-t from-[#CCFF00]/30 to-[#CCFF00] rounded-t hover:bg-white transition-all"
                />
              ))}
            </div>
          </div>
        );

      case "ecommerce":
        return (
          <div className="w-full h-full bg-neutral-900 rounded-xl p-4 font-mono text-xs text-white border border-white/10 flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold text-sky-400 tracking-wider">AURA // LUXURY STORE</span>
              <span className="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded">CART (03)</span>
            </div>
            <div className="grid grid-cols-2 gap-3 my-3">
              <div className="h-32 rounded bg-neutral-800 border border-white/5 p-3 flex flex-col justify-between group-hover:border-sky-400/50 transition-all">
                <span className="text-[10px] text-graphite-400">DROP 04</span>
                <div>
                  <p className="font-bold text-sm">NEON OVERSHOOT</p>
                  <p className="text-sky-400 font-bold mt-1">$280.00</p>
                </div>
              </div>
              <div className="h-32 rounded bg-neutral-800 border border-white/5 p-3 flex flex-col justify-between group-hover:border-sky-400/50 transition-all">
                <span className="text-[10px] text-graphite-400">LIMITED</span>
                <div>
                  <p className="font-bold text-sm">CYBER PARKA</p>
                  <p className="text-sky-400 font-bold mt-1">$450.00</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "collaboration":
        return (
          <div className="w-full h-full bg-slate-950 rounded-xl p-4 font-mono text-xs text-white border border-white/10 flex flex-col justify-between overflow-hidden shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold text-rose-400">PULSE // MULTIPLAYER CANVAS</span>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                <span className="text-[10px] text-rose-300">4 USERS ONLINE</span>
              </div>
            </div>
            <div className="relative h-44 rounded bg-slate-900 border border-white/5 p-4 flex items-center justify-center">
              <div className="border border-rose-500/40 rounded p-3 bg-rose-500/10 text-rose-300 text-center font-bold">
                SYSTEM MICROSERVICES ARCHITECTURE
              </div>
              <div className="absolute top-6 left-10 flex items-center gap-1 bg-amber-500 text-black px-2 py-0.5 rounded-full text-[9px] font-bold shadow-lg">
                <Users className="h-3 w-3" /> Zeeshan (Editing)
              </div>
            </div>
          </div>
        );

      case "finance":
        return (
          <div className="w-full h-full bg-zinc-950 rounded-xl p-4 font-mono text-xs text-white border border-white/10 flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold text-purple-400">NEXUS // PORTFOLIO INTELLIGENCE</span>
              <span className="text-[10px] text-purple-300 bg-purple-900/40 px-2 py-0.5 rounded">
                +14.8% YTD
              </span>
            </div>
            <div className="my-3 space-y-2">
              <div className="flex justify-between items-center p-2 rounded bg-zinc-900 border border-white/5">
                <span>TOTAL ASSET VALUE</span>
                <span className="font-bold text-purple-300 text-base">$4,850,290.00</span>
              </div>
            </div>
          </div>
        );

      case "creative":
      default:
        return (
          <div className="w-full h-full bg-black rounded-xl p-4 font-mono text-xs text-white border border-white/10 flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold text-orange-400">KINETIX // EXPERIMENTAL STUDIO</span>
              <span className="text-[10px] text-orange-300">SOTD AWARD WINNER</span>
            </div>
            <div className="my-auto text-center py-6">
              <h4 className="font-display text-3xl font-black uppercase text-orange-400 tracking-tighter">
                FUTURE DIGITAL
              </h4>
              <p className="text-[10px] text-graphite-400 mt-1">CREATIVE EXPERIMENTAL WEB</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      style={{
        top: `${100 + index * 24}px`,
        zIndex: index + 10,
      }}
      className="project-card sticky w-full rounded-3xl p-6 sm:p-10 md:p-12 bg-[#1A1A1E] border border-white/10 shadow-2xl shadow-black/90 overflow-hidden group transition-all duration-500"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.visualIdentity.bgPattern} opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-mono text-2xl md:text-3xl font-extrabold text-[#CCFF00]">
              {project.number}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-graphite-300">
              {project.category} // {project.year}
            </span>
          </div>

          <div>
            <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="mt-2 font-mono text-xs text-[#CCFF00] uppercase tracking-wider">
              {project.subtitle}
            </p>
            <p className="mt-4 font-body text-base text-graphite-600 font-light leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((item, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded bg-[#141416] border border-white/10 font-mono text-[11px] text-graphite-300">
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Link
              href={`/projects/${project.slug}`}
              data-cursor="EXPLORE"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-mono text-xs font-bold text-black hover:bg-[#CCFF00] transition-all shadow-lg hover:shadow-lime-accent/20"
            >
              <span>CASE STUDY</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              className="p-3 rounded-full border border-white/10 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 h-[320px] sm:h-[400px] lg:h-[460px] w-full relative rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
          <Link href={`/projects/${project.slug}`} data-cursor="VIEW ↗" className="block w-full h-full">
            {renderVisualMockup()}
          </Link>
        </div>
      </div>
    </div>
  );
}
