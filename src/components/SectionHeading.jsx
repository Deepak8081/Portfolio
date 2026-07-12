import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-signal mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted mt-3 max-w-xl">{subtitle}</p>}
    </motion.div>
  );
}
