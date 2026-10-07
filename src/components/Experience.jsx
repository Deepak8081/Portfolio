import { motion } from "framer-motion";
import { experiences } from "../data/data";
import SectionHeading from "./SectionHeading";
import { FiBriefcase, FiCalendar, FiCheckCircle } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 px-6 md:px-10 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="03 — Career Timeline"
          title="Where I've Contributed"
          subtitle="From initial web engineering internships to scaling high-load production platforms."
        />

        <div className="relative pl-6 md:pl-10">
          {/* Vertical timeline glowing ray */}
          <div className="absolute left-[5px] md:left-[9px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-signal via-lineLight to-line/30" />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, i) => {
              const isCurrent = i === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative group"
                >
                  {/* Timeline Glowing Node */}
                  <span
                    className={`absolute -left-[27px] md:-left-[35px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                      isCurrent
                        ? "bg-signal border-signal shadow-glow ring-4 ring-signal/20 animate-pulseDot"
                        : "bg-surface border-line group-hover:border-signal/50"
                    }`}
                  />

                  {/* Card Container */}
                  <div className="rounded-2xl glass-card card-top-accent shine-hover p-6 md:p-8 bg-surface/80 border border-line hover:border-signal/50 transition-all">
                    {/* Header Row: Role, Company & Date */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-signal transition-colors">
                            {exp.role}
                          </h3>
                          {isCurrent && (
                            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-signal/15 border border-signal/40 text-signal font-semibold">
                              Current Role
                            </span>
                          )}
                        </div>
                        <p className="font-mono text-sm text-signal mt-1 font-medium">
                          {exp.company}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 bg-surface2 px-3 py-1 rounded-full border border-line self-start sm:self-auto">
                        <FiCalendar className="w-3.5 h-3.5 text-signal" />
                        <span>{exp.date}</span>
                      </div>
                    </div>

                    {/* Overview Paragraph */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {exp.desc}
                    </p>

                    {/* Bullet Highlights / Achievements */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="space-y-2 mb-5 pt-3 border-t border-line/60">
                        {exp.highlights.map((h, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed"
                          >
                            <FiCheckCircle className="w-3.5 h-3.5 text-signal shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skills Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[10px] uppercase tracking-wide text-slate-300 hover:text-signal bg-surface2/70 border border-line hover:border-signal/40 rounded-lg px-2.5 py-1 transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
