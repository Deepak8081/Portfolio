import { motion } from "framer-motion";
import { Bio } from "../data/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-8 md:py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="01 — About"
          title="Engineer first, designer by necessity."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-line bg-surface overflow-hidden font-mono text-xs shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-surface2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F0605C]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F0BB4D]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#45D9C9]" />
              <span className="ml-3 text-muted text-[11px]">
                deepak@portfolio: ~
              </span>
            </div>
            <div className="p-6 space-y-3 text-ink leading-relaxed">
              <p>
                <span className="text-signal">$</span> whoami
              </p>
              <p className="text-muted">
                → Deepak, Full Stack &amp; DevOps Engineer
              </p>
              <p className="pt-2">
                <span className="text-signal">$</span> cat location.txt
              </p>
              <p className="text-muted">→ {Bio.location}</p>
              <p className="pt-2">
                <span className="text-signal">$</span> cat currently.txt
              </p>
              <p className="text-muted">
                → Building MOYO — 170+ live services in production
              </p>
              <p className="pt-2">
                <span className="text-signal">$</span> cat stack.txt
              </p>
              <p className="text-muted">
                → MERN · Next.js · NestJS · PostgreSQL · Docker · AWS
              </p>
              <p className="pt-2 flex items-center gap-1">
                <span className="text-signal">$</span>
                <span className="inline-block w-2 h-4 bg-signal animate-blink" />
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-muted leading-relaxed"
          >
            <p>{Bio.description}</p>
            <p>
              My work sits at the intersection of product and infrastructure — I
              don't just ship features, I ship the pipelines that deploy them
              reliably. From designing PostgreSQL schemas that hold up under
              booking-engine load, to wiring GitHub Actions and Jenkins into AWS
              EC2 clusters, I care about systems that keep working after the
              demo ends.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Reliability-minded",
                "Product-aware",
                "Ships fast, ships clean",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] uppercase tracking-widest text-ink border border-line px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
