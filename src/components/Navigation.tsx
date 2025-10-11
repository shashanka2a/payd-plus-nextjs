"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";

export function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E15]/80 backdrop-blur-lg border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-lg" />
          <span className="text-lg text-white">Payd.plus</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#docs" className="text-sm text-gray-300 hover:text-white transition-colors">
            Docs
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden sm:inline-flex text-gray-300 hover:text-white hover:bg-white/5"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white border-0"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
