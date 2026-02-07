import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import ScrollAnimatedText from "./ScrollAnimatedText";

const upcomingEvents = [
  {
    name: "Tech Summit 2024",
    date: new Date("2024-03-15T10:00:00"),
  },
  {
    name: "Hackathon Spring",
    date: new Date("2024-04-20T09:00:00"),
  },
];

const videoData = [
  {
    id: 1,
    title: "Server & Network Animation",
    description: "The backbone of our digital infrastructure",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "Infrastructure",
  },
  {
    id: 2,
    title: "Event Highlight Reel",
    description: "Best moments from IEEE events",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Events",
  },
  {
    id: 3,
    title: "IEEE Activities",
    description: "A glimpse into our daily activities",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    category: "Activities",
  },
];

const VideoShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="videos" className="section-padding relative overflow-hidden bg-card/30">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(187 100% 50% / 0.05) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      <div ref={containerRef} className="container-custom relative z-10">
        {/* Event Countdown */}
        <ScrollAnimatedText animation="fadeUp" className="mb-16">
          <div className="glass-card p-8 rounded-2xl neon-border text-center">
            <h3 className="font-display text-2xl font-bold mb-6">
              <span className="text-gradient">Upcoming Events</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <CountdownTimer key={index} targetDate={event.date} eventName={event.name} />
              ))}
            </div>
          </div>
        </ScrollAnimatedText>

        {/* Section Header */}
        <ScrollAnimatedText animation="fadeUp" className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Media Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Story</span> in Motion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the energy and innovation through our video highlights
          </p>
        </ScrollAnimatedText>

        {/* Main Video Player */}
        <ScrollAnimatedText animation="scale" delay={0.2}>
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 group neon-border">
            <motion.img
              key={activeVideo}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={videoData[activeVideo].thumbnail}
              alt={videoData[activeVideo].title}
              className="w-full h-full object-cover"
            />
            
            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            
            {/* Play button with pulse animation */}
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                <div className="relative w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-primary-foreground" />
                    ) : (
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    )}
                  </div>
                </div>
              </div>
            </motion.button>

            {/* Video controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <motion.h3 
                  key={videoData[activeVideo].title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-display text-2xl font-bold mb-1"
                >
                  {videoData[activeVideo].title}
                </motion.h3>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-muted-foreground"
                >
                  {videoData[activeVideo].description}
                </motion.p>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
                >
                  <Maximize className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollAnimatedText>

        {/* Video thumbnails */}
        <div className="grid grid-cols-3 gap-4">
          {videoData.map((video, index) => (
            <motion.button
              key={video.id}
              onClick={() => setActiveVideo(index)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative aspect-video rounded-xl overflow-hidden group ${
                activeVideo === index ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
              }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                </div>
              </div>
              
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs text-primary font-medium">{video.category}</span>
                <h4 className="text-sm font-semibold truncate">{video.title}</h4>
              </div>
              
              {activeVideo === index && (
                <motion.div
                  layoutId="activeVideoIndicator"
                  className="absolute inset-0 border-2 border-primary rounded-xl"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
