import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bio, stats } from "../data/data";
import { GithubIcon, LinkedinIcon, InstaIcon, WhatsappIcon, ArrowRightIcon } from "./Icons";
import Counter from "./Counter";
import Magnetic from "./Magnetic";
import { useToast } from "./Toast";
import {
  FiCopy,
  FiTerminal,
  FiCpu,
  FiPlay,
  FiCheckCircle,
  FiClock,
  FiMapPin,
  FiLayers,
  FiCheck,
} from "react-icons/fi";
import { SiDocker, SiPostgresql, SiNestjs } from "react-icons/si";
import { FaAws } from "react-icons/fa6";

function useTypedRoles(roles) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 30 : 65;
    const pause = deleting ? 350 : 1500;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => i + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

// Live Local Time in IST (Noida, India)
function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
      <FiClock className="w-3.5 h-3.5 text-signal" />
      <span>{time || "Live IST"}</span>
      <span className="text-[10px] text-muted/70">(UTC+5:30)</span>
    </span>
  );
}

// Interactive Engineering Cockpit: CI/CD Pipeline & Interactive Terminal
function EngineeringCockpit() {
  const [activeTab, setActiveTab] = useState("pipeline"); // "pipeline" | "terminal"
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(4); // 0..4, 4 = all done
  const [terminalOutput, setTerminalOutput] = useState([
    { cmd: "whoami", res: "Deepak — Full Stack & DevOps Engineer @ MOYO (Core Platforms & Operations CRM)" },
    { cmd: "stack --summary", res: "React, Next.js, NestJS, PostgreSQL, Docker, AWS, Redis" },
  ]);
  const [inputVal, setInputVal] = useState("");

  const pipelineStages = [
    { name: "Code", cmd: "git push origin main", metric: "0.3s" },
    { name: "Build", cmd: "docker build -t moyo:latest", metric: "1.4s" },
    { name: "Test", cmd: "jest && audit-ci --high", metric: "0.8s" },
    { name: "Deploy", cmd: "github actions → aws ec2", metric: "1.9s" },
    { name: "Healthcheck", cmd: "170+ services active (Noida)", metric: "99.98%" },
  ];

  const handleTriggerDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setDeployStep(0);

    const stepInterval = setInterval(() => {
      setDeployStep((prev) => {
        if (prev >= 4) {
          clearInterval(stepInterval);
          setIsDeploying(false);
          return 4;
        }
        return prev + 1;
      });
    }, 450);
  };

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let res = "";

    if (trimmed === "help") {
      res = "Available commands: whoami, stack, moyo, contact, clear";
    } else if (trimmed === "whoami") {
      res = "Deepak — Full Stack & DevOps Engineer based in Noida, IN.";
    } else if (trimmed.includes("stack")) {
      res = "Frontend: React, Next.js | Backend: NestJS, Express | DB: PostgreSQL, Mongo | Cloud: AWS, Docker";
    } else if (trimmed.includes("moyo")) {
      res = "MOYO: 170+ live hyper-local services, Operations Admin Panel & CRM, 3 microservices on AWS EC2.";
    } else if (trimmed.includes("contact")) {
      res = "Email: deepakraj9454979020@gmail.com | Phone: +91 8081590646";
    } else if (trimmed === "clear") {
      setTerminalOutput([]);
      setInputVal("");
      return;
    } else {
      res = `Command '${trimmed}' executed successfully. Type 'help' for options.`;
    }

    setTerminalOutput((prev) => [...prev, { cmd: cmdStr, res }]);
    setInputVal("");
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-signal/20 via-violet/20 to-signal/10 rounded-2xl blur-xl opacity-60 -z-10 animate-pulseDot" />

      {/* Main Cockpit Frame */}
      <div className="rounded-2xl border border-lineLight/70 bg-surface/85 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden font-mono text-xs">
        {/* Header Tabs Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-surface2/90 border-b border-line">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F0605C]/80" />
            <span className="w-3 h-3 rounded-full bg-[#F0BB4D]/80" />
            <span className="w-3 h-3 rounded-full bg-[#45D9C9]/80" />
            <span className="ml-2 font-mono text-[11px] text-muted">
              moyo-cluster-prod.yaml
            </span>
          </div>

          <div className="flex items-center gap-1 bg-surface p-1 rounded-lg border border-line">
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
                activeTab === "pipeline"
                  ? "bg-signal/20 text-signal font-semibold"
                  : "text-muted hover:text-ink"
              }`}
            >
              <FiCpu className="w-3 h-3" />
              Pipeline
            </button>
            <button
              onClick={() => setActiveTab("terminal")}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
                activeTab === "terminal"
                  ? "bg-signal/20 text-signal font-semibold"
                  : "text-muted hover:text-ink"
              }`}
            >
              <FiTerminal className="w-3 h-3" />
              Terminal
            </button>
          </div>
        </div>

        {/* Live Cluster Status Banner */}
        <div className="px-4 py-2 bg-base/60 border-b border-line/60 flex items-center justify-between text-[11px] text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal animate-pulseDot" />
            <span className="text-ink font-medium">AWS ap-south-1</span>
            <span className="text-muted/60">|</span>
            <span>170+ Pods Healthy</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Ping: <strong className="text-signal">14ms</strong></span>
            <span>Uptime: <strong className="text-emerald">99.98%</strong></span>
          </div>
        </div>

        {/* Tab 1: Pipeline Simulator */}
        {activeTab === "pipeline" && (
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-widest text-muted">
                Deployment Flow: Main Branch
              </span>
              <button
                onClick={handleTriggerDeploy}
                disabled={isDeploying}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-signal/15 border border-signal/40 text-signal hover:bg-signal/25 text-[11px] tracking-wide transition-all disabled:opacity-50"
              >
                <FiPlay className={`w-3 h-3 ${isDeploying ? "animate-spin" : ""}`} />
                {isDeploying ? "Deploying..." : "Trigger Build"}
              </button>
            </div>

            <div className="space-y-3">
              {pipelineStages.map((st, i) => {
                const isPassed = deployStep >= i;
                const isCurrent = deployStep === i && isDeploying;

                return (
                  <div
                    key={st.name}
                    className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                      isCurrent
                        ? "border-signal bg-signal/10 shadow-glow"
                        : isPassed
                        ? "border-line bg-surface2/50"
                        : "border-line/40 opacity-40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-base border border-line">
                        {isPassed ? (
                          <FiCheck className="w-3.5 h-3.5 text-signal" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-muted" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-ink font-medium tracking-wide">
                            {st.name}
                          </span>
                          <span className="text-[10px] text-muted font-mono">
                            {st.cmd}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isPassed
                            ? "bg-emerald/10 text-emerald border border-emerald/30"
                            : "text-muted"
                        }`}
                      >
                        {isCurrent ? "running..." : isPassed ? st.metric : "queued"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Microservice Tech Badges */}
            <div className="pt-2 border-t border-line/60 flex items-center justify-between text-muted text-[11px]">
              <span>Architecture:</span>
              <div className="flex items-center gap-2 text-ink">
                <span className="inline-flex items-center gap-1 bg-surface2 px-2 py-0.5 rounded border border-line">
                  <SiNestjs className="w-3 h-3 text-[#E0234E]" /> NestJS
                </span>
                <span className="inline-flex items-center gap-1 bg-surface2 px-2 py-0.5 rounded border border-line">
                  <SiPostgresql className="w-3 h-3 text-[#336791]" /> PostgreSQL
                </span>
                <span className="inline-flex items-center gap-1 bg-surface2 px-2 py-0.5 rounded border border-line">
                  <SiDocker className="w-3 h-3 text-[#2496ED]" /> Docker
                </span>
                <span className="inline-flex items-center gap-1 bg-surface2 px-2 py-0.5 rounded border border-line">
                  <FaAws className="w-3.5 h-3.5 text-[#FF9900]" /> AWS
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Terminal */}
        {activeTab === "terminal" && (
          <div className="p-4 space-y-3 min-h-[300px] flex flex-col justify-between">
            <div className="space-y-2 max-h-[220px] overflow-y-auto">
              <p className="text-muted text-[11px]">
                Welcome to Deepak's Interactive CLI v2.4. Type a command or click shortcuts below.
              </p>
              {terminalOutput.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-signal flex items-center gap-1.5">
                    <span>$</span>
                    <span className="text-ink">{item.cmd}</span>
                  </p>
                  <p className="text-muted pl-3 border-l border-line text-[11px] leading-relaxed">
                    {item.res}
                  </p>
                </div>
              ))}
            </div>

            <div>
              {/* Quick Prompt Suggestions */}
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {["whoami", "stack", "moyo", "contact", "clear"].map((c) => (
                  <button
                    key={c}
                    onClick={() => handleCommand(c)}
                    className="px-2 py-0.5 bg-surface2 hover:bg-signal/20 hover:text-signal text-muted rounded text-[10px] border border-line transition-colors"
                  >
                    ${c}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (inputVal.trim()) handleCommand(inputVal);
                }}
                className="flex items-center gap-2 bg-base p-2 rounded-xl border border-line"
              >
                <span className="text-signal font-bold">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type 'help', 'stack', or 'moyo'..."
                  className="bg-transparent flex-1 text-ink focus:outline-none text-xs font-mono placeholder:text-muted/50"
                />
                <button
                  type="submit"
                  className="text-signal text-[11px] px-2 py-0.5 rounded bg-signal/15 hover:bg-signal/25"
                >
                  Enter
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypedRoles(Bio.roles);
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(Bio.email);
    showToast("Copied " + Bio.email + " to clipboard!");
  };

  return (
    <section
      id="top"
      className="relative pt-[6.5rem] pb-8 md:pt-[7.5rem] md:pb-16 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-14 items-center relative">
        {/* Left Column: Bio & Core Pitch (7 cols) */}
        <div className="lg:col-span-7">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-signal border border-signal/30 bg-signal/5 px-3.5 py-1.5 rounded-full mb-6 shimmer-badge shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-signal animate-pulseDot" />
            <span>Available for Full Stack &amp; DevOps Roles</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient-electric font-extrabold">Deepak</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-slate-200 font-medium mt-2 font-display tracking-tight flex items-center gap-2 flex-wrap"
          >
            <span>Building</span>
            <span className="text-gradient-cyan font-bold">Scalable Systems</span>
            <span className="text-slate-400">&amp;</span>
            <span className="text-gradient-blue font-bold">Automated Cloud Pipelines</span>
          </motion.h2>

          {/* Dynamic Typed Role Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center font-mono text-base sm:text-lg md:text-xl text-signal mt-2.5 h-7"
          >
            <span className="text-muted/60 mr-2">&gt;</span>
            <span className="highlight-keyword">{typed}</span>
            <span className="inline-block w-[3px] h-5 bg-signal ml-1 animate-blink" />
          </motion.div>

          {/* Location & Time info pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 mt-4 text-xs text-muted"
          >
            <span className="inline-flex items-center gap-1.5 font-mono bg-surface2/60 border border-line px-2.5 py-1 rounded-full text-slate-300">
              <FiMapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{Bio.location}</span>
            </span>
            <span className="text-line">•</span>
            <LiveClock />
            <span className="text-line">•</span>
            <span className="highlight-pill text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulseDot" />
              170+ Live Services Shipped
            </span>
          </motion.div>

          {/* Bio Description with Highlighted Keywords */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 mt-5 max-w-xl text-base leading-relaxed"
          >
            Full Stack &amp; DevOps Engineer with{" "}
            <span className="text-white font-semibold underline decoration-cyan-400/50 decoration-2 underline-offset-4">
              1.5+ years of production experience
            </span>{" "}
            building high-throughput, real-time distributed platforms. Currently engineering{" "}
            <span className="highlight-pill text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulseDot" />
              MOYO Ecosystem
            </span>{" "}
            powering{" "}
            <span className="highlight-keyword">170+ live services</span>, custom{" "}
            <span className="text-cyan-300 font-medium">Operations Admin Panel &amp; CRM</span>, 3 microservices with{" "}
            <span className="text-white font-medium">NestJS, PostgreSQL, Docker</span>, and automated{" "}
            <span className="text-amber font-medium">AWS EC2</span> pipelines.
          </motion.p>

          {/* High-Impact Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3.5 mt-8"
          >
            <Magnetic
              href="#projects"
              className="inline-flex items-center gap-2 bg-signal text-base font-mono text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full hover:bg-signal-light hover:shadow-glow transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Magnetic>

            <Magnetic
              href={Bio.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line hover:border-signal/50 bg-surface text-ink hover:text-signal font-mono text-xs uppercase tracking-widest px-5 py-3 rounded-full transition-all"
            >
              <WhatsappIcon className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Chat</span>
            </Magnetic>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 border border-line hover:border-signal/50 bg-surface2/50 text-muted hover:text-ink font-mono text-xs uppercase tracking-widest px-4 py-3 rounded-full transition-all"
              title="Copy email to clipboard"
            >
              <FiCopy className="w-3.5 h-3.5 text-signal" />
              <span>Copy Email</span>
            </button>
          </motion.div>

          {/* Social Links Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-5 mt-9 text-muted"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted/60">
              Profiles:
            </span>
            <a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-signal transition-colors p-2 rounded-lg hover:bg-surface2"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={Bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-signal transition-colors p-2 rounded-lg hover:bg-surface2"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={Bio.insta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-signal transition-colors p-2 rounded-lg hover:bg-surface2"
            >
              <InstaIcon className="w-5 h-5" />
            </a>
            <a
              href={Bio.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-signal transition-colors p-2 rounded-lg hover:bg-surface2"
            >
              <WhatsappIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: DevOps Cockpit & Pipeline (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <EngineeringCockpit />
        </motion.div>
      </div>

      {/* Metrics & Key Numbers Bento Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-line/60"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="glass-card rounded-2xl p-5 text-center group hover:-translate-y-1 transition-all"
          >
            <p className="font-display text-3xl md:text-4xl text-ink font-bold group-hover:text-signal transition-colors">
              <Counter
                value={s.number}
                decimals={s.decimals}
                suffix={s.suffix}
              />
            </p>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted mt-2">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
