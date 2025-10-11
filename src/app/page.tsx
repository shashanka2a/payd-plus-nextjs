import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0E15] to-[#161625] text-white">
      <Navigation />
      <Hero />
      <FeatureCards />
      <FinalCTA />
      <Footer />
    </div>
  );
}
