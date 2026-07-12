import { motion } from "framer-motion";
import { experiences } from "../data/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-9 md:py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="03 — Timeline" title="Where I've worked" subtitle="In order, from the first internship to the role I'm in today." />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 md:-left-10 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    i === 0 ? "bg-signal border-signal" : "bg-base border-line"
                  }`}
                />
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-1">{exp.date}</p>
                <h3 className="font-display text-xl font-semibold text-ink">{exp.role}</h3>
                <p className="font-mono text-sm text-signal mb-3">{exp.company}</p>
                <p className="text-muted leading-relaxed max-w-2xl">{exp.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((s) => (
                    <span key={s} className="font-mono text-[10px] uppercase tracking-wide text-muted border border-line rounded-full px-2.5 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
