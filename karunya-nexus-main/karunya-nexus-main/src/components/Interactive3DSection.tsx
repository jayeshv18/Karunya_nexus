import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import IEEE3DLogo from "./IEEE3DLogo";
import ScrollAnimatedText from "./ScrollAnimatedText";
import LottieIcon from "./LottieIcon";

const features = [
  {
    icon: "circuit" as const,
    title: "Cutting-Edge Tech",
    description: "Access to latest technologies and tools",
  },
  {
    icon: "network" as const,
    title: "Global Network",
    description: "Connect with 400,000+ IEEE members worldwide",
  },
  {
    icon: "pulse" as const,
    title: "Innovation Hub",
    description: "Transform ideas into impactful projects",
  },
];

const Interactive3DSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background grid animation */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />

      <div ref={containerRef} className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <ScrollAnimatedText animation="fadeLeft">
              <span className="inline-block px-4 py-1 rounded-full glass-card text-primary text-sm font-medium mb-4">
                Interactive Experience
              </span>
            </ScrollAnimatedText>

            <ScrollAnimatedText animation="fadeUp" delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Explore the Future of
                <span className="text-gradient block">Engineering</span>
              </h2>
            </ScrollAnimatedText>

            <ScrollAnimatedText animation="fadeUp" delay={0.2}>
              <p className="text-muted-foreground text-lg mb-8">
                Drag to rotate the 3D model and experience our commitment to innovation.
                IEEE Karunya is where technology meets creativity.
              </p>
            </ScrollAnimatedText>

            {/* Feature cards with Lottie icons */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <ScrollAnimatedText key={index} animation="fadeRight" delay={0.3 + index * 0.1}>
                  <motion.div
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="glass-card p-4 rounded-xl flex items-center gap-4 cursor-pointer hover-glow group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <LottieIcon type={feature.icon} size={32} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    <motion.div
                      className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                </ScrollAnimatedText>
              ))}
            </div>
          </div>

          {/* Right side - 3D Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <IEEE3DLogo />
            
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 right-10 glass-card px-4 py-2 rounded-full"
            >
              <span className="text-sm font-medium text-primary">500+ Members</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 left-10 glass-card px-4 py-2 rounded-full"
            >
              <span className="text-sm font-medium text-accent">Est. 2012</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interactive3DSection;
