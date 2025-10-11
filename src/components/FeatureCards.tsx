"use client";

import { motion } from "motion/react";
import { FileText, Coffee, Globe, ArrowRight } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Transakt",
    description: "Automated invoicing, API integrations, multi-merchant dashboard.",
    gradient: "from-blue-600 to-blue-400",
    features: ["Invoice automation", "Multi-merchant", "API integrations"],
    url: "https://transakt.online/",
  },
  {
    icon: Coffee,
    title: "BuyMeAKofi",
    description: "Personalized payment links for creators with instant crypto rewards.",
    gradient: "from-violet-600 to-purple-400",
    features: ["Creator links", "Instant crypto", "Zero fees"],
    url: "https://buymeakofi.com/",
  },
  {
    icon: Globe,
    title: "SwiftPe",
    description: "Cross-border USD ⇄ INR escrow with multi-wallet settlements.",
    gradient: "from-cyan-600 to-teal-400",
    features: ["Cross-border", "Crypto ↔ Fiat", "Escrow support"],
    url: "https://swiftpe.xyz/",
  },
];

export function FeatureCards() {
  return (
    <section id="features" className="relative py-32 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-5 text-white">
            Everything You Need to Get Paid
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Three powerful platforms unified into one seamless payment experience
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Glow effect on hover */}
                <div 
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />
                
                <div className="relative bg-[#1A1A28]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full group-hover:border-white/20 group-hover:bg-[#1A1A28] transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <a 
                    href={feature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm group/link"
                  >
                    <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover/link:opacity-80 transition-opacity`}>
                      Visit {feature.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-violet-400 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
