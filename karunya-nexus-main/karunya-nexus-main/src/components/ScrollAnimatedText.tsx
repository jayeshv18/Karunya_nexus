import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollAnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "blur" | "split";
  delay?: number;
  duration?: number;
}

const animations: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(20px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  split: {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  },
};

const ScrollAnimatedText = ({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
}: ScrollAnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={animations[animation]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedText;
