"use client";

import React, { useRef, useEffect } from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { FolderGit2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeRef.current && sectionRef.current) {
        gsap.to(marqueeRef.current, {
          x: "-30%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Sticky Stacking Deck Scroll Animation
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          gsap.to(card, {
            scale: 0.94 - (cards.length - 1 - index) * 0.015,
            opacity: 0.85,
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top 80%",
              end: "top 25%",
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 bg-[#141416] text-white border-t border-white/10 overflow-visible"
    >
      <div className="px-4 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00]">
          <FolderGit2 className="h-4 w-4" />
          <span className="tracking-widest uppercase">// 04. FEATURED WORK & CASE STUDIES</span>
        </div>
      </div>

      <div className="w-full overflow-hidden select-none mb-16 py-4 border-y border-white/5 bg-[#1A1A1E]/30">
        <h2
          ref={marqueeRef}
          className="font-display text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter text-white/5 whitespace-nowrap leading-none"
        >
          SELECTED PROJECTS — SELECTED PROJECTS — SELECTED PROJECTS —
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-12 pb-24">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
