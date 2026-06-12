"use client";

import { motion } from "framer-motion";
import { Reveal } from "./motion-primitives";

const EASE = [0.25, 0.46, 0.45, 0.94];

const groups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Shadcn/ui",
      "Radix UI",
      "Material UI",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    title: "React Native & Mobile",
    items: [
      "React Native",
      "Expo (SDK 53)",
      "Expo Router",
      "NativeWind",
      "Reanimated",
      "EAS Build",
    ],
  },
  {
    title: "State & Data",
    items: [
      "Redux Toolkit",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "AsyncStorage",
    ],
  },
  {
    title: "Backend (Working Knowledge)",
    items: [
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "WebSocket",
      "REST APIs",
      "JWT Auth",
      "Cloudinary",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Chrome DevTools", "Figma", "Agile / Scrum"],
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-md border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-2.5 py-1 font-mono text-xs text-text-secondary">
      {children}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-content px-6 py-20 md:px-12 md:py-[140px]"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent-secondary">
          Core Competencies
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-text-primary md:text-4xl">
          The stack I build with
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {groups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE, delay: (i % 2) * 0.08 }}
            className="rounded-2xl border border-subtle bg-surface p-6 transition-colors duration-300 hover:border-hover hover:bg-elevated md:p-8"
          >
            <h3 className="font-display text-lg font-semibold text-text-primary">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
