import { motion } from "framer-motion";
import { Zap, Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Youtube, Github, Send } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Timeline", href: "#timeline" },
  ];

  const resources = [
    { name: "IEEE.org", href: "https://ieee.org" },
    { name: "IEEE Madras Section", href: "#" },
    { name: "Karunya University", href: "#" },
    { name: "Student Resources", href: "#" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-card/50 border-t border-border">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="relative">
                <Zap className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              </div>
              <span className="font-display text-xl font-bold">
                IEEE <span className="text-primary">Karunya</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              Empowering future engineers through technology, innovation, and collaboration since 2012.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on events and opportunities.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="mailto:ieee@karunya.edu" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                ieee@karunya.edu
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Karunya University, Coimbatore
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 IEEE Student Branch, Karunya University. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
