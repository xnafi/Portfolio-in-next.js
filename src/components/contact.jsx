"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion-primitives";

const EASE = [0.25, 0.46, 0.45, 0.94];

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: "forhadkhan2011@gmail.com",
    cta: "Send a message",
    href: "mailto:forhadkhan2011@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+880 1762-057784",
    cta: "Message me",
    href: "https://wa.me/8801762057784",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/forhadkhandev",
    cta: "Connect",
    href: "https://linkedin.com/in/forhadkhandev",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-content px-6 py-20 text-center md:px-12 md:py-[140px]"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent-secondary">
          Contact
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-text-primary md:text-5xl">
          Let&apos;s work together.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary">
          Open to frontend engineering roles, freelance projects, and
          collaborations. Remote worldwide.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
              whileHover={{ scale: 1.01 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-subtle bg-surface p-8 text-center transition-colors duration-300 hover:border-hover hover:bg-elevated hover:shadow-[0_0_40px_rgba(108,99,255,0.08)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-default bg-elevated text-accent-primary transition-colors group-hover:text-accent-secondary">
                <Icon size={20} />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-text-muted">
                {card.label}
              </span>
              <span className="break-all text-[15px] text-text-primary">
                {card.value}
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent-primary">
                {card.cta} <ArrowUpRight size={14} />
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
