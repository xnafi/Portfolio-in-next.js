"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94];

export default function Hero() {
  const meshRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!meshRef.current) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 16;
    const y = (e.clientY / innerHeight - 0.5) * 16;
    meshRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Radial gradient mesh */}
      <div
        ref={meshRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 20% 50%, rgba(108,99,255,0.1) 0%, transparent 70%)",
        }}
      />
      {/* Grid overlay */}
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-content px-6 md:px-12"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted"
        >
          Frontend Engineer — Bangladesh
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display font-bold leading-[1.05] tracking-[-0.03em] text-text-primary"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
        >
          Building products
          <br />
          <span className="gradient-text">people actually use.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary"
        >
          Frontend Engineer focused on React, Next.js, and React Native. I&apos;ve
          shipped a production e-commerce platform and a real-time clinic system
          — from architecture to deployment.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-lg bg-accent-primary px-7 py-3 text-[15px] font-medium text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            style={{ boxShadow: "0 0 0 rgba(108,99,255,0)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 24px rgba(108,99,255,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 0 rgba(108,99,255,0)")
            }
          >
            View Work
          </a>
          <a
            href="/forhad-khan-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="rounded-lg border border-default px-7 py-3 text-[15px] text-text-secondary transition-all duration-200 hover:border-hover hover:text-text-primary"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden>
        <div className="h-10 w-px overflow-hidden bg-[rgba(255,255,255,0.1)]">
          <div className="scroll-line h-full w-full bg-accent-primary" />
        </div>
      </div>
    </section>
  );
}
