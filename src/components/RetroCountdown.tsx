"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function RetroCountdown() {
  const calculateTimeLeft = (): TimeLeft => {
    // Setting target date to 5 days in the future for demonstration
    // In a real app, this would be a specific event date
    const targetDate = new Date("2026-03-20T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center flex-1">
      <div className="relative">
        {/* Always-on glow behind numbers */}
        <div className="absolute inset-0 bg-[#F4A261] blur-2xl opacity-40 scale-150" />
        <span
          className="text-5xl md:text-7xl font-space font-bold text-[#E8943A] relative z-10 tabular-nums tracking-tighter"
          style={{
            textShadow: '0 0 10px rgba(244,162,97,0.8), 0 0 30px rgba(244,162,97,0.5), 0 0 60px rgba(244,162,97,0.3), 0 0 100px rgba(244,162,97,0.15)'
          }}
        >
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-space font-black text-[#E8943A]/50 uppercase tracking-[0.2em] mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ rotate: -2, opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.6, type: "spring" }}
      className="md:absolute relative bottom-0 md:bottom-[-5%] left-0 md:left-[40%] md:transform md:-translate-x-1/2 w-full max-w-md md:w-[32rem] bg-[#1a1512] p-6 md:p-8 shadow-[10px_10px_30px_rgba(0,0,0,0.5),0_0_40px_rgba(244,162,97,0.08)] z-30 flex flex-col items-center justify-center border border-accent/20 rounded-sm"
      data-interactive="true"
    >
      {/* Red Push Pin */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent shadow-[0_0_12px_rgba(244,162,97,0.6),2px_4px_10px_rgba(0,0,0,0.4)] border-2 border-accent/80 z-40 flex items-center justify-center transition-transform hover:scale-110">
        <div className="w-1.5 h-1.5 rounded-full bg-white/40 absolute top-0.5 left-1" />
      </div>

      <div className="w-full text-center">
        <h3
          className="font-space text-[10px] md:text-xs font-bold text-accent/70 tracking-[0.3em] uppercase mb-6 md:mb-8 pb-3 border-b border-accent/10"
          style={{ textShadow: '0 0 10px rgba(244,162,97,0.3)' }}
        >
          Investigation Begins In:
        </h3>

        <div className="flex justify-between items-center w-full max-w-[280px] md:max-w-md mx-auto">
          <TimeUnit value={timeLeft.days} label="dd" />
          <TimeUnit value={timeLeft.hours} label="hh" />
          <TimeUnit value={timeLeft.minutes} label="mm" />
          <TimeUnit value={timeLeft.seconds} label="ss" />
        </div>
      </div>
    </motion.div>
  );
}
