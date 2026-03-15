"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function InquestaTitle({ className }: { className?: string }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            // Calculate position relative to the center of the text
            setMousePos({
                x: e.clientX - rect.left - rect.width / 2,
                y: e.clientY - rect.top - rect.height / 2,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Distance from mouse to center of title
    const distance = Math.sqrt(mousePos.x ** 2 + mousePos.y ** 2);
    const isNear = distance < 300; // Trigger glow within 300px

    return (
        <div ref={containerRef} className={cn("relative group select-none", className)}>
            <motion.h2
                className="text-[4rem] md:text-[8rem] font-space font-black tracking-tighter text-[#1a110a] relative z-10 
                   drop-shadow-[2px_2px_2px_rgba(255,255,255,0.05)] shadow-inner"
                style={{
                    WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)",
                }}
                animate={{
                    color: isNear ? "#e1e1e1" : "#1a110a",
                    textShadow: isNear
                        ? "0 0 20px rgba(244, 162, 97, 0.8), 0 0 40px rgba(244, 162, 97, 0.5), 0 0 60px rgba(244, 162, 97, 0.3)"
                        : "2px 2px 5px rgba(0,0,0,0.8)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                INQUESTA 2.0
            </motion.h2>

            {/* Engraved Metallic effect / Light sweep */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                INQUESTA 2.0
            </motion.div>
        </div>
    );
}
