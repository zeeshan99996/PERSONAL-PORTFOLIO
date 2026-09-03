"use client";

import React, { useEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLHeadingElement>(null);
  const textRightRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    // Desktop Only (>= 1024px): 2-stage animated scroll glide
    mm.add("(min-width: 1024px)", () => {
      if (!cardRef.current || !containerRef.current) return;

      // Trigger 1: Fast glide into ABOUT ME left column (x: -450, y: 650, rotation: 0)
      gsap.to(cardRef.current, {
        x: -450,
        y: 650,
        scale: 0.98,
        rotation: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top 95%",
          end: "top 25%",
          scrub: 0.1,
          invalidateOnRefresh: true,
        },
      });

      // Trigger 2: Fast straight glide to MY SERVICES right column (x: 365, y: 1335, rotation: 0)
      gsap.to(cardRef.current, {
        x: 365,
        y: 1335,
        scale: 0.95,
        rotation: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".capabilities-heading",
          start: "top 95%",
          end: "top 25%",
          scrub: 0.1,
          invalidateOnRefresh: true,
        },
      });

      if (textLeftRef.current) {
        gsap.to(textLeftRef.current, {
          x: -40,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.1,
          },
        });
      }

      if (textRightRef.current) {
        gsap.to(textRightRef.current, {
          x: 40,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.1,
          },
        });
      }
    });

    // Mobile & Tablet (< 1024px): Static image layout (zero scroll-glide on mobile)
    mm.add("(max-width: 1023px)", () => {
      if (!cardRef.current) return;
      gsap.set(cardRef.current, { clearProps: "all" });
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative z-40 min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 overflow-hidden lg:overflow-visible bg-[#161618] text-white select-none"
    >
      {/* Radial Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] lg:w-[900px] h-[350px] sm:h-[700px] lg:h-[900px] bg-[#CCFF00]/5 rounded-full blur-[120px] sm:blur-[170px] pointer-events-none" />

      {/* Hero Core Editorial Composition */}
      <div className="my-auto relative flex flex-col lg:flex-row items-center justify-between py-4 sm:py-6 lg:py-12 z-10 max-w-7xl mx-auto w-full gap-4 lg:gap-1">
        
        {/* Left Headline Column */}
        <div className="w-full lg:w-[42%] text-center lg:text-right z-20 lg:-translate-y-10 lg:-translate-x-6 px-1 shrink-0">
          <h1
            ref={textLeftRef}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.2vw] font-black tracking-tight uppercase leading-none text-white drop-shadow-md whitespace-nowrap"
          >
            FULL-STACK
          </h1>
        </div>

        {/* Center Vertical Portrait Card — Static on Mobile (< 1024px), Scroll Glides on Desktop (>= 1024px) */}
        <div className="w-full lg:w-auto flex justify-center items-center my-4 lg:my-0 z-50 shrink-0 mx-1">
          <div
            ref={cardRef}
            style={{ transform: "rotate(0deg)" }}
            className="relative z-50 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[390px] max-w-full rounded-[2rem] sm:rounded-[2.4rem] p-3 sm:p-4 bg-[#F5F3EF] shadow-2xl shadow-black/90 opacity-100 block transition-shadow duration-300 hover:shadow-lime-accent/30"
          >
            {/* Bright, Crisp Portrait Image Container */}
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] rounded-[1.6rem] sm:rounded-[1.9rem] overflow-hidden bg-neutral-100 opacity-100">
              <img
                src="/images/hero-portrait.jpg"
                alt="Zeeshan Portrait"
                className="w-full h-full object-cover object-top block opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Right Headline Column */}
        <div className="w-full lg:w-[42%] text-center lg:text-left z-20 lg:translate-y-10 px-1 shrink-0">
          <h2
            ref={textRightRef}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.6vw] font-black tracking-tight uppercase leading-none text-white drop-shadow-md whitespace-nowrap"
          >
            DEVELOPER
          </h2>
        </div>
      </div>

      {/* Hero Footer Bar */}
      <div className="flex justify-end items-center font-mono text-xs text-graphite-400 border-t border-white/10 pt-4 z-10">
        <a
          href="#about"
          className="flex items-center gap-1.5 text-white hover:text-[#CCFF00] transition-colors font-medium ml-auto"
        >
          <span>SCROLL DOWN</span>
          <ArrowDownRight className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
