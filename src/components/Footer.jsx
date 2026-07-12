import { motion } from "framer-motion";
import { Bio } from "../data/data";
import { GithubIcon, LinkedinIcon, InstaIcon, WhatsappIcon } from "./Icons";
import Magnetic from "./Magnetic";

export default function Footer() {
  return (
    <footer id="contact" className="pt-24 pb-10 px-6 md:px-10 border-t border-line relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-[0.12] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-widest text-signal mb-4"
        >
          06 — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-5xl font-semibold text-ink tracking-tight"
        >
          Let's build something <span className="text-gradient">reliable.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted mt-4 max-w-md mx-auto"
        >
          Open to full stack and DevOps roles, freelance builds, and interesting infrastructure problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-mono text-sm text-signal mt-3"
        >
          <a href={Bio.phoneHref} className="hover:underline">{Bio.phone}</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <Magnetic
            href={Bio.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-signal text-base font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#7ff0e4] transition-colors"
          >
            <WhatsappIcon className="w-4 h-4" /> Message on WhatsApp
          </Magnetic>
          <Magnetic
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-line text-ink font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-signal hover:text-signal transition-colors"
          >
            Message on LinkedIn
          </Magnetic>
        </motion.div>

        <div className="flex items-center justify-center gap-6 mt-12 text-muted">
          <a href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-signal transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-signal transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href={Bio.insta} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-signal transition-colors">
            <InstaIcon className="w-5 h-5" />
          </a>
          <a href={Bio.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-signal transition-colors">
            <WhatsappIcon className="w-5 h-5" />
          </a>
        </div>

        <p className="font-mono text-[11px] text-muted mt-16 pt-8 border-t border-line">
          © 2026 Deepak. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
