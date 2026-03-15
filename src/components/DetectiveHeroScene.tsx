"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function DetectiveHeroScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax effects
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const detectiveY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const tapeX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const chalkOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-detective-brown flex items-center justify-center"
            id="scene-intro"
        >
            {/* Background with parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: bgY }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-detective-brown via-transparent to-detective-brown/60 z-10" />
                <Image
                    src="/images/detective-scene.webp"
                    alt="Crime Scene Background"
                    fill
                    className="object-cover object-center mix-blend-luminosity opacity-80"
                    priority
                />
            </motion.div>

            {/* Main Detective Element */}
            <motion.div
                className="relative z-10 max-w-4xl mx-auto px-6 text-center"
                style={{ y: detectiveY }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative inline-block"
                >
                    {/* Flickering wall sign */}
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-space font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-vintage-paper to-noir-100 drop-shadow-[0_0_25px_rgba(244,162,97,0.3)] select-none">
                        INQUESTA
                        <span className="text-accent animate-pulse"> 2.0</span>
                    </h1>

                    {/* Fingerprint poster / clue on wall */}
                    <motion.div
                        className="absolute -right-12 -top-12 w-32 h-40 border px-2 py-4 border-white/20 bg-noir-200/30 backdrop-blur-sm -rotate-12 rounded shadow-2xl origin-bottom-left mix-blend-overlay hidden md:block"
                        animate={{ rotate: [-12, -10, -12] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        data-interactive="true"
                    >
                        <div className="w-full h-full border border-dashed border-white/40 opacity-50 flex flex-col items-center justify-center">
                            <span className="text-white text-xs uppercase tracking-widest font-space w-full text-center border-b border-white/40 pb-1 mb-2">Exhibit A</span>
                            <div className="w-16 h-16 rounded-full border-2 border-accent border-t-transparent animate-spin opacity-60" style={{ animationDuration: "3s" }} />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.p
                    className="mt-8 text-2xl md:text-4xl text-white font-bold leading-relaxed uppercase tracking-[0.2em] transition-all"
                    style={{
                        textShadow: "0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2)"
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                >
                    NDLI Library week celebration<br />
                    Sri sairam engineering college
                </motion.p>
            </motion.div>

            {/* Crime Scene Tape moving horizontally */}
            <motion.div
                className="absolute z-30 flex whitespace-nowrap overflow-visible opacity-90 -rotate-3 w-[150vw] -left-10 h-16 bg-yellow-400 items-center border-y-4 border-black"
                style={{ x: tapeX, bottom: "15%" }}
            >
                {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i} className="text-black font-black uppercase tracking-widest text-2xl px-8 font-space">
                        CRIME SCENE - DO NOT CROSS -
                    </span>
                ))}
            </motion.div>

            {/* Chalk Outline */}
            <motion.div
                className="absolute left-1/2 -ml-[150px] bottom-10 w-[300px] h-[100px] border-4 border-white border-dashed rounded-[100%] z-0"
                style={{ opacity: chalkOpacity, transform: "perspective(500px) rotateX(70deg)" }}
            />
        </section>
    );
}
