import { motion, useMotionValue, useTransform } from "framer-motion";
import { projects } from "../data/data";
import SectionHeading from "./SectionHeading";
import { GithubIcon, ExternalIcon } from "./Icons";

function TiltCard({ children, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [6, -6]);
  const rotateY = useTransform(x, [-60, 60], [-6, 6]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-9 md:py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="05 — Work"
          title="Things I've built"
          subtitle="A mix of production systems and side projects, newest first."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            >
              <TiltCard className="group rounded-xl border border-line bg-surface overflow-hidden hover:border-signal/40 transition-colors [transform-style:preserve-3d]">
                <div className="p-2.5 pb-0">
                  <div className="rounded-lg overflow-hidden border border-line/70 bg-surface2 shadow-lg shadow-black/30">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1A2129] border-b border-line/70">
                      <span className="w-2 h-2 rounded-full bg-[#F0605C]" />
                      <span className="w-2 h-2 rounded-full bg-[#F0BB4D]" />
                      <span className="w-2 h-2 rounded-full bg-[#45D9C9]" />
                      <span className="ml-2 font-mono text-[9px] text-muted truncate">
                        {
                          (p.webapp || p.github || "app")
                            .replace(/^https?:\/\//, "")
                            .split("/")[0]
                        }
                      </span>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover  object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-opacity duration-500" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-base font-semibold text-ink">
                      {p.title}
                    </h3>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-signal mb-2">
                    {p.date}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] uppercase tracking-wide text-muted border border-line rounded-full px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-ink hover:text-signal transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" /> Code
                      </a>
                    )}
                    {p.webapp && (
                      <a
                        href={p.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-ink hover:text-signal transition-colors"
                      >
                        <ExternalIcon className="w-3.5 h-3.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
