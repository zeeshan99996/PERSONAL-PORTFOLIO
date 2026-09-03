"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, Send, CheckCircle2, Copy } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", projectType: "Full-Stack SaaS", budget: "$5k - $10k", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#CCFF00", "#FFFFFF", "#38BDF8"],
      });
    } catch {
      // Confetti fallback
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", projectType: "Full-Stack SaaS", budget: "$5k - $10k", message: "" });
    }, 6000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-4 md:px-12 bg-[#1A1A1E] text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#CCFF00] mb-4">
                <Mail className="h-4 w-4" />
                <span className="tracking-widest uppercase">{"// 07. INITIATE COLLABORATION"}</span>
              </div>
              <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-white">
                LET&apos;S BUILD<br />
                <span className="text-[#CCFF00]">TOGETHER.</span>
              </h2>
            </div>

            <p className="font-body text-base sm:text-lg text-graphite-600 font-light leading-relaxed">
              Have an upcoming product idea, full-stack application requirement, or design system refactor? Send over your vision and let&apos;s craft an award-winning digital solution.
            </p>

            <div className="p-6 rounded-2xl bg-[#141416] border border-white/10 space-y-4">
              <span className="font-mono text-xs text-graphite-400 uppercase tracking-widest">
                DIRECT INBOX LINK
              </span>
              <div className="flex items-center justify-between gap-4 font-mono text-sm font-bold text-white bg-neutral-900 p-3 rounded-xl border border-white/5">
                <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
                <button
                  onClick={copyEmailToClipboard}
                  data-cursor="COPY"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#CCFF00] text-black text-xs font-bold hover:bg-white transition-colors shrink-0"
                >
                  {copiedEmail ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#141416] border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] flex items-center justify-center mx-auto border border-[#CCFF00]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-4xl font-black uppercase text-white tracking-tight">
                  MESSAGE DISPATCHED!
                </h3>
                <p className="font-body text-sm text-graphite-600 max-w-md mx-auto">
                  Thank you for reaching out, Zeeshan will review your project details and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-graphite-400 uppercase">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-graphite-500 focus:outline-none focus:border-[#CCFF00] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-graphite-400 uppercase">YOUR EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-graphite-500 focus:outline-none focus:border-[#CCFF00] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-graphite-400 uppercase">PROJECT TYPE</label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                    >
                      <option value="Full-Stack SaaS">Full-Stack SaaS Application</option>
                      <option value="Front-End Development">Front-End / UI Interaction</option>
                      <option value="E-Commerce Platform">E-Commerce Platform</option>
                      <option value="API & Backend Services">API & Backend Services</option>
                      <option value="Other">Custom Architecture / Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-graphite-400 uppercase">BUDGET RANGE</label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                    >
                      <option value="< $5k">&lt; $5,000</option>
                      <option value="$5k - $10k">$5,000 — $10,000</option>
                      <option value="$10k - $25k">$10,000 — $25,000</option>
                      <option value="> $25k">&gt; $25,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-graphite-400 uppercase">PROJECT OVERVIEW *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product requirements, deadlines, and goals..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#1A1A1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-graphite-500 focus:outline-none focus:border-[#CCFF00] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="SUBMIT"
                  className="w-full py-4 rounded-xl bg-[#CCFF00] text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg hover:shadow-lime-accent/20"
                >
                  <span>SEND INQUIRY</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
