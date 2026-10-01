"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Story", href: "/story" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
          isScrolled
            ? "bg-darkbase/80 backdrop-blur-xl border-b border-surface-border py-3 shadow-2xl"
            : "bg-transparent py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              prefetch={true}
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="The Angaar Labs Homepage"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ember to-flame flex items-center justify-center shadow-ember group-hover:shadow-ember-lg transition-all duration-300 group-hover:scale-105">
                <Flame className="w-5 h-5 text-darkbase fill-darkbase" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-smoke-white leading-none group-hover:text-ember-light transition-colors">
                  The Angaar Labs
                </span>
                <span className="font-mono text-[10px] text-ash tracking-widest uppercase">
                  Engineering Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-surface/60 border border-surface-border px-3 py-1.5 rounded-full backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative",
                      isActive
                        ? "text-smoke-white bg-surface-hover font-semibold shadow-inner"
                        : "text-ash hover:text-smoke-white hover:bg-white/[0.04]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-ember rounded-full shadow-[0_0_8px_#F2660A]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <Button
                  href="/contact"
                  size="sm"
                  variant="primary"
                  rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Start a Project
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl bg-surface border border-surface-border text-smoke hover:text-ember focus:outline-none focus:ring-2 focus:ring-ember"
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-ember" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={NAV_LINKS}
        pathname={pathname}
      />
    </>
  );
}
