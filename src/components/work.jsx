"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Package } from "lucide-react";
import { Reveal } from "./motion-primitives";

const EASE = [0.25, 0.46, 0.45, 0.94];

const projects = [
  {
    badge: "PRODUCTION · REAL CLIENT",
    title: "MacZen BD",
    description:
      "A full-scale Apple premium retail platform built for a paying client in Bangladesh. Covers a Next.js storefront, admin dashboard, and a React Native mobile app with a live AI chatbot for product queries.",
    stack: [
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
      "Zustand",
      "Cloudinary",
    ],
    image: "/projects/maczen.png",
    url: "https://maczenbd.com",
    urlLabel: "maczenbd.com",
    featured: true,
  },
  {
    badge: "PRODUCTION · LIVE",
    title: "Daktar Khana",
    description:
      "Real-time clinic queue management system. Patients book online and receive a serial number. The waiting room display board updates live via WebSocket as the doctor advances the queue.",
    stack: [
      "Next.js",
      "TypeScript",
      "WebSocket",
      "Prisma",
      "PostgreSQL",
      "RBAC",
      "Vercel",
    ],
    image: "/projects/daktar.png",
    url: "https://doctor-tirthankar.vercel.app",
    urlLabel: "doctor-tirthankar.vercel.app",
  },
  {
    badge: "DASHBOARD",
    title: "Fleet Stack",
    description:
      "Multi-tenant fleet management super admin dashboard. Live vehicle status tracking, audit logs, license allocation, and growth analytics across all managed accounts.",
    stack: [
      "Next.js",
      "TypeScript",
      "Shadcn/ui",
      "ApexCharts",
      "Recharts",
      "Radix UI",
    ],
    image: "/projects/fleet.png",
    url: "https://fleet-stack.vercel.app/super-admin",
    urlLabel: "fleet-stack.vercel.app",
  },
];

const npmPackage = {
  badge: "OPEN SOURCE",
  title: "scroll-animation-framer-motion",
  description:
    "TypeScript scroll animation utility for React. 1,200+ downloads. 100% test coverage. Prop-based API for fade, slide, and zoom animations.",
  stack: ["TypeScript", "Framer Motion", "Vite", "Rollup"],
  url: "https://www.npmjs.com/package/scroll-animation-framer-motion",
  urlLabel: "npmjs.com/package/scroll-animation-framer-motion",
};

function BrowserFrame({ image, title }) {
  return (
    <div className="overflow-hidden rounded-xl border border-default">
      <div className="flex h-8 items-center gap-1.5 border-b border-subtle bg-elevated px-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]/70" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]/70" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]/70" />
        <span className="mx-auto h-4 w-32 rounded-full bg-[rgba(255,255,255,0.06)]" />
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]" />
      </div>
    </div>
  );
}

function TechTag({ children }) {
  return (
    <span className="rounded-md border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-2.5 py-1 font-mono text-xs text-text-secondary">
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="group rounded-2xl border border-subtle bg-surface p-6 transition-colors duration-300 hover:border-hover hover:bg-elevated hover:shadow-[0_0_40px_rgba(108,99,255,0.08)] md:p-10"
    >
      <div className="grid items-center gap-8 md:grid-cols-[60%_40%]">
        {/* Content */}
        <div>
          <span className="inline-block rounded-full border border-[rgba(34,211,238,0.15)] bg-[rgba(34,211,238,0.08)] px-2.5 py-1 font-mono text-[11px] text-accent-secondary">
            {project.badge}
          </span>
          <h3 className="mt-4 font-display text-[28px] font-bold leading-tight text-text-primary">
            {project.title}
          </h3>
          <p className="mt-3 max-w-prose leading-relaxed text-text-secondary">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <TechTag key={s}>{s}</TechTag>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1 font-medium text-accent-primary"
            >
              Live Site <ArrowUpRight size={16} />
            </a>
            <span className="font-mono text-xs text-text-muted">
              {project.urlLabel}
            </span>
          </div>
        </div>

        {/* Browser mockup */}
        <BrowserFrame image={project.image} title={project.title} />
      </div>
    </motion.article>
  );
}

function NpmCard() {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="group flex flex-col gap-5 rounded-2xl border border-subtle bg-surface p-6 transition-colors duration-300 hover:border-hover hover:bg-elevated hover:shadow-[0_0_40px_rgba(108,99,255,0.08)] md:flex-row md:items-center md:justify-between md:p-10"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-default bg-elevated text-accent-secondary">
          <Package size={22} />
        </div>
        <div>
          <span className="inline-block rounded-full border border-[rgba(34,211,238,0.15)] bg-[rgba(34,211,238,0.08)] px-2.5 py-1 font-mono text-[11px] text-accent-secondary">
            {npmPackage.badge}
          </span>
          <h3 className="mt-3 font-display text-xl font-bold text-text-primary">
            {npmPackage.title}
          </h3>
          <p className="mt-2 max-w-xl leading-relaxed text-text-secondary">
            {npmPackage.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {npmPackage.stack.map((s) => (
              <TechTag key={s}>{s}</TechTag>
            ))}
          </div>
        </div>
      </div>
      <a
        href={npmPackage.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline inline-flex shrink-0 items-center gap-1 font-medium text-accent-primary"
      >
        View on npm <ArrowUpRight size={16} />
      </a>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-content px-6 py-20 md:px-12 md:py-[140px]">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent-secondary">
          Selected Work
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-text-primary md:text-4xl">
          Things I&apos;ve shipped
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
        <NpmCard />
      </div>
    </section>
  );
}
