import { motion } from "framer-motion";
import { skills } from "../data/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-9 md:py-16 px-6 md:px-10 bg-surface/40 border-y border-line"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="02 — Stack"
          title="Tools I reach for"
          subtitle="Grouped by where they sit in the system, not by how fancy they sound."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (gi % 2) * 0.1 }}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-signal mb-4">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-2 border border-line bg-surface2 rounded-full pl-1.5 pr-3.5 py-1.5 hover:border-signal/50 hover:-translate-y-0.5 transition-all"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white shrink-0">
                      <img
                        src={s.image}
                        alt=""
                        className="w-3.5 h-3.5 object-contain"
                        loading="lazy"
                      />
                    </span>
                    <span className="font-mono text-xs text-ink">{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
