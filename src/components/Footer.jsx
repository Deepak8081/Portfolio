import { useState } from "react";
import { motion } from "framer-motion";
import { Bio } from "../data/data";
import { GithubIcon, LinkedinIcon, InstaIcon, WhatsappIcon } from "./Icons";
import Magnetic from "./Magnetic";
import { useToast } from "./Toast";
import {
  FiMail,
  FiPhone,
  FiCopy,
  FiCheck,
  FiSend,
  FiArrowUp,
  FiMessageSquare,
} from "react-icons/fi";

export default function Footer() {
  const { showToast } = useToast();
  const [selectedIntent, setSelectedIntent] = useState("fulltime");

  const copyEmail = () => {
    navigator.clipboard.writeText(Bio.email);
    showToast("Email " + Bio.email + " copied to clipboard!");
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(Bio.phone);
    showToast("Phone " + Bio.phone + " copied to clipboard!");
  };

  const getCustomWhatsAppLink = () => {
    let message = "Hi Deepak! ";
    if (selectedIntent === "fulltime") {
      message += "We came across your portfolio and would love to discuss a Full-Time software engineering opportunity.";
    } else if (selectedIntent === "contract") {
      message += "We have an exciting project and would love to discuss freelance/contract engineering work.";
    } else {
      message += "Came across your portfolio, love your work and wanted to connect!";
    }
    return `https://wa.me/918081590646?text=${encodeURIComponent(message)}`;
  };

  return (
    <footer
      id="contact"
      className="pt-20 md:pt-28 pb-12 px-6 md:px-10 border-t border-line/70 relative overflow-hidden bg-surface/20"
    >
      {/* Background Glow */}
      <div className="ambient-glow top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-signal/15 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Eyebrow & Status */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-signal bg-signal/10 border border-signal/30 px-3.5 py-1.5 rounded-full shimmer-badge mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-signal animate-pulseDot" />
            06 — Ready For Impact • Available Now
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Let's build something{" "}
            <span className="text-gradient-electric font-extrabold">remarkable.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-200 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal"
          >
            Currently open to <span className="text-white font-semibold">full-stack &amp; DevOps roles</span>,{" "}
            <span className="text-cyan-300 font-medium">high-concurrency architecture consulting</span>, and{" "}
            <span className="text-white font-medium">forward-thinking engineering teams</span>.
          </motion.p>
        </div>

        {/* Interactive Quick Connect Hub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl glass-panel p-6 sm:p-8 border border-lineLight bg-surface/85 shadow-2xl mb-12"
        >
          {/* Quick Message Intent Selector */}
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-300 mb-3 text-center sm:text-left font-medium">
              What are you looking to connect on?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: "fulltime", label: "💼 Full-Time Role" },
                { id: "contract", label: "🛠️ Contract / Project" },
                { id: "networking", label: "☕ Network & Connect" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedIntent(opt.id)}
                  className={`py-2.5 px-3 rounded-xl font-mono text-xs transition-all border ${
                    selectedIntent === opt.id
                      ? "bg-signal/15 border-signal text-signal font-semibold shadow-sm"
                      : "bg-surface2/60 border-line text-muted hover:text-ink hover:bg-surface2"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Contact Cards Row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-line/60">
            {/* Email Box */}
            <div className="p-4 rounded-2xl bg-surface2/60 border border-line flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted flex items-center gap-1.5 mb-1">
                  <FiMail className="w-3.5 h-3.5 text-signal" /> Direct Email
                </span>
                <p className="font-mono text-xs text-ink truncate font-medium">
                  {Bio.email}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-line/40">
                <a
                  href={Bio.emailHref}
                  className="flex-1 text-center py-1.5 rounded-lg bg-surface hover:bg-surface2 font-mono text-xs text-signal border border-line transition-colors"
                >
                  Send Email
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-surface hover:bg-surface2 text-muted hover:text-signal border border-line transition-colors"
                  title="Copy email"
                >
                  <FiCopy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* WhatsApp Box */}
            <div className="p-4 rounded-2xl bg-surface2/60 border border-line flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted flex items-center gap-1.5 mb-1">
                  <WhatsappIcon className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp
                </span>
                <p className="font-mono text-xs text-ink font-medium">
                  {Bio.phone}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-line/40">
                <a
                  href={getCustomWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 font-mono text-xs text-[#25D366] border border-[#25D366]/30 transition-colors font-medium"
                >
                  Message Now
                </a>
                <button
                  onClick={copyPhone}
                  className="p-2 rounded-lg bg-surface hover:bg-surface2 text-muted hover:text-[#25D366] border border-line transition-colors"
                  title="Copy phone"
                >
                  <FiCopy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* LinkedIn & Socials Box */}
            <div className="p-4 rounded-2xl bg-surface2/60 border border-line flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted flex items-center gap-1.5 mb-1">
                  <LinkedinIcon className="w-3.5 h-3.5 text-signal" /> Professional Profiles
                </span>
                <p className="font-mono text-xs text-ink font-medium">
                  Connect &amp; Endorse
                </p>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-line/40">
                <a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 rounded-lg bg-surface hover:bg-surface2 font-mono text-xs text-ink hover:text-signal border border-line transition-colors"
                >
                  LinkedIn Profile
                </a>
                <a
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface hover:bg-surface2 text-muted hover:text-signal border border-line transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Icons Strip */}
        <div className="flex items-center justify-center gap-6 text-muted mb-12">
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-signal transition-colors p-2.5 rounded-xl glass-card"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-signal transition-colors p-2.5 rounded-xl glass-card"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-signal transition-colors p-2.5 rounded-xl glass-card"
          >
            <InstaIcon className="w-5 h-5" />
          </a>
          <a
            href={Bio.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-[#25D366] transition-colors p-2.5 rounded-xl glass-card"
          >
            <WhatsappIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-line/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <p>© 2026 {Bio.name}. Designed &amp; Engineered for High Performance.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-muted/70">
              Noida, India • Remote &amp; Onsite
            </span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 hover:text-signal transition-colors"
            >
              Back to top <FiArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
