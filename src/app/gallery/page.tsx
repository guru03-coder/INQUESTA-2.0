"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MagnifyingGlassCursor } from "@/components/MagnifyingGlassCursor";
import { Search, Image as ImageIcon, Camera, FolderOpen } from "lucide-react";
import { StrategicEvidenceBoard } from "@/components/StrategicEvidenceBoard";
import { ScopeMembersBoard } from "@/components/ScopeMembersBoard";

// Dynamically import Canvas particle effect to avoid SSR window errors
const CrimeSceneParticles = dynamic(
  () => import("@/components/CrimeSceneParticles").then((mod) => mod.CrimeSceneParticles),
  { ssr: false }
);

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false);

  const [selectedImage, setSelectedImage] = useState<null | { src: string, title: string, tag: string }>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="bg-detective-brown min-h-screen text-vintage-paper selection:bg-accent selection:text-detective-brown relative">
      <MagnifyingGlassCursor />
      <Navbar />
      
      <div className="relative pt-32 pb-20 px-6">
        <CrimeSceneParticles />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent mb-6">
              <Camera className="w-4 h-4" />
              <span className="font-space text-xs tracking-[0.3em] uppercase">Inquesta 1.0</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-vintage-paper to-vintage-paper/50 bg-clip-text text-transparent mb-6 tracking-tighter">
              EVIDENCE <span className="text-accent underline decoration-stone-800 underline-offset-8">GALLERY</span>
            </h1>
            <p className="max-w-2xl mx-auto text-vintage-paper/60 font-serif italic text-lg leading-relaxed">
              "Every photograph is a piece of the puzzle. Review the visual documentation from the site of the incident to reconstruct the timeline."
            </p>
          </motion.div>

          {/* Gallery Items Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, src: "/gallery/ndli-1.jpg", title: "Site Documentation Alpha", tag: "NDLI-001" },
              { id: 2, src: "/gallery/ndli-2.jpg", title: "Recovered Visual Asset", tag: "NDLI-002" },
              { id: 3, src: "/gallery/ndli-3.jpg", title: "Archive Investigation", tag: "NDLI-003" },
              { id: 4, src: "/gallery/ndli-4.jpg", title: "Field Report Imagery", tag: "NDLI-004" },
              { id: 5, src: "/gallery/ndli-5.jpg", title: "Classified Scene Capture", tag: "NDLI-005" },
              { id: 6, src: "/gallery/ndli-6.jpg", title: "Incident Analysis Photo", tag: "NDLI-006" },
            ].map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative cursor-zoom-in"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[4/5] bg-noir-800/40 border border-white/5 rounded-sm overflow-hidden relative shadow-2xl transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-accent/5">
                    {/* Real Image */}
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-10 group-hover:opacity-5" />

                    {/* Overlay info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-detective-brown via-detective-brown/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-20">
                        <div className="flex items-center gap-2 text-accent mb-2">
                            <FolderOpen className="w-4 h-4" />
                            <span className="font-space text-[10px] tracking-widest uppercase">File #{item.tag}</span>
                        </div>
                        <h3 className="text-xl font-bold text-vintage-paper mb-1">{item.title}</h3>
                        <p className="text-xs text-vintage-paper/50 font-space uppercase tracking-wider">Inquesta 2.0 Archive</p>
                    </div>

                    <div className="absolute top-4 right-4 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 z-30">
                        <div className="p-2 border border-accent/30 bg-detective-brown/80 backdrop-blur-sm rounded-full text-accent shadow-lg">
                            <Search className="w-4 h-4" />
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[100] bg-detective-brown/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-5xl w-full aspect-auto max-h-[90vh] flex flex-col items-center"
                >
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-12 right-0 text-vintage-paper/60 hover:text-accent font-space flex items-center gap-2 transition-colors uppercase tracking-widest text-xs"
                  >
                    Close Archive [ESC]
                  </button>
                  <div className="relative w-full h-full border border-white/10 rounded-sm overflow-hidden bg-noir-900 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <img 
                      src={selectedImage.src} 
                      alt={selectedImage.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-noir-950/90 to-transparent">
                      <div className="flex items-center gap-3 text-accent mb-2">
                        <FolderOpen className="w-4 h-4" />
                        <span className="font-space text-[10px] tracking-widest uppercase">File #{selectedImage.tag}</span>
                      </div>
                      <h2 className="text-3xl font-bold">{selectedImage.title}</h2>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Personnel Dossier (Scope Members) */}
          <ScopeMembersBoard />

          {/* Strategic Evidence Board (Volunteers & Committee) */}
          <StrategicEvidenceBoard />
        </div>
      </div>

      <Footer />
    </main>
  );
}
