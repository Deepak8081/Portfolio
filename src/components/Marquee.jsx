import { skills } from "../data/data";

const allSkills = skills.flatMap((g) => g.skills);
const loop1 = [...allSkills, ...allSkills];

export default function Marquee() {
  return (
    <div className="relative border-y border-line/70 bg-surface/30 backdrop-blur-md py-6 overflow-hidden group">
      {/* Side gradient fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-base via-base/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-base via-base/80 to-transparent z-10 pointer-events-none" />

      {/* Running tech strip with hover pause */}
      <div className="flex w-max animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused] gap-6">
        {loop1.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card bg-surface2/60 border border-line/80 hover:border-signal/50 hover:bg-surface2 transition-all cursor-default shrink-0 group/item"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/95 p-0.5 shrink-0 shadow-sm group-hover/item:scale-110 transition-transform">
              <img
                src={s.image}
                alt={s.name}
                className="w-3.5 h-3.5 object-contain"
                loading="lazy"
              />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted group-hover/item:text-ink transition-colors whitespace-nowrap">
              {s.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
