import { Github, Linkedin, Package } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/xnafi", label: "GitHub" },
  {
    icon: Package,
    href: "https://www.npmjs.com/package/scroll-animation-framer-motion",
    label: "npm",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/forhadkhandev",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-subtle">
      <div className="mx-auto max-w-content px-6 py-8 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="font-display text-base font-semibold text-text-primary">
              Forhad Khan
            </p>
            <p className="font-mono text-xs text-text-muted">
              Frontend Engineer
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-text-muted transition-colors duration-200 hover:text-accent-primary"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-center font-mono text-xs text-text-muted">
          Designed and built by Forhad Khan · 2025
        </p>
      </div>
    </footer>
  );
}
