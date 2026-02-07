import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Rocket, Star, Trophy, Zap } from "lucide-react";

const milestones = [
  {
    year: "2012",
    title: "Chapter Founded",
    description: "IEEE Student Branch established at Karunya University with 25 founding members.",
    icon: Rocket,
  },
  {
    year: "2015",
    title: "First National Recognition",
    description: "Awarded Best Emerging Student Branch in IEEE Madras Section.",
    icon: Award,
  },
  {
    year: "2017",
    title: "200 Members Milestone",
    description: "Reached 200+ active members and hosted first international conference.",
    icon: Users,
  },
  {
    year: "2019",
    title: "Innovation Hub Launch",
    description: "Established dedicated makerspace and innovation lab for student projects.",
    icon: Zap,
  },
  {
    year: "2021",
    title: "Virtual Excellence",
    description: "Successfully transitioned to virtual events, reaching 1000+ participants globally.",
    icon: Star,
  },
  {
    year: "2023",
    title: "Regional Champions",
    description: "Won IEEE Region 10 Outstanding Student Branch Award.",
    icon: Trophy,
  },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="section-padding relative overflow-hidden bg-card/30">
      <div ref={containerRef} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            A Legacy of <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to regional recognition, explore our journey of growth and impact
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {/* Milestone Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} ml-12 md:ml-0`}>
                  <div className="glass-card p-6 hover-glow inline-block">
                    <span className="text-primary font-display text-2xl font-bold">{milestone.year}</span>
                    <h3 className="font-display text-xl font-semibold mt-2 mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                    <milestone.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
