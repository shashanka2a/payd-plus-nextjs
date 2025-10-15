"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Check, Play } from "lucide-react";

const paymentLogos = [
  { name: "PayPal", color: "#0070BA", position: { x: -150, y: -80 } },
  { name: "Paytm", color: "#00BAF2", position: { x: 150, y: -100 } },
  { name: "USDC", color: "#2775CA", position: { x: -180, y: 60 } },
  { name: "ETH", color: "#627EEA", position: { x: 180, y: 40 } },
  { name: "SwiftPe", color: "#8B5CF6", position: { x: 0, y: -140 } },
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 15 + Math.random() * 15,
  delay: Math.random() * 5,
}));

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
      
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-violet-400 rounded-full"
            initial={{ x: `${particle.x}vw`, y: `${particle.y}vh`, opacity: 0 }}
            animate={{
              x: [`${particle.x}vw`, `${(particle.x + 10) % 100}vw`],
              y: [`${particle.y}vh`, `${(particle.y + 15) % 100}vh`],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Floating payment cards */}
        <div className="relative h-72 mb-16">
          {/* Center Payd.plus card */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-36 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-2xl shadow-2xl flex items-center justify-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            <span className="text-2xl">Payd.plus</span>
          </motion.div>

          {/* Orbiting payment logos */}
          {paymentLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: [logo.position.x, logo.position.x + 8, logo.position.x],
                y: [logo.position.y, logo.position.y - 8, logo.position.y],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.2 + index * 0.1 },
                scale: { duration: 0.6, delay: 0.2 + index * 0.1 },
                x: { duration: 3.5, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" },
                y: { duration: 3.5, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" },
              }}
            >
              <div
                className="w-20 h-20 rounded-xl shadow-lg flex items-center justify-center backdrop-blur-sm text-xs transition-transform hover:scale-110"
                style={{
                  background: `${logo.color}20`,
                  border: `1px solid ${logo.color}40`,
                }}
              >
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Headline */}
        <motion.h1
          className="mb-6 text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Your Payments, Simplified.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mb-12 text-gray-300 max-w-2xl mx-auto text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          From business invoices to creator tips to global transfers — all unified in Payd.plus.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white border-0 px-10 py-6 text-base shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
          >
            Start Accepting Payments
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white/50 px-10 py-6 text-base"
          >
            <Play className="w-4 h-4 mr-2" />
            View Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap gap-6 sm:gap-10 justify-center items-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-300">10K+ users</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-300">Instant settlements</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-300">Crypto & Fiat supported</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
