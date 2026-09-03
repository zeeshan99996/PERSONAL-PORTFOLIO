import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Calendar, User, Clock, Layers } from "lucide-react";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = PROJECTS[(PROJECTS.findIndex((p) => p.slug === params.slug) + 1) % PROJECTS.length];

  return (
    <main className="relative min-h-screen w-full bg-[#161618] text-white selection:bg-[#CCFF00] selection:text-black">
      <Navbar />

      <article className="pt-32 pb-24 px-4 md:px-12 max-w-7xl mx-auto">
        <Link
          href="/#projects"
          data-cursor="BACK"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#CCFF00] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex items-center gap-3 font-mono text-xs text-graphite-400 mb-4">
            <span className="text-[#CCFF00] font-bold">{project.number}</span>
            <span>//</span>
            <span>{project.category}</span>
            <span>//</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            {project.title}
          </h1>

          <p className="mt-4 font-mono text-base sm:text-lg text-[#CCFF00] font-medium">
            {project.subtitle}
          </p>

          <p className="mt-6 font-body text-lg sm:text-xl text-graphite-600 font-light max-w-3xl leading-relaxed">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="LIVE DEMO"
              className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 font-mono text-xs font-bold text-black hover:bg-white transition-all shadow-lg hover:shadow-lime-accent/20"
            >
              <span>LIVE DEMO</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="SOURCE"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 border border-white/10 px-6 py-3 font-mono text-xs font-bold text-white hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all"
            >
              <Github className="h-4 w-4" />
              <span>SOURCE CODE</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-white/10 mb-16 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-graphite-400 flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-[#CCFF00]" /> ROLE
            </span>
            <p className="font-bold text-white text-sm">{project.role}</p>
          </div>
          <div className="space-y-1">
            <span className="text-graphite-400 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-[#CCFF00]" /> CLIENT
            </span>
            <p className="font-bold text-white text-sm">{project.client}</p>
          </div>
          <div className="space-y-1">
            <span className="text-graphite-400 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#CCFF00]" /> DURATION
            </span>
            <p className="font-bold text-white text-sm">{project.duration}</p>
          </div>
          <div className="space-y-1">
            <span className="text-graphite-400 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#CCFF00]" /> YEAR
            </span>
            <p className="font-bold text-white text-sm">{project.year}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 space-y-4 p-8 rounded-2xl bg-neutral-900/60 border border-white/10">
            <h3 className="font-display text-2xl font-bold uppercase text-rose-400 tracking-tight">
              01 // THE CHALLENGE
            </h3>
            <p className="font-body text-base text-graphite-600 font-light leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4 p-8 rounded-2xl bg-neutral-900/60 border border-white/10">
            <h3 className="font-display text-2xl font-bold uppercase text-[#CCFF00] tracking-tight">
              02 // THE SOLUTION
            </h3>
            <p className="font-body text-base text-graphite-600 font-light leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/10 mb-16 space-y-8">
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight border-b border-white/10 pb-4">
            KEY ARCHITECTURAL FEATURES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#161618] border border-white/5">
                <CheckCircle2 className="h-5 w-5 text-[#CCFF00] shrink-0 mt-0.5" />
                <span className="font-body text-sm text-graphite-600 font-normal leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 flex justify-between items-center">
          <span className="font-mono text-xs text-graphite-400">UP NEXT</span>
          <Link
            href={`/projects/${nextProject.slug}`}
            data-cursor="NEXT"
            className="group text-right"
          >
            <span className="block font-mono text-xs text-[#CCFF00]">{nextProject.number} // {nextProject.category}</span>
            <span className="font-display text-3xl sm:text-5xl font-black uppercase text-white group-hover:text-[#CCFF00] transition-colors">
              {nextProject.title} →
            </span>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
