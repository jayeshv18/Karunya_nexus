import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const featuredVideo = {
  id: "main",
  title: "Welcome to IEEE Karunya",
  thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80",
  duration: "3:45",
};

const videoGallery = [
  {
    id: "1",
    title: "Tech Fest 2024 Highlights",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    duration: "5:20",
  },
  {
    id: "2",
    title: "Hackathon Winners Interview",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    duration: "8:15",
  },
  {
    id: "3",
    title: "Workshop: AI & Machine Learning",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    duration: "12:30",
  },
  {
    id: "4",
    title: "Campus Innovation Day",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
    duration: "6:45",
  },
  {
    id: "5",
    title: "Industry Expert Talk Series",
    thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    duration: "15:00",
  },
];

const VideoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(videoGallery.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(videoGallery.length / 3)) % Math.ceil(videoGallery.length / 3));
  };

  return (
    <section id="videos" className="section-padding relative overflow-hidden bg-card/30">
      <div ref={containerRef} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Media Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Story</span> in Motion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the energy and innovation of our community through our event highlights
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden mb-12 group cursor-pointer neon-border"
        >
          <img
            src={featuredVideo.thumbnail}
            alt={featuredVideo.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform animate-glow-pulse">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{featuredVideo.title}</h3>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                Featured
              </span>
              <span className="text-muted-foreground">{featuredVideo.duration}</span>
            </div>
          </div>
        </motion.div>

        {/* Video Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-semibold">More Highlights</h3>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {videoGallery.map((video) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                  onMouseEnter={() => setHoveredVideo(video.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden glass-card group cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Play overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredVideo === video.id ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-xs font-medium">
                      {video.duration}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-semibold text-sm line-clamp-2">{video.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View All Videos
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
