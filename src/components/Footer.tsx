"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 md:px-12 bg-[#141416] text-white border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-graphite-400">
        <div className="flex items-center gap-3">
          <span className="font-display text-base font-black uppercase text-white tracking-tight">
            ZEESHAN<span className="text-[#CCFF00]">.</span>
          </span>
          <span>© {new Date().getFullYear()} — ALL RIGHTS RESERVED</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#CCFF00] transition-colors"
            data-cursor="GITHUB"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#CCFF00] transition-colors"
            data-cursor="LINKEDIN"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#CCFF00] transition-colors"
            data-cursor="TWITTER"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="hover:text-[#CCFF00] transition-colors"
            data-cursor="EMAIL"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          data-cursor="TOP"
          className="flex items-center gap-1.5 hover:text-[#CCFF00] transition-colors"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}
