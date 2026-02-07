import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Globe, Lightbulb, Rocket } from "lucide-react";
import ScrollAnimatedText from "./ScrollAnimatedText";
import LottieIcon from "./LottieIcon";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const features = [
  {
    icon: Cpu,
    lottie: "circuit" as const,
    title: "Technical Excellence",
    description: "Hands-on workshops, hackathons, and technical talks from industry experts.",
  },
  {
    icon: Globe,
    lottie: "network" as const,
    title: "Global Network",
    description: "Connect with IEEE's worldwide community of 400,000+ members across 160 countries.",
  },
  {
    icon: Lightbulb,
    lottie: "pulse" as const,
    title: "Innovation Hub",
    description: "Transform ideas into reality through projects, research, and startup incubation.",
  },
  {
    icon: Rocket,
    lottie: "circuit" as const,
    title: "Career Growth",
    description: "Access internships, job opportunities, and mentorship from tech leaders.",
  },
];

const stats = [
  { value: 12, suffix: "+", label: "Years Active" },
  { value: 500, suffix: "+", label: "Members" },
  { value: 100, suffix: "+", label: "Events Hosted" },
  { value: 50, suffix: "+", label: "Industry Partners" },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" 
      />

      <div ref={containerRef} className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollAnimatedText animation="fadeUp" className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass-card text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Shaping the Future of
            <span className="text-gradient"> Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IEEE Student Branch at Karunya University is a vibrant community of tech enthusiasts,
            innovators, and future engineers working together to advance technology for humanity.
          </p>
        </ScrollAnimatedText>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <ScrollAnimatedText key={index} animation="scale" delay={index * 0.1}>
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 0 30px hsl(187 100% 50% / 0.3)"
                }}
                className="glass-card p-6 text-center hover-glow group cursor-default"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            </ScrollAnimatedText>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollAnimatedText key={index} animation="fadeUp" delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  rotateY: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-6 group hover-glow cursor-default h-full"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <LottieIcon type={feature.lottie} size={32} />
                </motion.div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                
                {/* Hover indicator */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-sm font-medium">Learn more</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </motion.div>
            </ScrollAnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
