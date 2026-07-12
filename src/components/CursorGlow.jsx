import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { damping: 25, stiffness: 300, mass: 0.5 });
  const sy = useSpring(my, { damping: 25, stiffness: 300, mass: 0.5 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      const target = e.target.closest("a, button, [data-cursor-hover]");
      setHovering(Boolean(target));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full mix-blend-screen"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 64 : 28,
          height: hovering ? 64 : 28,
          background: "radial-gradient(circle, rgba(69,217,201,0.35) 0%, rgba(69,217,201,0) 70%)",
          transition: "width 0.25s ease, height 0.25s ease",
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full bg-signal"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
        }}
      />
    </>
  );
}
