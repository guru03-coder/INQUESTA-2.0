"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Fingerprint, Lock, Unlock } from "lucide-react";

interface FingerprintScannerProps {
    onGrantAccess?: () => void;
    granted?: boolean;
}

export function FingerprintScanner({ onGrantAccess, granted = false }: FingerprintScannerProps) {
    const [scanning, setScanning] = useState(false);

    const handleScan = () => {
        if (granted) return;
        setScanning(true);
        setTimeout(() => {
            setScanning(false);
            if (onGrantAccess) onGrantAccess();
        }, 2500);
    };

    return (
        <section id="case-file" className="min-h-screen py-24 bg-detective-brown flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(230,204,178,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(230,204,178,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="z-10 text-center max-w-lg mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-space font-bold text-vintage-paper mb-4 uppercase tracking-widest border-b border-accent/30 pb-4 inline-block">
                        Access Terminal
                    </h2>
                    <p className="text-noir-100 uppercase tracking-widest text-sm">
                        {granted ? "Identity Verified" : "Authentication Required"}
                    </p>
                </motion.div>

                <div className="relative group mx-auto w-64 h-64 flex items-center justify-center">
                    {/* Scanner Base Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-noir-200 shadow-[inset_0_0_20px_rgba(43,27,18,1)]" />

                    {/* Interactive Button */}
                    <button
                        onMouseDown={handleScan}
                        onTouchStart={handleScan}
                        className="relative z-20 outline-none focus:outline-none"
                        data-interactive="true"
                        disabled={granted || scanning}
                    >
                        <motion.div
                            animate={{
                                scale: scanning ? 0.95 : 1,
                                boxShadow: granted
                                    ? "0 0 50px rgba(74, 222, 128, 0.4)"
                                    : scanning
                                        ? "0 0 40px rgba(244, 162, 97, 0.6)"
                                        : "0 0 0px rgba(0,0,0,0)"
                            }}
                            className="w-48 h-48 rounded-full bg-crime-dark flex flex-col items-center justify-center border border-white/10 transition-colors"
                        >
                            <Fingerprint
                                className={`w-24 h-24 mb-2 transition-all duration-300 ${granted ? "text-green-400" : scanning ? "text-accent" : "text-noir-100 group-hover:text-vintage-paper"
                                    }`}
                                strokeWidth={1}
                            />
                            {!granted && !scanning && (
                                <span className="text-xs uppercase tracking-widest font-space text-noir-100 group-hover:text-accent">Press & Hold</span>
                            )}
                        </motion.div>
                    </button>

                    {/* Scanner Line Animation */}
                    {scanning && (
                        <motion.div
                            initial={{ top: "10%" }}
                            animate={{ top: "90%" }}
                            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "linear" }}
                            className="absolute left-1/4 right-1/4 h-1 bg-accent/80 shadow-[0_0_15px_#F4A261] z-30 pointer-events-none"
                        />
                    )}

                    {/* Rings Animation */}
                    {scanning && (
                        <>
                            <motion.div className="absolute inset-0 rounded-full border border-accent" animate={{ scale: [1, 1.2, 1.4], opacity: [0.8, 0.3, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
                            <motion.div className="absolute inset-0 rounded-full border border-accent delay-75" animate={{ scale: [1, 1.2, 1.4], opacity: [0.8, 0.3, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} />
                        </>
                    )}
                </div>

                {/* Status Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: granted ? 1 : 0 }}
                    className="mt-12 flex flex-col items-center"
                >
                    <div className="flex items-center gap-3 text-green-400 text-xl font-space tracking-widest mb-4">
                        <Unlock className="w-6 h-6" />
                        <span>ACCESS GRANTED</span>
                    </div>
                    <p className="text-vintage-paper">The restricted case files have been unlocked. Proceed your scroll below.</p>
                </motion.div>
            </div>
        </section>
    );
}
