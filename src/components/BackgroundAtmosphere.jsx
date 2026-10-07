import { motion } from "framer-motion";

export default function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Cyber Grid with soft radial mask */}
      <div className="absolute inset-0 grid-bg radial-mask opacity-[0.45]" />
      
      {/* Grain overlay for tactile texture */}
      <div className="absolute inset-0 grain opacity-[0.14]" />

      {/* Ambient Top Glow Orb (Electric Cyan) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.22, 0.36, 0.22],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ambient-glow -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/25 blur-[140px]"
      />

      {/* Ambient Violet/Indigo Glow for color depth */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.26, 0.15],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="ambient-glow top-1/4 -right-40 w-[600px] h-[600px] bg-blue-600/20 blur-[150px]"
      />

      {/* Ambient Emerald/Teal Glow mid-page */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="ambient-glow top-2/3 -left-40 w-[600px] h-[600px] bg-teal-500/15 blur-[150px]"
      />

      {/* Bottom Ambient Glow */}
      <div className="ambient-glow -bottom-32 left-1/3 w-[700px] h-[450px] bg-cyan-500/20 blur-[140px] opacity-25" />
    </div>
  );
}
