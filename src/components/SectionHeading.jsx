import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16 relative"
    >
      <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 px-3.5 py-1.5 rounded-full mb-3.5 shimmer-badge shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
        </span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-300 text-sm md:text-base mt-3 max-w-2xl leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
