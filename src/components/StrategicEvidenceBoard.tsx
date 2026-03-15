"use client";

import { motion } from "framer-motion";
import { Pin, FileText, AlertCircle } from "lucide-react";

const volunteerGroups = [
    {
        role: "Day Co-ordinators",
        volunteers: [
            { name: "Hemamalar D", link: "https://www.linkedin.com/in/hemamalar-d-96642b296", sub: "Day 1" },
            { name: "Raghav G S", link: "https://www.linkedin.com/in/raghav-g-s-a8a425293", sub: "Day 1" },
            { name: "Nivekhitha R H", link: "https://www.linkedin.com/in/nivekhithaatyourservice", sub: "Day 2" },
            { name: "Yuvasri V", link: "https://www.linkedin.com/in/yuvasri-v-993204294", sub: "Day 2" },
            { name: "Poojasri SS", link: "https://www.linkedin.com/in/poojasriss", sub: "Day 3" },
            { name: "Ramya S", link: "https://www.linkedin.com/in/ramya-selvam-279a772b6", sub: "Day 3" },
            { name: "Dilli Ganesan K", link: "https://www.linkedin.com/in/dilli-ganesan-k-21a5a4282", sub: "Day 4" },
            { name: "Yuvabharathi R", link: "https://www.linkedin.com/in/yuvabharathi-r-93a635301", sub: "Day 4" },
            { name: "Hemapriya SJ", link: "https://www.linkedin.com/in/hemapriya-s-j-2005-bz", sub: "Day 4" },
            { name: "Pragathi Suresh Kumar", link: "https://www.linkedin.com/in/pragathi-suresh-kumar-0b16332b7", sub: "Day 5" },
            { name: "Dheepika K", link: "https://www.linkedin.com/in/dheepika-k", sub: "Day 5" },
            { name: "Pasunuri Harshini", link: "https://www.linkedin.com/in/harshini-pasunuri9", sub: "Day 5" },
        ]
    },
    {
        role: "Committee Co-ordinators",
        volunteers: [
            { name: "Dhanusre A", link: "https://www.linkedin.com/in/dhanusre-a-1204b2292", sub: "Design" },
            { name: "Neha M", link: "https://www.linkedin.com/in/nehamurali7", sub: "Design" },
            { name: "Aishwarya Y", link: "https://www.linkedin.com/in/aishwarya-yegappan-254020298", sub: "Documentation" },
            { name: "Shalini M", link: "https://www.linkedin.com/in/shalini-m-1560b5291/", sub: "Documentation" },
            { name: "Saumiya S", link: "https://www.linkedin.com/in/saumiya-senthil-78b39a294", sub: "Video Editing" },
            { name: "Vindhiyasri P", link: "https://www.linkedin.com/in/vindhiyasri-p-354a8b2a0", sub: "Outreach" },
            { name: "Rajadharshini P A", link: "https://www.linkedin.com/in/rajadharshini-pandian-9630b42b7", sub: "Photodesk" },
            { name: "Yogeshwaran Kumar", link: "https://www.linkedin.com/in/yogeshwaran2005", sub: "Technical" },
        ]
    },
    {
        role: "Senior Co-ordinators",
        volunteers: [
            { name: "Amrudha R", link: "https://www.linkedin.com/in/amrudha-rangarajan-5a593627a", sub: "" },
            { name: "Pragadeshwaran K B", link: "https://www.linkedin.com/in/pragadeshwaransprofile", sub: "" },
            { name: "Aditya R", link: "https://www.linkedin.com/in/aditya-r-869819254", sub: "" },
            { name: "Muthurama A", link: "https://www.linkedin.com/in/muthurama-a-307186249", sub: "" },
            { name: "Durga T", link: "https://www.linkedin.com/in/durga-thiruvenkadathan-571797255", sub: "" },
            { name: "Saranyaa P", link: "https://www.linkedin.com/in/saranyaa-palaniappan-927b15258", sub: "" },
            { name: "Harshavardhan M V", link: "https://www.linkedin.com/in/harshavardhan-m-v/", sub: "" },
        ]
    }
];

export function StrategicEvidenceBoard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 relative w-full overflow-hidden rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border-4 border-[#3A2818]"
        >
            {/* Corkboard Background */}
            <div className="absolute inset-0 bg-[#5C4033]" />
            <div
                className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22noiseFilter%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/></svg>')" }}
            />

            {/* Strategic Board Content */}
            <div className="relative min-h-[800px] p-8 md:p-16 flex flex-col items-center">
                
                {/* Board Title/Heading */}
                <div className="w-full flex justify-between items-start mb-16">
                    <div className="border-4 border-red-700/20 text-red-700/20 font-bold uppercase text-2xl px-6 py-2 rotate-[-4deg]">
                        Operational Assets
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-7xl items-start relative z-20">
                    

                    {/* Volunteer List: Coordinators */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="lg:order-1 space-y-4"
                    >
                        <div className="bg-[#fff5a5] p-6 shadow-xl rotate-[-2deg] mb-8 relative">
                            <Pin className="absolute top-2 left-1/2 -translate-x-1/2 text-red-600 w-6 h-6" />
                            <h4 className="font-space text-xs tracking-widest uppercase text-[#433c00]/60 mb-4 pt-2">Day Co-ordinators</h4>
                            <div className="flex flex-wrap gap-x-6 gap-y-3">
                                {volunteerGroups[0].volunteers.map((v, i) => (
                                    <a 
                                        key={i}
                                        href={v.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group block"
                                    >
                                        <span className="font-handwriting text-[#433c00] text-xl group-hover:text-red-600 transition-colors underline decoration-red-500/0 group-hover:decoration-red-500/30">
                                            {v.name}
                                        </span>
                                        <span className="block text-[8px] text-[#433c00]/60 uppercase font-space tracking-tighter font-bold">
                                            {v.sub}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Volunteer List: Team Co-ordinators */}
                    <motion.div 
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="lg:order-2 space-y-4"
                    >
                        <div className="bg-[#f0f9ff]/90 p-6 shadow-xl rotate-[1deg] relative">
                            <Pin className="absolute top-2 left-1/2 -translate-x-1/2 text-blue-600 w-6 h-6" />
                            <h4 className="font-space text-xs tracking-widest uppercase text-blue-800/60 mb-4 pt-2 text-center">Committee Co-ordinators</h4>
                            <div className="space-y-4">
                                {volunteerGroups[1].volunteers.map((v, i) => (
                                    <a 
                                        key={i}
                                        href={v.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group block"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-handwriting text-blue-900 text-lg group-hover:text-blue-600 transition-colors underline decoration-blue-500/0 group-hover:decoration-blue-500/30">
                                                {v.name}
                                            </span>
                                            <span className="text-[10px] text-blue-800/40 uppercase font-space tracking-widest">
                                                {v.sub}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Volunteer List: Thanks to Seniors */}
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="lg:order-3 space-y-4"
                    >
                        <div className="bg-[#fdf2f2]/95 p-6 shadow-xl rotate-[-1deg] relative border border-red-100">
                            <Pin className="absolute top-2 left-1/2 -translate-x-1/2 text-red-700 w-6 h-6" />
                            <h4 className="font-space text-xs tracking-widest uppercase text-red-900/60 mb-4 pt-2 text-center">Senior Co-ordinators</h4>
                            <div className="space-y-4">
                                {volunteerGroups[2].volunteers.map((v, i) => (
                                    <a 
                                        key={i}
                                        href={v.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group block"
                                    >
                                        <div className="text-center">
                                            <span className="font-handwriting text-red-950 text-xl group-hover:text-red-700 transition-colors underline decoration-red-500/0 group-hover:decoration-red-500/30">
                                                {v.name}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className="mt-8 pt-4 border-t border-red-200 flex items-center gap-2 opacity-30">
                                <FileText className="w-4 h-4 text-red-800" />
                                <span className="text-[8px] uppercase font-space tracking-[0.2em] text-red-800">Operational Report #Senior-2024</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Website Team Sticky Note */}
                <div className="w-full max-w-7xl mt-12 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-[#dcfce7] p-6 shadow-lg border border-[#22c55e]/20 rotate-[-4deg] max-w-[280px] relative"
                    >
                        <Pin className="absolute -top-3 left-1/2 -translate-x-1/2 text-green-600 w-5 h-5" />
                        <h4 className="font-space text-[10px] tracking-widest uppercase text-green-800/60 mb-4 pt-2 text-center">Website Team</h4>
                        <div className="space-y-3 text-center">
                            <a 
                                href="https://www.linkedin.com/in/k-guru-prakash-9a4184337/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <span className="font-handwriting text-green-950 text-lg group-hover:text-green-600 transition-colors underline decoration-green-500/0 group-hover:decoration-green-500/30">
                                    K GURU PRAKASH
                                </span>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/hari-prasanth-r-b56454339/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <span className="font-handwriting text-green-950 text-lg group-hover:text-green-600 transition-colors underline decoration-green-500/0 group-hover:decoration-green-500/30">
                                    R HARIPRASANTH
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Glowing borders */}
            <div className="absolute inset-0 border border-white/5 pointer-events-none" />
        </motion.div>
    );
}
