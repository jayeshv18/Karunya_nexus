import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, Mail, Users } from "lucide-react";

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div ref={containerRef} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-card text-primary text-sm font-medium mb-6">
            Ready to Start?
          </span>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Join the <span className="text-gradient">Revolution</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Be part of a community that's shaping the future of technology. 
            Connect with innovators, access exclusive resources, and accelerate your career.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="#contact" className="btn-primary group text-lg px-10 py-5">
              <span className="relative z-10 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Join Our Chapter
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a href="#videos" className="btn-outline group flex items-center gap-2 text-lg px-10 py-5">
              <Play className="w-5 h-5" />
              Watch Highlights
            </a>
          </motion.div>

          {/* Additional CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <a href="#contact" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <a href="#events" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              Upcoming Events
            </a>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              Newsletter Signup
            </a>
          </motion.div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 glass-card rounded-2xl p-8 neon-border"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Active Members" },
              { value: "50+", label: "Annual Events" },
              { value: "100%", label: "Growth Rate" },
              { value: "24/7", label: "Community Support" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
