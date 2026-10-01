"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Flame, Mail, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  pathname: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  links,
  pathname,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-base/95 backdrop-blur-2xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto"
        >
          {/* Nav Links List */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-ash tracking-wider uppercase mb-2">
              Navigation
            </span>
            {links.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-display font-medium transition-all",
                      isActive
                        ? "bg-ember/15 text-smoke-white border border-ember/30"
                        : "text-ash-light hover:text-smoke-white hover:bg-surface"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-ember shadow-ember" />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Actions & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="pt-6 border-t border-surface-border flex flex-col gap-4 mt-6"
          >
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              className="w-full"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>

            <div className="flex flex-col gap-2 pt-2 text-xs text-ash">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-ember" />
                <a
                  href="mailto:hello@theangaarlabs.in"
                  className="hover:text-smoke-white transition-colors"
                >
                  hello@theangaarlabs.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-ember" />
                <span>Global AI Engineering Studio</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
