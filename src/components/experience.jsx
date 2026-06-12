"use client";

import { motion } from "framer-motion";
import { Reveal } from "./motion-primitives";

const EASE = [0.25, 0.46, 0.45, 0.94];

const experiences = [
  {
    company: "Elegant Web Studio",
    href: "https://elegantwebstudio.dev",
    role: "Frontend Engineer · Jan 2025 – Present",
    points: [
      "Built and maintained React.js and Next.js apps across multiple client projects, owning components from design handoff to deployment.",
      "Created a shared UI component library (shadcn/ui, Radix UI) standardising design patterns across the team.",
    ],
  },
  {
    company: "Al Jaami Technologies",
    href: "https://aljaami.co.uk",
    role: "Frontend Developer (Contract) · Apr 2023 – Dec 2024",
    points: [
      "Delivered 4 production websites using React.js, handling requirements, build, and deployment.",
      "Improved page performance on legacy codebases via lazy loading, code splitting, and Next.js optimisation.",
    ],
  },
  {
    company: "Remostarts",
    href: "https://remostarts.com",
    role: "Frontend Developer Intern · Dec 2022 – Mar 2023",
    points: [
      "Built admin dashboards and role-based portal UIs using React.js in an Agile/Scrum environment.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-content px-6 py-20 md:px-12 md:py-[140px]"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent-secondary">
          Experience
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-text-primary md:text-4xl">
          Where I&apos;ve worked
        </h2>
      </Reveal>

      <div className="relative mt-12 pl-8">
        {/* Timeline line */}
        <div className="absolute left-[3px] top-2 bottom-2 w-px bg-[var(--border-subtle)]" />

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
              className="group relative rounded-xl border border-transparent p-5 transition-colors duration-300 hover:border-subtle hover:bg-elevated"
            >
              {/* Dot */}
              <span className="absolute -left-[29px] top-7 h-2 w-2 rounded-full bg-accent-primary shadow-[0_0_0_4px_rgba(108,99,255,0.15)] transition-all duration-300 group-hover:shadow-[0_0_0_5px_rgba(108,99,255,0.3)]" />

              <a
                href={exp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-display text-xl font-semibold text-text-primary"
              >
                {exp.company}
              </a>
              <p className="mt-1 font-mono text-[13px] text-text-muted">
                {exp.role}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-[15px] leading-relaxed text-text-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
