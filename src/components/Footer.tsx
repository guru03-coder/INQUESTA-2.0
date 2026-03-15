import { Fingerprint } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#110B08] text-vintage-paper/50 py-12 relative overflow-hidden border-t-2 border-white/5">
            {/* Texture overlay */}
            <div
                className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22noiseFilter%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/></svg>')" }}
            />

            <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-2xl font-space font-bold tracking-widest text-vintage-paper uppercase mb-1">INQUESTA 2.0</h2>
                    <p className="text-xs tracking-widest uppercase font-medium text-accent/80 mb-1">NDLI CLUB</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase opacity-70">Sri Sairam Engineering College</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] md:text-sm font-space uppercase tracking-widest">
                    <a href="mailto:ndli.sairam@gmail.com" className="hover:text-accent transition-colors flex items-center gap-2" data-interactive="true">
                        Email: ndli.sairam@gmail.com
                    </a>
                    <span className="w-1 h-1 bg-white/20 rounded-full hidden md:block" />
                    <a 
                        href="https://www.instagram.com/onboard_321?igsh=MTIxbjg3cDltN3IwbA==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-accent transition-colors flex items-center gap-2" 
                        data-interactive="true"
                    >
                        Instagram
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <a 
                        href="https://www.google.com/maps/place/Sri+Sairam+Engineering+College/data=!4m2!3m1!1s0x0:0x8e7a30529f9ef227?sa=X&ved=1t:2428&ictx=111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-accent transition-colors group"
                        data-interactive="true"
                    >
                        <Fingerprint className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors" />
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">Sri Sairam Engineering College, Chennai</span>
                    </a>
                </div>

            </div>
        </footer>
    );
}
