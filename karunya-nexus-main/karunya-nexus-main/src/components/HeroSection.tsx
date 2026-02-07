import { motion } from "framer-motion";
import { ChevronDown, Play, Users, Calendar, Trophy } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-0" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      <ParticleBackground />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* IEEE Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              IEEE Student Branch • Karunya University
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Innovate.
            <span className="text-gradient"> Engineer.</span>
            <br />
            <span className="text-gradient">Excel.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Empowering future engineers through technology, innovation, and collaboration.
            Join the largest technical community at Karunya University.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#contact" className="btn-primary group">
              <span className="relative z-10 flex items-center gap-2">
                Join Our Chapter
                <Users className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a href="#events" className="btn-outline group flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Highlights
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: Users, value: "500+", label: "Active Members" },
              { icon: Calendar, value: "50+", label: "Events/Year" },
              { icon: Trophy, value: "25+", label: "Awards Won" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass-card mb-3 group-hover:neon-border transition-all">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
