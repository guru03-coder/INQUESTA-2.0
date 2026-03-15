import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Case File", href: "/#case-file" },
    { name: "Evidence", href: "/#evidence" },
    { name: "Events", href: "/#register" },
    { name: "Gallery", href: "/gallery" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[50] transition-all duration-300",
                    scrolled || isOpen ? "bg-detective-brown/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group z-50" data-interactive="true" onClick={() => setIsOpen(false)}>
                        <Search className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                        <span className="font-space font-bold tracking-widest text-lg text-vintage-paper group-hover:text-accent transition-colors">
                            INQUESTA 2.0
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-6 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-sm font-medium text-vintage-paper/80 hover:text-vintage-paper uppercase tracking-wider group py-2"
                                data-interactive="true"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(244,162,97,0.8)]" />
                            </Link>
                        ))}

                        <div className="flex gap-4 ml-4">
                            <Link
                                href="/#events"
                                className="px-6 py-2 border border-accent text-accent font-medium uppercase tracking-wider hover:bg-accent hover:text-detective-brown transition-colors shadow-[0_0_15px_rgba(244,162,97,0.2)] hover:shadow-[0_0_20px_rgba(244,162,97,0.4)]"
                                data-interactive="true"
                            >
                                Register
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-vintage-paper z-50 relative p-2" 
                        onClick={() => setIsOpen(!isOpen)}
                        data-interactive="true"
                    >
                        {isOpen ? <X className="w-8 h-8 text-accent" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[45] bg-detective-brown flex flex-col items-center justify-center p-8 md:hidden"
                    >
                        {/* Background Texture */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/noise.png')] mix-blend-overlay" />
                        
                        <nav className="flex flex-col gap-8 items-center w-full">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-bold text-vintage-paper hover:text-accent transition-colors uppercase tracking-widest block py-4 border-b border-white/5"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + navItems.length * 0.1 }}
                                className="w-full mt-8"
                            >
                                <Link
                                    href="/#events"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center py-6 border-2 border-accent text-accent text-2xl font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-detective-brown transition-all shadow-[0_0_30px_rgba(244,162,97,0.1)]"
                                >
                                    REGISTER NOW
                                </Link>
                            </motion.div>
                        </nav>

                        {/* Detective Footer Decoration */}
                        <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center opacity-20">
                            <div className="w-1 h-20 bg-gradient-to-t from-accent to-transparent mb-4" />
                            <span className="font-space text-[10px] tracking-[0.5em] uppercase text-accent">Authorized Access Only</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
