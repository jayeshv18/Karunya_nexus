import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
  eventName: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, eventName }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="text-center">
      <h3 className="font-display text-xl font-semibold mb-2 text-primary">
        {eventName}
      </h3>
      <div className="flex items-center justify-center gap-3 md:gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="glass-card px-3 py-2 md:px-4 md:py-3 rounded-xl neon-border min-w-[60px] md:min-w-[80px]">
              <motion.span
                key={unit.value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-display text-2xl md:text-4xl font-bold text-gradient block"
              >
                {unit.value.toString().padStart(2, "0")}
              </motion.span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {unit.label}
              </span>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 text-2xl text-primary animate-pulse">
                :
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
