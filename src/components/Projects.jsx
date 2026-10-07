import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/data";
import SectionHeading from "./SectionHeading";
import { GithubIcon, ExternalIcon, ArrowRightIcon } from "./Icons";
import { FiLayers, FiMaximize2, FiX, FiCheck, FiCpu, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "production", label: "Production & Featured" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
  ];

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    if (filter === "production")
      return projects.filter((p) => p.featured || p.category === "production");
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const moyoProject = projects.find((p) => p.id === 0);
  const otherProjects = filteredProjects.filter((p) => filter !== "all" || p.id !== 0);

  return (
    <section id="projects" className="py-12 md:py-24 px-6 md:px-10 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="05 — Production & Projects"
          title="Featured Work"
          subtitle="A showcase of live production platforms, enterprise tools, and full-stack software architectures."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-10 p-1.5 rounded-2xl bg-surface2/80 border border-line/80 w-max max-w-full backdrop-blur-md shadow-sm">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all ${
                filter === c.key
                  ? "bg-signal text-slate-950 font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-surface/60"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* MOYO Flagship Spotlight (Only when viewing "all" or "production") */}
        {(filter === "all" || filter === "production") && moyoProject && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-3xl glass-panel card-top-accent border border-signal/40 bg-gradient-to-b from-surface/90 to-surface2/90 overflow-hidden shadow-2xl relative group"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-signal/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 md:p-10">
              {/* Left Column: Image Preview Mockup (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border border-line bg-base shadow-2xl group/img relative">
                  {/* Browser Mockup Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-surface2 border-b border-line">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F0605C]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F0BB4D]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#45D9C9]" />
                    </div>
                    <span className="font-mono text-[10px] text-muted">
                      https://moyo.in/services/noida
                    </span>
                    <button
                      onClick={() => setSelectedProject(moyoProject)}
                      className="text-muted hover:text-signal transition-colors"
                      title="Expand preview"
                    >
                      <FiMaximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Screenshot */}
                  <div
                    onClick={() => setSelectedProject(moyoProject)}
                    className="relative cursor-pointer overflow-hidden aspect-[16/10] bg-surface"
                  >
                    <img
                      src={moyoProject.image}
                      alt={moyoProject.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                      <span className="font-mono text-xs text-signal inline-flex items-center gap-1.5 bg-base/80 px-3 py-1.5 rounded-full border border-signal/40">
                        <FiMaximize2 className="w-3.5 h-3.5" /> Click to view details
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Project Story & Specs (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-signal/15 border border-signal/40 text-signal inline-flex items-center gap-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulseDot" />
                      Production Flagship
                    </span>
                    <span className="font-mono text-[11px] text-muted">
                      {moyoProject.date}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
                    <span className="text-gradient-electric">MOYO</span> — All-in-One Service Ecosystem
                  </h3>

                  <div className="flex items-center gap-2 mt-2 mb-4 flex-wrap">
                    <span className="highlight-pill-amber text-[10px]">
                      170+ Live Services
                    </span>
                    <span className="highlight-pill text-[10px]">
                      Admin Panel &amp; CRM
                    </span>
                    <span className="highlight-pill text-[10px]">
                      3 Microservices
                    </span>
                    <span className="font-mono text-[10px] text-slate-300 bg-surface2 px-2 py-0.5 rounded border border-line">
                      AWS EC2
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    A production-grade, hyper-local service platform powering{" "}
                    <span className="highlight-keyword">170+ live services</span> across Noida. Engineered customer portals, vendor systems, and a dedicated <span className="text-white font-medium">Operations Admin Panel &amp; CRM</span> for real-time dispatch, vendor management, and business analytics. Backend split into 3 microservices with NestJS &amp; Express, PostgreSQL with Prisma &amp; Knex, and automated Docker pipelines on AWS EC2.
                  </p>

                  {/* Architecture Checklist */}
                  <div className="space-y-2 mb-6 font-mono text-xs text-ink/90">
                    <div className="flex items-center gap-2">
                      <FiCheck className="w-4 h-4 text-signal shrink-0" />
                      <span>Custom Admin Panel &amp; Operations CRM with RBAC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck className="w-4 h-4 text-signal shrink-0" />
                      <span>3 Microservices (NestJS &amp; Express.js)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck className="w-4 h-4 text-signal shrink-0" />
                      <span>PostgreSQL schema optimization with Prisma &amp; Knex</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck className="w-4 h-4 text-signal shrink-0" />
                      <span>Automated Docker &amp; AWS EC2 CI/CD deployment</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {moyoProject.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-wider text-muted bg-surface2 px-2.5 py-1 rounded-lg border border-line"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-line/60">
                  {moyoProject.github && (
                    <a
                      href={moyoProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-full bg-signal text-base font-semibold hover:bg-signal-light hover:shadow-glow transition-all"
                    >
                      <GithubIcon className="w-4 h-4" /> View Repository
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(moyoProject)}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-full border border-line hover:border-signal/50 text-ink hover:text-signal transition-colors"
                  >
                    Quick Specs
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {otherProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <article className="group h-full rounded-2xl border border-line bg-surface/85 overflow-hidden hover:border-signal/50 glass-card card-top-accent shine-hover flex flex-col justify-between transition-all duration-300">
                  <div>
                    {/* Card Browser Preview Frame */}
                    <div className="p-3 pb-0">
                      <div className="rounded-xl overflow-hidden border border-line bg-surface2 shadow-md">
                        <div className="flex items-center justify-between px-3 py-2 bg-base border-b border-line">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#F0605C]" />
                            <span className="w-2 h-2 rounded-full bg-[#F0BB4D]" />
                            <span className="w-2 h-2 rounded-full bg-[#45D9C9]" />
                            <span className="ml-2 font-mono text-[9px] text-muted truncate max-w-[140px]">
                              {(p.webapp || p.github || "project")
                                .replace(/^https?:\/\//, "")
                                .split("/")[0]}
                            </span>
                          </div>
                          <button
                            onClick={() => setSelectedProject(p)}
                            className="text-muted hover:text-signal"
                            title="Preview"
                          >
                            <FiMaximize2 className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Image */}
                        <div
                          onClick={() => setSelectedProject(p)}
                          className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                        >
                          <img
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-base/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-signal bg-signal/10 px-2 py-0.5 rounded border border-signal/20">
                          {p.badge || p.category}
                        </span>
                        <span className="font-mono text-[10px] text-slate-300">
                          {p.date}
                        </span>
                      </div>

                      <h4 className="font-display text-base font-bold text-white group-hover:text-signal transition-colors mb-2">
                        {p.title}
                      </h4>

                      <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4 font-normal">
                        {p.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {p.tags.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[9px] uppercase tracking-wider text-slate-300 bg-surface2/90 px-2 py-0.5 rounded border border-line"
                          >
                            {t}
                          </span>
                        ))}
                        {p.tags.length > 4 && (
                          <span className="font-mono text-[9px] text-muted/60 px-1 py-0.5">
                            +{p.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="px-5 pb-5 pt-3 border-t border-line/60 flex items-center justify-between font-mono text-xs uppercase tracking-wider">
                    <div className="flex items-center gap-3">
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
                          className="flex items-center gap-1.5 text-signal hover:underline transition-colors"
                        >
                          <ExternalIcon className="w-3.5 h-3.5" /> Demo
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(p)}
                      className="text-muted hover:text-ink text-[11px]"
                    >
                      Details &gt;
                    </button>
                  </div>
                </article>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-base/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel bg-surface border border-lineLight shadow-2xl p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-surface2 border border-line flex items-center justify-center text-muted hover:text-ink hover:border-signal/50 transition-colors"
                aria-label="Close dialog"
              >
                <FiX className="w-4 h-4" />
              </button>

              <div className="mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-signal bg-signal/10 px-2.5 py-1 rounded-full border border-signal/20">
                  {selectedProject.badge || selectedProject.category}
                </span>
                <span className="ml-3 font-mono text-xs text-muted">
                  {selectedProject.date}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-3">
                {selectedProject.title}
              </h3>

              {selectedProject.metrics && (
                <p className="font-mono text-xs text-amber mb-4">
                  {selectedProject.metrics}
                </p>
              )}

              {/* Full Image */}
              <div className="rounded-2xl overflow-hidden border border-line mb-6 bg-base">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[400px] object-cover object-top"
                />
              </div>

              <div className="space-y-4 text-muted text-sm leading-relaxed mb-6">
                <p>{selectedProject.description}</p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-wider text-ink mb-2">
                  Technologies Used:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-3 py-1 rounded-lg bg-surface2 border border-line text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-line">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface2 border border-line hover:border-signal/50 text-ink hover:text-signal font-mono text-xs uppercase tracking-wider transition-all"
                  >
                    <GithubIcon className="w-4 h-4" /> Source Code
                  </a>
                )}
                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-signal text-base font-semibold font-mono text-xs uppercase tracking-wider hover:bg-signal-light hover:shadow-glow transition-all"
                  >
                    <ExternalIcon className="w-4 h-4" /> View Live Application
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
