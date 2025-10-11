"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Enhanced gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl -translate-y-1/2 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-3xl -translate-y-1/2 animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 rounded-3xl opacity-20 blur-2xl" />
          
          <div className="relative bg-gradient-to-br from-[#1A1A28]/90 to-[#252535]/90 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-xl overflow-hidden">
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="relative text-center">
              {/* Icon badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 rounded-full px-5 py-2.5 mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-300">Unified Payment OS</span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                className="mb-6 text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to Transform Your Payments?
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Join thousands of businesses, creators, and freelancers who trust Payd.plus for their payment infrastructure.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
