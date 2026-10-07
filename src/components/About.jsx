import { useState } from "react";
import { motion } from "framer-motion";
import { Bio } from "../data/data";
import SectionHeading from "./SectionHeading";
import { useToast } from "./Toast";
import {
  FiTerminal,
  FiServer,
  FiCpu,
  FiDatabase,
  FiCheckCircle,
  FiCopy,
  FiMapPin,
  FiActivity,
  FiShield,
  FiZap,
} from "react-icons/fi";

export default function About() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const manifestCode = `// engineer.config.ts
export const Deepak = {
  name: "${Bio.name}",
  role: "Full Stack & DevOps Engineer",
  location: "${Bio.location}",
  status: "Available for Full-Time & Contract Roles",
  productionFocus: "MOYO — 170+ Live Services Ecosystem",
  coreStack: ["Next.js", "NestJS", "PostgreSQL", "Docker", "AWS", "Redis"],
  architectureGoals: [
    "Sub-50ms API Latencies",
    "Zero-Downtime Automated CI/CD",
    "High-Concurrency Database Schemas",
  ]
};`;

  const copyManifest = () => {
    navigator.clipboard.writeText(manifestCode);
    setCopied(true);
    showToast("Engineering manifest copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-12 md:py-20 px-6 md:px-10 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="01 — About Me"
          title="Engineer first, architect by design."
          subtitle="I bridge the gap between user-facing elegance and cloud-grade infrastructure reliability."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {/* Bento Card 1: Interactive Terminal Manifest (4 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 rounded-2xl glass-panel card-top-accent border border-lineLight/60 bg-surface/80 overflow-hidden font-mono text-xs flex flex-col shadow-card"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface2/80 border-b border-line">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F0605C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F0BB4D]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#45D9C9]" />
                <span className="ml-3 text-slate-300 text-[11px]">
                  deepak@production: ~/manifest.ts
                </span>
              </div>
              <button
                onClick={copyManifest}
                className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-signal transition-colors px-2 py-0.5 rounded bg-surface border border-line"
                title="Copy manifest"
              >
                <FiCopy className="w-3 h-3" />
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 text-ink/90 leading-relaxed space-y-2 flex-1 overflow-x-auto text-[11px] sm:text-xs">
              <p className="text-muted/70">// system engineer manifest</p>
              <p>
                <span className="text-violet">const</span>{" "}
                <span className="text-signal">engineer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-amber">name</span>:{" "}
                <span className="text-emerald">"{Bio.name}"</span>,
              </p>
              <p className="pl-4">
                <span className="text-amber">roles</span>: [
                <span className="text-emerald">"Full Stack"</span>,{" "}
                <span className="text-emerald">"DevOps"</span>,{" "}
                <span className="text-emerald">"Backend Architect"</span>],
              </p>
              <p className="pl-4">
                <span className="text-amber">location</span>:{" "}
                <span className="text-emerald">"{Bio.location}"</span>,
              </p>
              <p className="pl-4">
                <span className="text-amber">current_scale</span>: &#123;
              </p>
              <p className="pl-8 text-signal">
                project: <span className="text-emerald">"MOYO Ecosystem"</span>,
              </p>
              <p className="pl-8">
                live_services: <span className="text-violet font-bold">170</span>,
              </p>
              <p className="pl-8">
                microservices: <span className="text-violet font-bold">3</span>,
              </p>
              <p className="pl-8">
                operations: <span className="text-emerald">"Admin Panel &amp; CRM"</span>,
              </p>
              <p className="pl-8">
                cloud: <span className="text-emerald">"AWS EC2 + Docker"</span>,
              </p>
              <p className="pl-4">&#125;,</p>
              <p className="pl-4">
                <span className="text-amber">guarantees</span>: [
                <span className="text-emerald">"Zero-downtime CI/CD"</span>,{" "}
                <span className="text-emerald">"Sub-50ms query times"</span>,{" "}
                <span className="text-emerald">"Scalable API contracts"</span>],
              </p>
              <p>&#125;;</p>
              <p className="pt-2 text-muted flex items-center gap-1.5">
                <span className="text-signal">$</span>
                <span className="text-ink">status --check: all systems operational</span>
                <span className="w-1.5 h-3 bg-signal inline-block animate-blink ml-1" />
              </p>
            </div>
          </motion.div>

          {/* Bento Card 2: Production Spotlight (MOYO) (2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl glass-card p-6 flex flex-col justify-between border-signal/30 bg-gradient-to-b from-surface to-surface2 relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-signal/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] uppercase tracking-wider mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulseDot" />
                Production Spotlight
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                <span className="text-gradient-electric">MOYO</span> Ecosystem
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mt-2.5">
                Driving technical architecture for a hyper-local platform powering{" "}
                <span className="highlight-keyword">170+ real-time services</span> in Noida. Built customer web portals, operations <strong className="text-white font-medium">Admin Panel &amp; CRM</strong>, multi-service deployments, and high-concurrency booking engines.
              </p>
            </div>

            <div className="pt-5 border-t border-line/60 mt-5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted">Live Services:</span>
                <span className="highlight-keyword font-semibold">170+ Shipped</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted">Operations:</span>
                <span className="text-cyan-300 font-medium">Admin Panel &amp; CRM</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted">Architecture:</span>
                <span className="text-white font-medium">3 Microservices</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted">Cloud Provider:</span>
                <span className="text-amber font-medium">AWS ap-south-1</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Core Engineering DNA (2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 rounded-2xl glass-card card-top-accent shine-hover p-6 flex flex-col justify-between bg-surface/80 border border-line hover:border-signal/50"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-signal/10 border border-signal/30 text-signal flex items-center justify-center mb-4 shadow-inner">
                <FiServer className="w-4 h-4" />
              </div>
              <h4 className="font-display text-base font-semibold text-white">
                <span className="text-gradient-cyan">Full-Stack Architecture</span>
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mt-2">
                Expertise crafting reactive, component-driven client applications with{" "}
                <strong className="text-white font-medium">React &amp; Next.js</strong> backed by bulletproof{" "}
                <strong className="text-white font-medium">NestJS</strong> and Express API microservices.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line/60 mt-4">
              {["React", "Next.js", "NestJS", "TypeScript"].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface2/90 border border-line text-slate-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 4: DevOps & Cloud Automation (2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 rounded-2xl glass-card card-top-accent shine-hover p-6 flex flex-col justify-between bg-surface/80 border border-line hover:border-violet/50"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-violet/10 border border-violet/30 text-violet flex items-center justify-center mb-4 shadow-inner">
                <FiCpu className="w-4 h-4" />
              </div>
              <h4 className="font-display text-base font-semibold text-white">
                <span className="text-gradient-blue">DevOps &amp; Cloud Pipelines</span>
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mt-2">
                Automating delivery cycles using{" "}
                <strong className="text-white font-medium">Docker</strong> containerization, GitHub Actions, and Jenkins. Deploying fault-tolerant workloads to{" "}
                <strong className="text-amber font-medium">AWS EC2</strong> clusters.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line/60 mt-4">
              {["Docker", "AWS EC2", "CI/CD", "Redis"].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface2/90 border border-line text-slate-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 5: High-Performance Database Design (2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-2 rounded-2xl glass-card card-top-accent shine-hover p-6 flex flex-col justify-between bg-surface/80 border border-line hover:border-amber/50"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-amber/10 border border-amber/30 text-amber flex items-center justify-center mb-4 shadow-inner">
                <FiDatabase className="w-4 h-4" />
              </div>
              <h4 className="font-display text-base font-semibold text-white">
                <span className="text-gradient-gold">Database Optimization</span>
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mt-2">
                Structuring relational models in{" "}
                <strong className="text-white font-medium">PostgreSQL</strong> with Knex.js &amp; Prisma. Tuning query performance, connection pooling, and multi-tenant indexes.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line/60 mt-4">
              {["PostgreSQL", "Prisma", "Knex.js", "MongoDB"].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface2/90 border border-line text-slate-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
