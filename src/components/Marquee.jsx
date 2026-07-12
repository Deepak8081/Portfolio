import { skills } from "../data/data";

const allSkills = skills.flatMap((g) => g.skills);
const loop = [...allSkills, ...allSkills];

export default function Marquee() {
  return (
    <div className="relative border-y border-line bg-surface/40 py-6 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-base to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-base to-transparent z-10" />
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
        {loop.map((s, i) => (
          <div key={`${s.name}-${i}`} className="flex items-center gap-2 shrink-0">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white shrink-0">
              <img src={s.image} alt="" className="w-4 h-4 object-contain" loading="lazy" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted whitespace-nowrap">{s.name}</span>
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
