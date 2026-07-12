import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRightIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/80 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        <a href="#top" className="font-mono text-sm text-ink tracking-tight">
          <span className="text-signal">{"{"}</span> deepak <span className="text-signal">{"}"}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-signal transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/1K0ho_rkWsHbKs14pifqNLEa2frXLAGBn/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] md:text-xs uppercase tracking-widest bg-signal text-base px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-[#7ff0e4] transition-colors shadow-lg shadow-signal/20"
        >
          Resume <ArrowUpRightIcon className="w-3.5 h-3.5" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink w-9 h-9 flex flex-col items-center justify-center gap-1.5 ml-1 bg-surface/70 backdrop-blur-sm rounded-full border border-line"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-base border-b border-line"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 font-mono text-xs uppercase tracking-widest text-muted">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="hover:text-signal transition-colors">
                    {l.label}
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
