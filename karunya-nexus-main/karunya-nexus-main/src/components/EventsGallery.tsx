import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, MapPin } from "lucide-react";

const categories = ["All", "Workshops", "Competitions", "Talks", "Social"];

const events = [
  {
    id: 1,
    title: "AI/ML Workshop Series",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    date: "Jan 2024",
    location: "Tech Hub",
    description: "Hands-on workshop covering deep learning fundamentals and practical applications.",
  },
  {
    id: 2,
    title: "Hackathon 2024",
    category: "Competitions",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    date: "Feb 2024",
    location: "Main Auditorium",
    description: "48-hour coding marathon with 200+ participants from across India.",
  },
  {
    id: 3,
    title: "Industry Leaders Talk",
    category: "Talks",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    date: "Mar 2024",
    location: "Conference Hall",
    description: "Insights from tech leaders at Google, Microsoft, and Amazon.",
  },
  {
    id: 4,
    title: "IoT Bootcamp",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    date: "Apr 2024",
    location: "Electronics Lab",
    description: "Building smart devices with Arduino and Raspberry Pi.",
  },
  {
    id: 5,
    title: "Code Golf Challenge",
    category: "Competitions",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    date: "May 2024",
    location: "Computer Lab",
    description: "Write the shortest code to solve complex problems.",
  },
  {
    id: 6,
    title: "IEEE Annual Meetup",
    category: "Social",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    date: "Jun 2024",
    location: "Campus Grounds",
    description: "Networking event bringing together all IEEE members.",
  },
  {
    id: 7,
    title: "Cybersecurity Summit",
    category: "Talks",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    date: "Jul 2024",
    location: "Seminar Hall",
    description: "Expert panels on emerging cyber threats and protection.",
  },
  {
    id: 8,
    title: "Robotics Championship",
    category: "Competitions",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    date: "Aug 2024",
    location: "Sports Complex",
    description: "Robot battle and innovation showcase competition.",
  },
];

const EventsGallery = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Events & Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Impact</span> Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our workshops, competitions, talks, and community events
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "glass-card text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedEvent(event)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden glass-card">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium">
                    {event.category}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-display text-lg font-semibold mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
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
          <a href="#" className="btn-outline inline-flex items-center gap-2">
            View All Events
            <ExternalLink className="w-4 h-4" />
          </a>
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
                    {selectedEvent.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{selectedEvent.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {selectedEvent.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {selectedEvent.location}
                    </span>
                  </div>
                  <button className="btn-primary w-fit">
                    <span className="relative z-10">Learn More</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsGallery;
