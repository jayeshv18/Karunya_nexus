import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, MapPin } from "lucide-react";
import ScrollAnimatedText from "./ScrollAnimatedText";

const categories = ["All", "Data Structures", "Robotics", "AI/ML", "Cybersecurity", "IoT", "Web Dev"];

const events = [
  {
    id: 1,
    title: "DSA Bootcamp Series",
    category: "Data Structures",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80",
    date: "Jan 2024",
    location: "CS Lab",
    description: "Master data structures and algorithms with hands-on coding sessions.",
  },
  {
    id: 2,
    title: "RoboWars Championship",
    category: "Robotics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    date: "Feb 2024",
    location: "Tech Arena",
    description: "Battle bots compete in the ultimate robotics showdown.",
  },
  {
    id: 3,
    title: "Deep Learning Workshop",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    date: "Mar 2024",
    location: "AI Lab",
    description: "Dive deep into neural networks and transformer architectures.",
  },
  {
    id: 4,
    title: "Ethical Hacking Bootcamp",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    date: "Apr 2024",
    location: "Cyber Lab",
    description: "Learn penetration testing and security fundamentals.",
  },
  {
    id: 5,
    title: "Smart Home IoT Project",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    date: "May 2024",
    location: "Electronics Lab",
    description: "Build smart home automation with Arduino and Raspberry Pi.",
  },
  {
    id: 6,
    title: "Full-Stack Hackathon",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    date: "Jun 2024",
    location: "Main Hall",
    description: "48-hour coding marathon with React, Node.js, and cloud deployment.",
  },
  {
    id: 7,
    title: "Graph Algorithms Challenge",
    category: "Data Structures",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    date: "Jul 2024",
    location: "CS Lab",
    description: "Competitive programming focused on graph theory.",
  },
  {
    id: 8,
    title: "Drone Building Workshop",
    category: "Robotics",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
    date: "Aug 2024",
    location: "Maker Space",
    description: "Design and build autonomous drones from scratch.",
  },
];

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <section id="events" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={containerRef} className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollAnimatedText animation="fadeUp" className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Projects & Events
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Innovation</span> Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore workshops, hackathons, and projects across diverse tech domains
          </p>
        </ScrollAnimatedText>

        {/* Category Filter with enhanced animations */}
        <ScrollAnimatedText animation="scale" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 relative overflow-hidden ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollAnimatedText>

        {/* Events Grid with staggered animations */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedEvent(event)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden glass-card">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at center, hsl(187 100% 50% / 0.15) 0%, transparent 70%)",
                    }}
                  />
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    {event.category}
                  </motion.div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <motion.h3 
                      className="font-display text-lg font-semibold mb-2 line-clamp-2"
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                    >
                      {event.title}
                    </motion.h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Corner glow on hover */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a 
            href="#" 
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(187 100% 50% / 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-card rounded-2xl overflow-hidden neon-border"
            >
              <motion.button
                onClick={() => setSelectedEvent(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto overflow-hidden">
                  <motion.img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                    layoutId={`image-${selectedEvent.id}`}
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <motion.span 
                    className="inline-block w-fit px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {selectedEvent.category}
                  </motion.span>
                  <motion.h3 
                    className="font-display text-2xl md:text-3xl font-bold mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedEvent.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedEvent.description}
                  </motion.p>
                  <motion.div 
                    className="flex items-center gap-4 text-sm text-muted-foreground mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {selectedEvent.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {selectedEvent.location}
                    </span>
                  </motion.div>
                  <motion.button 
                    className="btn-primary w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="relative z-10">Learn More</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsGallery;
