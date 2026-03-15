"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Fingerprint, Award, FileSearch } from "lucide-react";

export function ScopeMembersBoard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 relative w-full overflow-hidden rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border-4 border-[#1A1A1A]"
        >
            {/* Dark Slate/Metal Background */}
            <div className="absolute inset-0 bg-[#242424]" />
            <div
                className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22noiseFilter%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/></svg>')" }}
            />

            {/* Strategic Board Content */}
            <div className="relative min-h-[700px] md:min-h-[850px] p-8 md:p-20 flex flex-col items-center">
                
                {/* Board Header Stamp */}
                <div className="w-full flex justify-between items-start mb-12">
                    <div className="border-4 border-accent/20 text-accent/20 font-bold uppercase text-xl md:text-3xl px-4 py-2 rotate-[-3deg] pointer-events-none z-10">
                        Personnel Files
                    </div>
                    <div className="bg-accent/5 border border-accent/20 rounded-full px-4 py-2 flex items-center gap-2 text-accent/50 text-[10px] tracking-widest uppercase">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Authorized Access Only</span>
                    </div>
                </div>

                <div className="relative z-20 w-full max-w-5xl flex flex-col md:flex-row gap-12 items-center">
                    
                    {/* The Main Dossier (Image) */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex-1 relative group"
                    >
                        {/* Pin decoration */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-noir-200 shadow-xl border-2 border-noir-400 z-30 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-black/40" />
                        </div>

                        <div className="bg-white p-4 pb-12 shadow-[20px_20px_60px_rgba(0,0,0,0.7)] border border-gray-100 rotate-1 relative">
                            <div className="relative bg-noir-800">
                                <img 
                                    src="/gallery/scope-collage.jpg" 
                                    alt="Scope Members"
                                    className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-accent/5 mix-blend-overlay opacity-10 pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Meta Data / Field Notes */}
                    <div className="w-full md:w-80 space-y-8 relative">
                        
                        {/* Note 1: Library Quote */}
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#fff5a5] p-6 shadow-xl rotate-3 relative group"
                        >
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/20 backdrop-blur-sm transform origin-bottom border border-white/20" />
                            <Award className="w-6 h-6 text-[#433c00] opacity-30 mb-3" />
                            <h4 className="font-space text-[10px] tracking-widest uppercase text-[#433c00]/60 mb-2">Primary Archive Insight</h4>
                            <p className="font-handwriting text-[#433c00] text-xl leading-tight">
                                &quot;The only thing you absolutely <span className="underline decoration-red-500/30">must know</span>, is the location of the library.&quot;
                            </p>
                            <p className="mt-2 text-[10px] text-right text-black/40">- File Reference: EINSTEIN</p>
                        </motion.div>

                        {/* Note 2: Staff Expertise */}
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-noir-800/80 backdrop-blur-md p-6 border-l-2 border-accent shadow-2xl -rotate-2 group"
                        >
                            <FileSearch className="w-5 h-5 text-accent opacity-40 mb-3" />
                            <p className="text-vintage-paper/70 text-sm leading-relaxed font-serif italic mb-4">
                                &quot;Expertise is the silent engine of every investigation. These staff members are the guardians of our collective intelligence.&quot;
                            </p>
                            <div className="flex items-center gap-2 opacity-30">
                                <Fingerprint className="w-4 h-4 text-accent" />
                                <span className="text-[10px] uppercase font-space tracking-widest">Personnel Vetted</span>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Background SVG connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="20" cy="20" r="0.5" fill="currentColor" />
                    <circle cx="80" cy="20" r="0.5" fill="currentColor" />
                    <path d="M 20 20 L 80 20" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 1" />
                </svg>

                {/* Footer Stamp */}
                <div className="absolute bottom-12 left-12 opacity-5 pointer-events-none select-none z-0">
                    <h4 className="text-[10rem] font-black text-accent/10 tracking-tighter uppercase leading-none italic rotate-[-10deg]">
                        SCOPE
                    </h4>
                </div>

            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        </motion.div>
    );
}
