"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Center the follower
      mouseY.set(e.clientY - 16);
      setIsVisible(true);
    };
    const hide = () => setIsVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", hide);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0,
      }}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference rounded-full bg-white/20 border border-white/40 backdrop-blur-lg"
    />
  );
} 