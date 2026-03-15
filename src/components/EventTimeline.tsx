"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { eventsData, Event } from "@/data/events";
import { MapPin, SearchCode, CalendarDays, X, Clock, ChevronRight, ChevronLeft, Users, Award, ShieldCheck, Phone, ExternalLink } from "lucide-react";

export function EventTimeline() {
    const [selectedDay, setSelectedDay] = useState<Event | null>(null);
    const [pageIndex, setPageIndex] = useState(0); // 0: Briefing, 1: Timeline, 2: Protocols, 3: Phases

    const handleSelectDay = (event: Event) => {
        setSelectedDay(event);
        setPageIndex(0);
    };

    return (
        <section id="events" className="py-24 bg-detective-brown relative min-h-screen">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-space font-bold text-vintage-paper mb-4 uppercase tracking-widest border-l-4 border-accent pl-6">
                        Investigation (Events)<br />Timeline
                    </h2>
                    <p className="text-noir-100 max-w-xl pl-6">Review the 5-day sequence of scheduled events to reconstruct the incident. Click on a day to view classified details.</p>
                </div>

                <div className="relative">
                    {/* Timeline Center Line */}
                    <div className="absolute left-[3px] md:left-1/2 top-0 bottom-0 w-1 bg-noir-200/50 transform md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {eventsData.map((event, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={event.id} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">

                                    {/* Timeline Dot */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="absolute left-[-5px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-accent border-4 border-detective-brown z-10 shadow-[0_0_10px_#F4A261]"
                                    />

                                    {/* Content Container (Clickable) */}
                                    <motion.button
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                                        className={`w-full md:w-5/12 pl-8 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"} text-left appearance-none focus:outline-none`}
                                        onClick={() => handleSelectDay(event)}
                                        data-interactive="true"
                                        aria-label={`View details for ${event.day}`}
                                    >
                                        <div className="bg-crime-dark/50 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:border-accent group-hover:bg-crime-dark shadow-xl hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(244,162,97,0.1)] transition-all duration-300">

                                            <div className={`flex items-center gap-3 mb-4 text-accent ${isEven ? "md:justify-end" : ""}`}>
                                                {isEven ? (
                                                    <>
                                                        <span className="font-space text-2xl tracking-widest font-bold">{event.day}</span>
                                                        <CalendarDays className="w-5 h-5" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <CalendarDays className="w-5 h-5" />
                                                        <span className="font-space text-2xl tracking-widest font-bold">{event.day}</span>
                                                    </>
                                                )}
                                            </div>

                                            <h3 className="text-2xl font-bold text-vintage-paper mb-1">{event.title}</h3>
                                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                                                <CalendarDays className="w-4 h-4 text-accent" />
                                                <span className="text-accent/90 font-space text-sm tracking-wide">{event.date}</span>
                                                <span className="text-white/20 mx-2">|</span>
                                                <h4 className="text-noir-100 font-space uppercase tracking-widest text-sm">{event.subtitle}</h4>
                                            </div>

                                            <p className="text-white/70 mb-6 leading-relaxed">
                                                {event.shortDescription}
                                            </p>

                                            <div className={`flex flex-col gap-2 text-sm text-vintage-paper/80 ${isEven ? "md:items-end" : "md:items-start"}`}>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-accent/70" />
                                                    {event.location}
                                                </div>
                                                {event.badge && (
                                                    <div className={`inline-block mt-1 px-2.5 py-0.5 bg-[#591C1C] text-[#F9A261] border border-[#F9A261]/20 rounded-sm text-[10px] font-space tracking-wider uppercase font-bold shadow-sm`}>
                                                        {event.badge}
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2 mt-4 text-accent font-space uppercase text-xs tracking-widest group-hover:underline decoration-2 underline-offset-4">
                                                    Open Classified File &rarr;
                                                </div>
                                            </div>
                                        </div>
                                    </motion.button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Animated Detailed Day Modal */}
            <AnimatePresence mode="wait">
                {selectedDay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
                            onClick={() => setSelectedDay(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            data-interactive="true"
                        />

                        {/* Modal Content - Book UI */}
                        <div className="relative w-full max-w-6xl h-[90vh] md:h-[85vh] flex flex-col items-center justify-center z-10 pointer-events-none">
                            <motion.div
                                initial={{ y: 50, opacity: 0, scale: 0.95, rotateX: 10 }}
                                animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
                                exit={{ y: 50, opacity: 0, scale: 0.95, rotateX: 10 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                style={{ perspective: 1500 }}
                                className="relative w-full h-full flex flex-col md:flex-row shadow-[0_40px_80px_rgba(0,0,0,1),0_0_80px_rgba(244,162,97,0.1)] rounded-sm bg-[#2A1B12] p-2 md:p-3 border-[3px] border-[#3A2818] overflow-hidden pointer-events-auto"
                                data-interactive="true"
                            >
                                {/* Page Content Container */}
                                <AnimatePresence mode="wait" custom={pageIndex}>
                                    <motion.div
                                        key={pageIndex}
                                        custom={pageIndex}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -50, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute inset-0 flex flex-col md:flex-row p-2 md:p-3"
                                    >
                                        {/* Left Page (Desktop Spread Page 1 or Mobile Current Page) */}
                                        <div className={`w-full md:w-1/2 bg-[#171310] relative overflow-y-auto scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent p-6 md:p-12 shadow-[inset_-25px_0_50px_rgba(0,0,0,0.95)] border border-white/5 rounded-l-sm rounded-r-none flex flex-col ${
                                            // On mobile, only show if it's the specific active part
                                            "md:flex " + (pageIndex % 2 === 0 ? "flex " : "hidden ")
                                        }`}>
                                            {/* Mobile Page Indicator */}
                                            <div className="md:hidden flex items-center justify-between mb-4 pb-2 border-b border-white/10 opacity-50">
                                                <span className="font-space text-[10px] tracking-[0.3em] uppercase text-accent">
                                                    {pageIndex < 2 ? "Investigation" : "Operations"}
                                                </span>
                                                <span className="font-space text-[10px] tracking-[0.3em] uppercase text-accent">Part 0{pageIndex + 1} // 04</span>
                                            </div>

                                            {/* Logic matches pageIndex 0 (Briefing) or 2 (Protocols) */}
                                            {pageIndex < 2 ? (
                                                <>
                                                     <div className="flex justify-between items-start mb-6">
                                                         <div className="flex flex-col">
                                                             <div className="flex items-center gap-4 text-accent mb-1">
                                                                 <CalendarDays className="w-8 h-8 opacity-80" />
                                                                 <span className="font-space text-3xl md:text-4xl tracking-widest font-bold">{selectedDay.day}</span>
                                                             </div>
                                                             <div className="flex items-center gap-2 pl-12 text-accent/60 font-space text-sm tracking-widest">
                                                                 <span>{selectedDay.date}</span>
                                                             </div>
                                                         </div>
                                                         {selectedDay.registrationLink && (
                                                             <a 
                                                                 href={selectedDay.registrationLink} 
                                                                 target="_blank" 
                                                                 rel="noopener noreferrer"
                                                                 className="px-6 py-2 bg-accent text-detective-brown font-space font-bold text-sm tracking-widest rounded-full hover:bg-accent/80 transition-all shadow-[0_0_15px_rgba(244,162,97,0.3)] hover:scale-105 active:scale-95 flex items-center gap-2 mt-2"
                                                             >
                                                                 REGISTER
                                                                 <ExternalLink className="w-4 h-4" />
                                                             </a>
                                                         )}
                                                     </div>
                                                    <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-vintage-paper to-accent bg-clip-text text-transparent mb-2 drop-shadow-md leading-tight">{selectedDay.title}</h3>
                                                    <h4 className="text-xl text-noir-100 font-space uppercase tracking-widest mb-8 pb-8 border-b border-white/10 uppercase">
                                                        {selectedDay.subtitle}
                                                    </h4>



                                                    <div className="flex-grow">
                                                        <h5 className="hidden md:flex font-space text-accent/80 text-sm tracking-widest uppercase mb-4 items-center gap-2">
                                                            Situation Briefing
                                                        </h5>
                                                        <p className="text-lg leading-relaxed text-vintage-paper/90 font-serif drop-shadow-sm italic">
                                                            &quot;{selectedDay.fullDescription}&quot;
                                                        </p>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <h5 className="font-space text-accent/80 text-sm tracking-widest uppercase mb-6 flex items-center gap-2 border-b border-accent/20 pb-4">
                                                        <ShieldCheck className="w-5 h-5 text-accent" /> Protocols & Regulations
                                                    </h5>
                                                    
                                                    <div className="space-y-6">
                                                        {selectedDay.rules && selectedDay.rules.map((rule, i) => (
                                                            <div key={i} className="flex gap-4 items-start group">
                                                                <div className="w-2 h-2 rounded-full bg-accent/40 mt-2 shrink-0 group-hover:bg-accent transition-colors" />
                                                                <p className="text-vintage-paper/80 font-serif text-lg leading-snug">{rule}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {selectedDay.teamSize && (
                                                        <div className="mt-12 p-6 bg-accent/5 border border-accent/10 rounded-lg">
                                                            <h5 className="font-space text-accent/80 text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
                                                                <Users className="w-5 h-5" /> Team Configuration
                                                            </h5>
                                                            <p className="text-vintage-paper font-serif text-lg italic">{selectedDay.teamSize}</p>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </div>

                                        {/* Spine / Divider (Desktop only) */}
                                        <div className="hidden md:flex w-12 shrink-0 bg-gradient-to-r from-[#0a0806] via-[#1a110b] to-[#0a0806] shadow-[inset_0_0_20px_rgba(0,0,0,1)] z-20 relative justify-center">
                                            <div className="w-[1px] h-full bg-black shadow-[1px_0_0_rgba(255,255,255,0.05)] opacity-50" />
                                            <div className="absolute inset-x-0 top-10 h-[1px] bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                                            <div className="absolute inset-x-0 bottom-10 h-[1px] bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]" />
                                        </div>

                                        {/* Right Page (Desktop Spread Page 2 or Mobile Next Page) */}
                                        <div className={`w-full md:w-1/2 bg-[#171310] relative overflow-y-auto scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent p-6 md:p-12 shadow-[inset_25px_0_50px_rgba(0,0,0,0.95)] border border-white/5 rounded-r-sm rounded-l-none transition-all flex flex-col ${
                                            // On mobile, only show if it's the specific active part
                                            "md:flex " + (pageIndex % 2 !== 0 ? "flex " : "hidden ")
                                        }`}>
                                            {/* Mobile Page Indicator */}
                                            <div className="md:hidden flex items-center justify-between mb-4 pb-2 border-b border-white/10 opacity-50">
                                                <span className="font-space text-[10px] tracking-[0.3em] uppercase text-accent">
                                                    {pageIndex < 2 ? "Investigation" : "Operations"}
                                                </span>
                                                <span className="font-space text-[10px] tracking-[0.3em] uppercase text-accent">Part 0{pageIndex + 1} // 04</span>
                                            </div>
                                            
                                            {pageIndex < 2 ? (
                                                <>
                                                    <div className="space-y-12">
                                                        <div>
                                                            <h5 className="font-space text-accent/80 text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                                                                {selectedDay.showLogoInsteadOfTimeline ? (
                                                                    <><SearchCode className="w-5 h-5" /> Operation Classified</>
                                                                ) : (
                                                                    <><Clock className="w-5 h-5" /> Operation Timeline</>
                                                                )}
                                                            </h5>
                                                            {selectedDay.showLogoInsteadOfTimeline && selectedDay.image ? (
                                                                <div className="flex flex-col items-center justify-center py-6 md:py-10 bg-black/40 rounded-xl border border-white/5 shadow-inner group">
                                                                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                                                                        <div className="absolute inset-x-0 inset-y-0 rounded-full bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all duration-700 animate-pulse" />
                                                                        <img 
                                                                            src={selectedDay.image} 
                                                                            alt={`${selectedDay.title} Logo`}
                                                                            className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(244,162,97,0.3)] group-hover:scale-105 transition-transform duration-500 [clip-path:circle(49%)]" 
                                                                        />
                                                                    </div>
                                                                    <p className="mt-6 text-accent/60 font-space text-[10px] tracking-[0.3em] uppercase">Authorized Access Only</p>
                                                                </div>
                                                            ) : (
                                                                <div className="space-y-4">
                                                                    {selectedDay.activities.map((act, i) => (
                                                                        <div key={i} className="flex gap-4 border-l-2 border-accent/20 pl-4 py-2 hover:border-accent/80 transition-colors bg-white/5 rounded-r-sm hover:bg-white/10 group">
                                                                            <span className="text-accent font-space text-sm w-20 shrink-0 mt-0.5 group-hover:glow-accent transition-all">{act.time}</span>
                                                                            <span className="text-vintage-paper/90 font-serif text-lg">{act.name}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div>
                                                            <h5 className="font-space text-accent/80 text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                                                                <MapPin className="w-5 h-5" /> Primary Investigation Site
                                                            </h5>
                                                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                                                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                                                <p className="text-accent font-space uppercase tracking-widest text-sm">{selectedDay.location}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-auto pt-10">
                                                        <div className="bg-black/60 border border-red-900/30 p-6 rounded-lg relative overflow-hidden group shadow-2xl">
                                                            <div className="absolute inset-0 bg-red-900/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-pulse mix-blend-screen" />
                                                            <h5 className="font-space text-red-500 text-[10px] tracking-[0.3em] uppercase mb-3 flex items-center gap-2 relative z-10">
                                                                <SearchCode className="w-4 h-4" /> RECOVERED EVIDENCE
                                                            </h5>
                                                            <p className="font-handwriting text-3xl md:text-4xl text-red-500/90 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] relative z-10 leading-relaxed transform -rotate-1 group-hover:-rotate-0 transition-transform duration-500">
                                                                &quot;{selectedDay.clue}&quot;
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="space-y-10 flex-grow flex flex-col justify-center">
                                                        {selectedDay.rounds && (
                                                            <div>
                                                                <h5 className="font-space text-accent/80 text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
                                                                    <Award className="w-5 h-5" /> Operation Phases
                                                                </h5>
                                                                <div className="space-y-6">
                                                                    {selectedDay.rounds.map((round, i) => (
                                                                        <div key={i} className="relative pl-6 border-l border-white/10 py-1">
                                                                            <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-accent" />
                                                                            <h6 className="text-accent font-space text-sm font-bold uppercase tracking-widest mb-2">{round.name}</h6>
                                                                            <p className="text-vintage-paper/70 font-serif leading-relaxed italic text-base">{round.description}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {selectedDay.evidenceImage && (
                                                            <motion.div 
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="relative bg-black/40 rounded-sm border border-white/5 p-4 shadow-inner mt-4 group"
                                                            >
                                                                <div className="absolute top-2 right-2 px-2 py-0.5 border border-red-500/30 bg-red-950/20 text-red-500 text-[8px] font-space tracking-widest uppercase rounded-sm z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                                                                    Classified File
                                                                </div>
                                                                <img 
                                                                    src={selectedDay.evidenceImage} 
                                                                    alt="Recovered Evidence" 
                                                                    className="w-full h-auto rounded shadow-2xl border border-white/5 opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.02]"
                                                                />
                                                            </motion.div>
                                                        )}
                                                    </div>

                                                    {selectedDay.coordinators && (
                                                        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            {selectedDay.coordinators.map((coord, i) => (
                                                                <div key={i} className="group">
                                                                    <p className="text-[10px] font-space text-noir-100 uppercase tracking-widest mb-1">Field Coordinator</p>
                                                                    <p className="text-vintage-paper font-bold text-lg mb-1">{coord.name}</p>
                                                                    <a href={`tel:${coord.phone}`} className="text-accent/60 font-space text-sm flex items-center gap-2 hover:text-accent transition-colors">
                                                                        <Phone className="w-3 h-3" /> {coord.phone}
                                                                    </a>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                                
                                <div className="absolute top-6 right-6 flex items-center gap-3 z-[200]">
                                    <button
                                        onClick={() => setSelectedDay(null)}
                                        className="p-3 rounded-full bg-black/60 border border-white/10 text-white/40 hover:text-accent hover:border-accent/40 transition-all backdrop-blur-md shadow-xl"
                                        data-interactive="true"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                
                                {/* Pagination Controls */}
                                <div className="absolute bottom-10 left-0 right-0 flex justify-between px-10 md:px-14 z-[200] pointer-events-none">
                                    <button
                                        onClick={() => {
                                            // On mobile, back by 1. On desktop, back by 2 to align spreads.
                                            const isMobile = window.innerWidth < 768;
                                            setPageIndex(prev => Math.max(prev - (isMobile ? 1 : 2), 0));
                                        }}
                                        disabled={pageIndex === 0}
                                        className={`p-4 rounded-full bg-accent/10 border border-accent/20 text-accent transition-all backdrop-blur-md shadow-2xl pointer-events-auto hover:bg-accent/20 disabled:opacity-0 disabled:pointer-events-none ${pageIndex > 0 ? "animate-pulse" : ""}`}
                                        data-interactive="true"
                                        aria-label="Previous Page"
                                    >
                                        <ChevronLeft className="w-8 h-8" />
                                    </button>
                                    <button
                                        onClick={() => {
                                            const isMobile = window.innerWidth < 768;
                                            setPageIndex(prev => Math.min(prev + (isMobile ? 1 : 2), (isMobile ? 3 : 2)));
                                        }}
                                        disabled={pageIndex >= 3 || (window.innerWidth >= 768 && pageIndex >= 2)}
                                        className={`p-4 rounded-full bg-transparent border border-accent/20 text-accent transition-all backdrop-blur-md pointer-events-auto hover:bg-accent/10 hover:border-accent/40 disabled:opacity-0 disabled:pointer-events-none flex items-center justify-center ${pageIndex < 3 ? "animate-pulse" : ""}`}
                                        data-interactive="true"
                                        aria-label="Next Page"
                                    >
                                        <ChevronRight className="w-8 h-8" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
