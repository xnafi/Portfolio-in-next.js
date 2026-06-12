"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["work", "skills", "experience", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-subtle backdrop-blur-md bg-[rgba(6,6,8,0.8)]">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#top"
          className="font-display text-xl font-bold text-accent-primary"
          aria-label="Forhad Khan home"
        >
          FK
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-accent-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-primary"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          {/* Available badge */}
          <span className="hidden items-center gap-2 rounded-full border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.1)] px-3 py-1.5 sm:flex">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-green-400" />
            <span className="font-mono text-xs text-green-400">Available</span>
          </span>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="text-text-secondary transition-colors hover:text-text-primary md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-base md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-display text-xl font-bold text-accent-primary">
                FK
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-text-secondary"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-semibold text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
