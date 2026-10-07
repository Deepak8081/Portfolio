import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/data";
import SectionHeading from "./SectionHeading";
import { FiSearch, FiCode, FiCpu, FiDatabase, FiTool, FiCheck } from "react-icons/fi";

const categoryIcons = {
  Frontend: FiCode,
  Backend: FiCpu,
  "DevOps & Cloud": FiCpu,
  "Database & ORM": FiDatabase,
  Tools: FiTool,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...skills.map((s) => s.title)];

  const filteredGroups = useMemo(() => {
    return skills
      .filter((group) => {
        if (activeCategory === "All") return true;
        return group.title === activeCategory;
      })
      .map((group) => {
        if (!searchQuery.trim()) return group;
        const matchingSkills = group.skills.filter((s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
        );
        return {
          ...group,
          skills: matchingSkills,
        };
      })
      .filter((group) => group.skills.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="skills"
      className="py-12 md:py-20 px-6 md:px-10 bg-surface/30 border-y border-line/70 relative"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="02 — Technical Arsenal"
          title="Tools & Technologies"
          subtitle="Battle-tested technologies I reach for when building scalable, cloud-native web systems."
        />

        {/* Filter Controls: Category Pills & Real-time Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-surface2/80 border border-line/80 backdrop-blur-md shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3.5 py-1.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "font-bold bg-signal text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-surface/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. Docker, NestJS..."
              className="w-full bg-surface2/90 border border-line focus:border-signal/60 focus:shadow-[0_0_15px_rgba(56,189,248,0.2)] rounded-xl pl-9 pr-4 py-2 font-mono text-xs text-ink placeholder:text-muted/60 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Groups Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group) => {
              const IconComp = categoryIcons[group.title] || FiCode;

              return (
                <motion.div
                  key={group.title}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl glass-card card-top-accent shine-hover p-6 border border-line bg-surface/75 flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Icon and Count */}
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-line/60">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-surface2 border border-line text-signal flex items-center justify-center shadow-inner">
                          <IconComp className="w-4 h-4" />
                        </span>
                        <h3 className="font-display text-base font-semibold text-white">
                          {group.title}
                        </h3>
                      </div>
                      <span className="font-mono text-[11px] text-cyan-300 bg-cyan-950/50 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                        {group.skills.length} skills
                      </span>
                    </div>

                    {/* Skills Badges Grid */}
                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((s) => (
                        <motion.div
                          key={s.name}
                          whileHover={{ y: -2, scale: 1.02 }}
                          className="flex items-center gap-2.5 border border-line bg-surface2/70 hover:bg-surfaceElevated hover:border-signal/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.18)] rounded-xl pl-2 pr-3 py-1.5 transition-all shadow-sm group/item cursor-default"
                        >
                          <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-base border border-line p-1 shrink-0 shadow-sm group-hover/item:scale-110 group-hover/item:border-signal/40 transition-all">
                            <img
                              src={s.image}
                              alt={s.name}
                              className="w-3.5 h-3.5 object-contain"
                              loading="lazy"
                            />
                          </span>
                          <span className="font-mono text-xs text-slate-200 group-hover/item:text-signal transition-colors font-medium">
                            {s.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredGroups.length === 0 && (
          <div className="text-center py-16 text-muted font-mono text-xs">
            No technologies found matching "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
}
