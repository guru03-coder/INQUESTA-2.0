"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Paperclip, Tag } from "lucide-react";
import { RetroCountdown } from "./RetroCountdown";

export function EvidenceBoard() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const stringOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    return (
        <section ref={containerRef} id="evidence" className="py-24 bg-[#5C4033] relative overflow-hidden min-h-screen border-t-8 border-b-8 border-[#3A2818] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
            {/* Cork texture overlay */}
            <div
                className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22noiseFilter%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/></svg>')" }}
            />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-space font-bold text-vintage-paper mb-16 uppercase tracking-widest leading-none drop-shadow-md">
                    Exhibit
                    <span className="block mt-2 text-xl text-noir-100 font-light underline decoration-red-600 decoration-4 underline-offset-8">
                        The Evidence Board
                    </span>
                </h2>

                <div className="relative w-full min-h-[600px] md:h-[800px] flex flex-col md:block items-center gap-12 md:gap-0">

                    {/* Red string connection (SVG) - Hidden on mobile */}
                    <motion.svg
                        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
                        style={{ opacity: stringOpacity }}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <path d="M 15 20 Q 30 10 45 40 T 70 30 T 85 65" fill="none" stroke="#dc2626" strokeWidth="0.5" strokeDasharray="2 1" className="animate-[dash_30s_linear_infinite]" />
                        <path d="M 45 40 Q 55 60 30 75 T 10 50" fill="none" stroke="#dc2626" strokeWidth="0.3" strokeDasharray="1 1" className="animate-[dash_20s_linear_infinite]" />
                    </motion.svg>

                    <motion.div
                        initial={{ rotate: -2, opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="md:absolute relative top-0 md:top-[2%] left-0 md:left-[5%] w-full max-w-sm md:w-[28rem] bg-[#fefeec] p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.4)] z-20"
                        data-interactive="true"
                    >
                        <div className="absolute top-2 left-1/2 -ml-3 w-6 h-6 rounded-full bg-red-600 shadow-[2px_2px_5px_rgba(0,0,0,0.5)] border-2 border-red-800 z-30 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white/50" />
                        </div>
                        <p className="font-space mt-4 text-xs tracking-widest text-black/50 border-b border-black/10 pb-2 mb-2 uppercase">CASE OVERVIEW</p>
                        <div className="text-black/80 font-handwriting text-sm md:text-base leading-relaxed space-y-4 text-balance">
                            <p>
                                INQUESTA is the flagship 5 day event organized by the NDLI Club of Sri Sairam Engineering College, providing a dynamic platform for students to showcase their talents, creativity, analytical thinking, and teamwork through a variety of engaging activities. Designed around a unique theme each year to enhance the overall experience, INQUESTA encourages students to explore their abilities while participating in exciting and intellectually stimulating events.
                            </p>
                            <p>
                                For INQUESTA 2.0, the chosen theme is Crime and Investigation, inspired by elements of criminology, mystery solving, and detective challenges. While the theme creates an immersive investigative atmosphere for the events, the primary aim of INQUESTA remains to motivate students to participate, collaborate, and express their diverse skills in a creative and engaging environment.
                            </p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Paperclip className="w-5 h-5 text-gray-400 -rotate-45" />
                        </div>
                    </motion.div>

                    {/* Photo Evidence (Actual Event Poster) */}
                    <motion.div
                        initial={{ rotate: 8, opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="md:absolute relative top-0 md:top-[5%] right-0 md:right-[5%] w-full max-w-sm md:w-96 bg-white p-4 pb-16 shadow-[5px_5px_20px_rgba(0,0,0,0.5)] z-20 mx-auto md:mx-0"
                        data-interactive="true"
                    >
                        <div className="absolute -top-4 right-1/2 translate-x-1/2 w-12 h-16 bg-gray-200/50 backdrop-blur-sm transform origin-bottom border border-white/20 shadow-sm z-30" />

                        <div className="w-full bg-detective-brown aspect-[3/4.2] flex items-center justify-center border border-gray-200 overflow-hidden relative group">
                            <img 
                                src="/posters/sabotage-quest-poster.jpg" 
                                alt="Event Poster" 
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply opacity-30 group-hover:opacity-0 transition-opacity" />
                        </div>
                        <p className="absolute bottom-5 left-6 text-black font-handwriting text-2xl -rotate-2">&quot;Evidence #20: Operation Inquesta&quot;</p>
                    </motion.div>

                    {/* Retro Countdown Timer */}
                    <RetroCountdown />
                </div>
            </div>
        </section>
    );
}
