"use client";

import { motion } from "framer-motion";
import { Terminal, Fingerprint } from "lucide-react";
import { InquestaTitle } from "./InquestaTitle";

export function RegisterSection() {
    return (
        <section id="register" className="relative min-h-screen flex items-center justify-center bg-[#1a1412] px-6 py-24 overflow-hidden border-t-8 border-noir-200">

            {/* Background Texture - Classified form background */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none mix-blend-luminosity"
                style={{
                    backgroundImage: "radial-gradient(var(--color-detective-brown) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                }}
            />

            <div className="max-w-4xl w-full z-10 flex flex-col items-center">

                {/* Title reveal component */}
                <InquestaTitle className="mb-12" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full bg-[#f4ebd0] p-8 md:p-16 shadow-[20px_20px_60px_rgba(0,0,0,0.9)] border border-[#d6c9b3] relative -rotate-1 max-w-[90rem] mx-auto min-h-[800px] md:min-h-[1000px] overflow-hidden"
                    data-interactive="true"
                >
                    {/* Background Grid Pattern (Classified Document Feel) */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

                    {/* Top secret stamps */}
                    <div className="absolute top-12 right-12 border-4 border-red-700 text-red-700 font-bold uppercase text-3xl md:text-5xl px-6 py-3 rotate-[15deg] opacity-80 mix-blend-multiply pointer-events-none z-30">
                        TOP SECRET
                    </div>
                    <div className="absolute top-36 right-20 border-2 border-black/40 text-black/40 font-bold uppercase text-lg md:text-2xl px-4 py-2 -rotate-[5deg] opacity-60 pointer-events-none font-space z-30">
                        DEPT. OF TECH INV.
                    </div>

                    {/* Pinned Posters / Evidence Elements */}
                    <div className="relative w-full h-full min-h-[700px] flex flex-wrap justify-center gap-12 p-8 md:p-20">
                        {[
                            { path: "/posters/sabotage-quest-poster.jpg", rotate: -4, label: "Day 1: Sabotage" },
                            { path: "/posters/clavis-enigma-poster.jpg", rotate: 3, label: "Day 2: Enigma" },
                            { path: "/posters/spotlight-saga-poster.jpg", rotate: -2, label: "Day 3: Spotlight" },
                            { path: "/posters/gazette-poster.jpg", rotate: 5, label: "Day 4: Gazette" },
                            { path: "/posters/mission-unsolved-poster.jpg", rotate: -3, label: "Day 5: Unsolved" },
                        ].map((poster, index) => (
                            <motion.div
                                key={poster.path}
                                initial={{ opacity: 0, y: 30, rotate: 0 }}
                                whileInView={{ opacity: 1, y: 0, rotate: poster.rotate }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative bg-white p-4 pb-16 shadow-[10px_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[20px_20px_45px_rgba(0,0,0,0.4)] transition-all group cursor-pointer w-full max-w-sm md:max-w-md lg:max-w-lg"
                                whileHover={{ scale: 1.05, zIndex: 40, rotate: 0 }}
                            >
                                {/* Pin/Tape Effect - Bigger for bigger posters */}
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-red-600 shadow-[3px_3px_8px_rgba(0,0,0,0.4)] border-2 border-red-800 z-10 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-white/40" />
                                </div>

                                <div className="aspect-[3/4] overflow-hidden bg-noir-800 border-2 border-gray-100">
                                    <img 
                                        src={poster.path} 
                                        alt={poster.label} 
                                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                                    />
                                </div>
                                <p className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-2xl text-black/70 italic">
                                    Evidence #{index + 1}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty space for that "Classified Document" feel */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-[0.05] pointer-events-none select-none z-0 scale-150">
                        <InquestaTitle />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
