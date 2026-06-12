"use client";

import { Reveal } from "./motion-primitives";

const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "2", label: "Live products" },
  { value: "1.2k+", label: "npm downloads" },
];

const codeLines = [
  { t: [{ c: "text-accent-secondary", s: "export function" }, { c: "text-text-primary", s: " useQueue" }, { c: "text-text-secondary", s: "(roomId) {" }] },
  { t: [{ c: "text-text-muted", s: "  const" }, { c: "text-text-primary", s: " socket " }, { c: "text-text-secondary", s: "= useSocket(roomId)" }] },
  { t: [{ c: "text-accent-secondary", s: "  useEffect" }, { c: "text-text-secondary", s: "(() => {" }] },
  { t: [{ c: "text-text-secondary", s: "    socket.on(" }, { c: "text-accent-primary", s: '"advance"' }, { c: "text-text-secondary", s: ", setSerial)" }] },
  { t: [{ c: "text-text-secondary", s: "  }, [socket])" }] },
  { t: [{ c: "text-text-muted", s: "  return" }, { c: "text-text-primary", s: " serial" }] },
  { t: [{ c: "text-text-secondary", s: "}" }] },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-content px-6 py-20 md:px-12 md:py-[140px]"
    >
      <div className="grid items-start gap-12 md:grid-cols-[55%_45%]">
        {/* Left */}
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-text-primary md:text-4xl">
            About me
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-base leading-[1.8] text-text-secondary">
            <p>
              I&apos;m a Frontend Engineer based in Sylhet, Bangladesh. I
              specialize in building production-grade web and mobile
              applications with React, Next.js, and React Native.
            </p>
            <p>
              I&apos;ve shipped a full e-commerce platform for a real client, a
              real-time clinic queue system running in an active clinic, and an
              open-source npm package with 1,200+ downloads.
            </p>
            <p>
              I care about clean architecture, component reusability, and
              building things that hold up in production — not just in demos.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[40px] font-bold leading-none text-accent-primary">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs text-text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right — code snippet card */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-subtle bg-surface" />
            <div className="relative overflow-hidden rounded-xl border border-subtle bg-elevated">
              <div className="flex h-9 items-center gap-1.5 border-b border-subtle px-4">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]/70" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]/70" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]/70" />
                <span className="ml-3 font-mono text-xs text-text-muted">
                  useQueue.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
                <code>
                  {codeLines.map((line, i) => (
                    <div key={i}>
                      {line.t.map((tok, j) => (
                        <span key={j} className={tok.c}>
                          {tok.s}
                        </span>
                      ))}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
