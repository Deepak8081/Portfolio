import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bio, stats } from "../data/data";
import { GithubIcon, LinkedinIcon, InstaIcon, WhatsappIcon } from "./Icons";
import Counter from "./Counter";
import Magnetic from "./Magnetic";

function useTypedRoles(roles) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 35 : 65;
    const pause = deleting ? 400 : 1400;

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

const pipeline = ["Code", "Build", "Test", "Deploy", "Live"];

function Pipeline() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="rounded-2xl border border-line bg-surface/60 backdrop-blur-sm p-6 font-mono text-xs">
        <div className="flex items-center justify-between text-muted mb-6">
          <span className="uppercase tracking-widest">pipeline.yml</span>
          <span className="flex items-center gap-1.5 text-signal">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulseDot" />
            running
          </span>
        </div>
        <div className="flex flex-col gap-0">
          {pipeline.map((stage, i) => (
            <div key={stage} className="flex items-stretch">
              <div className="flex flex-col items-center mr-4">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className={`w-2.5 h-2.5 rounded-full border ${
                    i === pipeline.length - 1
                      ? "bg-amber border-amber"
                      : "bg-signal border-signal"
                  }`}
                />
                {i !== pipeline.length - 1 && (
                  <span className="flex-1 w-px bg-line my-1" />
                )}
              </div>
              <div className="pb-6 text-ink">
                <p className="tracking-wide">{stage}</p>
                <p className="text-muted text-[11px]">
                  {i === 0 && "git push origin main"}
                  {i === 1 && "docker build -t moyo:latest"}
                  {i === 2 && "jest --coverage"}
                  {i === 3 && "github actions → aws ec2"}
                  {i === 4 && "170+ services online"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-signal rounded-full" />
    </div>
  );
}

export default function Hero() {
  const typed = useTypedRoles(Bio.roles);

  return (
    <section
      id="top"
      className="relative pt-[6rem] pb-6 md:pt-[6rem] md:pb-12 px-6 md:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 grain opacity-[0.15] pointer-events-none" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-signal border border-signal/30 bg-signal/5 px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulseDot" />
            status: available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-ink"
          >
            {Bio.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-lg md:text-xl text-signal mt-3 h-8"
          >
            {typed}
            <span className="inline-block w-[2px] h-5 bg-signal ml-1 animate-blink align-middle" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted mt-6 max-w-lg leading-relaxed"
          >
            {Bio.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <Magnetic
              href="#projects"
              className="inline-block bg-signal text-base font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#7ff0e4] transition-colors"
            >
              View Projects
            </Magnetic>
            <Magnetic
              href={Bio.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line text-ink font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:border-signal hover:text-signal transition-colors"
            >
              <WhatsappIcon className="w-4 h-4" /> Get In Touch
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-5 mt-10 text-muted"
          >
            <a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-signal transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={Bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-signal transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={Bio.insta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-signal transition-colors"
            >
              <InstaIcon className="w-5 h-5" />
            </a>
            <a
              href={Bio.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-signal transition-colors"
            >
              <WhatsappIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Pipeline />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=" flex flex-wrap justify-center text-center gap-20 md:gap-40 mt-20 pt-10 border-t border-line"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-3xl md:text-4xl text-ink font-semibold">
              <Counter
                value={s.number}
                decimals={s.decimals}
                suffix={s.suffix}
              />
            </p>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
