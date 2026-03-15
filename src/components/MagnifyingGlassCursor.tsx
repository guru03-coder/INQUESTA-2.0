"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MagnifyingGlassCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over an interactive element
            const target = e.target as HTMLElement;
            const isInteractive = target.closest("a, button, [data-interactive='true'], input");
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return (
        <>
            {/* Magnifying Glass Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border-2 border-[#8b5a2b] shadow-[inset_0_0_10px_rgba(0,0,0,0.5),0_5px_15px_rgba(0,0,0,0.5)] overflow-hidden"
                style={{
                    backdropFilter: "brightness(1.3) contrast(1.2) saturate(1.2)",
                    WebkitBackdropFilter: "brightness(1.3) contrast(1.2) saturate(1.2)",
                }}
                animate={{
                    x: mousePosition.x - (isHovering ? 50 : 30),
                    y: mousePosition.y - (isHovering ? 50 : 30),
                    width: isHovering ? 100 : 60,
                    height: isHovering ? 100 : 60,
                    backgroundColor: isHovering ? "rgba(244, 162, 97, 0.05)" : "rgba(255,255,255,0.02)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.5 }}
            >
                {/* Vintage glass glare effect */}
                <div className="absolute top-[5%] left-[10%] w-[80%] h-[40%] bg-gradient-to-b from-white/30 to-transparent rounded-full" />

                {/* Inner crosshair or details can go here */}
                <div className="absolute inset-1 rounded-full border border-white/20" />
            </motion.div>

            {/* Center dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-accent mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    width: 8,
                    height: 8,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.1 }}
            />
        </>
    );
}
