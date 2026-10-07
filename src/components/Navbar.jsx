import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRightIcon } from "./Icons";
import { Bio } from "../data/data";
import { useToast } from "./Toast";
import { FiCopy, FiCheck, FiMail } from "react-icons/fi";

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
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = links.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(Bio.email);
    showToast("Copied " + Bio.email + " to clipboard!");
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 md:px-8 py-3 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 flex items-center justify-between px-5 md:px-7 h-14 md:h-16 card-top-accent ${
          scrolled
            ? "glass-panel bg-surface/90 border-lineLight/80 shadow-2xl shadow-black/80"
            : "bg-surface/50 backdrop-blur-md border border-white/10"
        }`}
      >
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-white"
        >
          <span className="w-8 h-8 rounded-lg bg-surface2 border border-line group-hover:border-signal/60 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.35)] flex items-center justify-center font-display font-bold text-signal text-base transition-all shadow-inner">
            D
          </span>
          <span className="font-medium tracking-tight">
            deepak<span className="text-signal">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2 font-mono text-xs uppercase tracking-widest text-slate-400 bg-surface2/80 border border-line rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner">
          {links.map((l) => {
            const isActive = activeSection === l.href.substring(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-3 py-1 rounded-full transition-all relative inline-block ${
                    isActive
                      ? "text-cyan-300 font-bold"
                      : "hover:text-white text-slate-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-signal/15 border border-signal/40 rounded-full -z-10 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-signal border border-line hover:border-signal/40 bg-surface2/70 px-3.5 py-1.5 rounded-full transition-all hover:bg-surface2"
          >
            <FiMail className="w-3.5 h-3.5 text-signal" />
            <span className="hidden lg:inline text-[11px] uppercase tracking-wider">
              Copy Email
            </span>
          </button>

          {/* Resume CTA */}
          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] md:text-xs uppercase tracking-widest bg-signal text-base font-semibold px-3.5 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-signal-light hover:shadow-glow transition-all"
          >
            <span>Resume</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-ink w-9 h-9 flex flex-col items-center justify-center gap-1.5 bg-surface2 border border-line rounded-xl"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-4 bg-ink transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-ink transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden mt-2 rounded-2xl glass-panel border border-line bg-surface/95"
          >
            <ul className="flex flex-col p-5 gap-3 font-mono text-xs uppercase tracking-widest text-muted">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 px-3 rounded-lg hover:bg-surface2 hover:text-signal transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-line flex items-center justify-between">
                <button
                  onClick={() => {
                    handleCopyEmail();
                    setOpen(false);
                  }}
                  className="inline-flex items-center gap-2 text-[11px] text-muted hover:text-signal py-1"
                >
                  <FiMail className="w-3.5 h-3.5 text-signal" />
                  Copy: {Bio.email}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
