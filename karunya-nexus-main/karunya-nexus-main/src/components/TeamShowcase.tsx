import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "abc",
    role: "Chairperson",
    image: "",
    bio: "Final year CSE, passionate about AI and community building.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "def",
    role: "Vice Chairperson",
    image: "",
    bio: "Electronics enthusiast with a flair for IoT innovations.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "ghi",
    role: "Technical Lead",
    image: "",
    bio: "Full-stack developer and open source contributor.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "jkl",
    role: "Secretary",
    image: "",
    bio: "Organizing expert who keeps the chapter running smoothly.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "mno",
    role: "Treasurer",
    image: "",
    bio: "MBA student with expertise in financial management.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "pqr",
    role: "Events Coordinator",
    image: "",
    bio: "Creative mind behind our most successful events.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
];

const TeamShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl" />

      <div ref={containerRef} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient">Innovators</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate leaders driving IEEE Karunya forward
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              className="group relative"
            >
              <div className="glass-card p-6 rounded-xl transition-all duration-500 hover-glow">
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Status indicator */}
                  <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-neon-green border-2 border-background" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    {[
                      { icon: Linkedin, href: member.social.linkedin },
                      { icon: Twitter, href: member.social.twitter },
                      { icon: Github, href: member.social.github },
                      { icon: Mail, href: `mailto:${member.name.toLowerCase().replace(" ", ".")}@ieee.org` },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
