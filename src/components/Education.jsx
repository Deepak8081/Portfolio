import { motion } from "framer-motion";
import { education } from "../data/data";
import SectionHeading from "./SectionHeading";
import { FiAward, FiCalendar, FiBookOpen } from "react-icons/fi";

export default function Education() {
  return (
    <section
      id="education"
      className="py-12 md:py-20 px-6 md:px-10 bg-surface/30 border-y border-line/70 relative"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="04 — Academic Foundations"
          title="Education"
          subtitle="Theoretical and computer science principles backing practical software engineering."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl glass-card card-top-accent shine-hover p-6 flex flex-col justify-between border border-line bg-surface/80 hover:border-signal/50 transition-all group"
            >
              <div>
                {/* Header Date & Icon */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-line/60">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <FiCalendar className="w-3.5 h-3.5 text-signal" />
                    {ed.date}
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-surface2 border border-line text-signal flex items-center justify-center group-hover:border-signal/50 group-hover:bg-surfaceElevated transition-all shadow-inner">
                    <FiBookOpen className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="font-display text-base md:text-lg font-bold text-white group-hover:text-signal transition-colors leading-snug">
                  {ed.school}
                </h3>
                <p className="text-xs text-signal font-mono mt-2 font-medium">
                  {ed.degree}
                </p>
                <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                  {ed.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-line/60 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400 text-[11px] uppercase tracking-wider">
                  Result / CGPA
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-amber bg-amber/10 border border-amber/30 px-3 py-1 rounded-full shadow-sm">
                  <FiAward className="w-3.5 h-3.5" />
                  {ed.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
