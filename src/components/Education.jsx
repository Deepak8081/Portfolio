import { motion } from "framer-motion";
import { education } from "../data/data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="py-9 md:py-16 px-6 md:px-10 bg-surface/40 border-y border-line"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="04 — Education" title="Academic background" />

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-surface p-6 flex flex-col"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-2">
                {ed.date}
              </p>
              <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                {ed.school}
              </h3>
              <p className="text-sm text-signal font-mono mt-2">{ed.degree}</p>
              <p className="text-muted text-sm mt-3 leading-relaxed flex-1">
                {ed.desc}
              </p>
              <p className="font-mono text-xs text-amber mt-4 pt-4 border-t border-line">
                {ed.grade}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
