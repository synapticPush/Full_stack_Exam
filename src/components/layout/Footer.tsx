"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Flame, ArrowUpRight, ArrowUp, Github, Linkedin, Twitter, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    // Simulate brief network latency for newsletter registration
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface/90 border-t border-surface-border pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-ember/10 blur-[100px] pointer-events-none rounded-full" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ember to-flame flex items-center justify-center shadow-ember">
                <Flame className="w-5 h-5 text-base fill-base" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-smoke-white">
                The Angaar Labs
              </span>
            </Link>

            <p className="text-sm text-ash leading-relaxed max-w-sm">
              AI-First software engineering studio. Zero to 100% product execution for high-growth startups and global enterprises.
            </p>

            {/* Newsletter */}
            <div className="w-full max-w-sm mt-2">
              <span className="text-xs font-mono uppercase text-ash-light font-medium block mb-2">
                Stay in the Loop
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-ember-light bg-ember/10 border border-ember/30 rounded-xl p-3">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>You are subscribed to the Angaar Engineering Dispatch!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-surface-subtle border border-surface-border rounded-xl px-3.5 py-2 text-xs text-smoke-white placeholder:text-ash-dark focus:outline-none focus:border-ember"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="primary"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Join"}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Services Col */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-smoke-white font-semibold">
              Services
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-ash">
              <li>
                <Link href="/services#agentic-ai" className="hover:text-ember transition-colors">
                  Agentic AI Systems
                </Link>
              </li>
              <li>
                <Link href="/services#full-stack" className="hover:text-ember transition-colors">
                  Full-Stack Web
                </Link>
              </li>
              <li>
                <Link href="/services#saas-platforms" className="hover:text-ember transition-colors">
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/services#enterprise-dashboards" className="hover:text-ember transition-colors">
                  Enterprise Dashboards
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-apps" className="hover:text-ember transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-devops" className="hover:text-ember transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-smoke-white font-semibold">
              Studio
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-ash">
              <li>
                <Link href="/about" className="hover:text-ember transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-ember transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-ember transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-ember transition-colors">
                  Capabilities Matrix
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ember transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Col */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-smoke-white font-semibold">
              Direct Contact
            </span>
            <div className="flex flex-col gap-2 text-sm text-ash">
              <a
                href="mailto:hello@theangaarlabs.in"
                className="hover:text-smoke-white transition-colors flex items-center gap-1 group"
              >
                <span>hello@theangaarlabs.in</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-xs text-ash-dark font-mono">
                Response time: &lt; 4 Hours
              </span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border text-ash hover:text-smoke-white hover:border-ember transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border text-ash hover:text-smoke-white hover:border-ember transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-surface-subtle border border-surface-border text-ash hover:text-smoke-white hover:border-ember transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ash font-sans">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} The Angaar Labs. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-ember-light font-medium">Built with Angaari Craft</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-surface-border hover:border-ember/40 hover:text-smoke-white transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-ember" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
