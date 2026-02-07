import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: AnimatedButtonProps) => {
  const baseStyles = "relative overflow-hidden font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "px-8 py-4 rounded-lg text-primary-foreground bg-gradient-to-r from-primary to-accent",
    outline: "px-8 py-4 rounded-lg border-2 border-primary text-primary hover:text-primary-foreground",
    ghost: "px-6 py-3 rounded-lg text-muted-foreground hover:text-primary",
  };

  const Component = motion.a;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{ x: ["0%", "200%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
      />
      
      {/* Glow effect on hover */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 opacity-0 bg-gradient-to-r from-primary/50 to-accent/50 blur-xl"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Outline fill effect */}
      {variant === "outline" && (
        <motion.div
          className="absolute inset-0 bg-primary -z-10"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
        />
      )}
      
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
};

export default AnimatedButton;
