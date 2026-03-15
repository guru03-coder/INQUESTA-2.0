"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

import { MagnifyingGlassCursor } from "@/components/MagnifyingGlassCursor";
import { Navbar } from "@/components/Navbar";
import { DetectiveHeroScene } from "@/components/DetectiveHeroScene";
import { FingerprintScanner } from "@/components/FingerprintScanner";
import { EvidenceBoard } from "@/components/EvidenceBoard";
import { EventTimeline } from "@/components/EventTimeline";
import { RegisterSection } from "@/components/RegisterSection";
import { Footer } from "@/components/Footer";

// Dynamically import Canvas particle effect to avoid SSR window errors
const CrimeSceneParticles = dynamic(
  () => import("@/components/CrimeSceneParticles").then((mod) => mod.CrimeSceneParticles),
  { ssr: false }
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      className={`bg-detective-brown min-h-screen text-vintage-paper selection:bg-accent selection:text-detective-brown relative ${!accessGranted ? "h-[200vh] overflow-hidden" : ""}`}
    >
      <AnimatePresence>
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <MagnifyingGlassCursor />
            <Navbar />

            <div className="relative">
              <CrimeSceneParticles />
              <DetectiveHeroScene />
            </div>

            <FingerprintScanner
              granted={accessGranted}
              onGrantAccess={() => setAccessGranted(true)}
            />

            {/* Reveal remaining content only when access is granted */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: accessGranted ? 1 : 0,
                height: accessGranted ? "auto" : 0
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="overflow-hidden"
            >
              <EvidenceBoard />
              <EventTimeline />
              <RegisterSection />
              <Footer />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Egg / Secret Pass (hidden visibly but exists in DOM) */}
      <div className="sr-only text-accent">SECRET_PASS_0x9FA8</div>
    </main>
  );
}
