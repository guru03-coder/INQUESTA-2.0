"use client";

import { useEffect, useRef } from "react";

export function CrimeSceneParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number, type: 'dust' | 'fog' }[] = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 3 + 1,
                dx: (Math.random() - 0.5) * 0.5,
                dy: Math.random() * -1 - 0.1, // Float upward
                alpha: Math.random() * 0.5 + 0.1,
                type: Math.random() > 0.8 ? 'fog' : 'dust'
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p) => {
                ctx.beginPath();
                if (p.type === 'dust') {
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(230, 204, 178, ${p.alpha})`; // Vintage paper dust color
                } else {
                    // Fog circles (larger, blurrier)
                    ctx.arc(p.x, p.y, p.r * 15, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.05})`;
                }
                ctx.fill();

                // Move
                p.x += p.dx;
                p.y += p.dy;

                // Reset if offscreen
                if (p.y < -50) {
                    p.y = height + 50;
                    p.x = Math.random() * width;
                }
                if (p.x < -50) p.x = width + 50;
                if (p.x > width + 50) p.x = -50;
            });

            requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-10 mix-blend-screen opacity-60"
        />
    );
}
