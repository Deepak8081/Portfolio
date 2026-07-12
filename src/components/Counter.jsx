import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({ value, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 30, stiffness: 90 });
  const displayRef = useRef(null);

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = v.toFixed(decimals) + suffix;
      }
    });
    return unsub;
  }, [spring, suffix, decimals]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>{(0).toFixed(decimals)}{suffix}</span>
    </span>
  );
}
