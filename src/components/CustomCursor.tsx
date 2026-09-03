"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
      setIsMobile(isTouch);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
        if (cursorTarget) {
          const text = cursorTarget.getAttribute("data-cursor") || "";
          setCursorText(text);
          setIsHovered(true);
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    let animationFrameId: number;
    const render = () => {
      const ease = 0.15;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", checkMobile);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        animate={{
          scale: isHovered ? (cursorText ? 2.5 : 1.8) : 1,
          backgroundColor: isHovered ? "#CCFF00" : "transparent",
          borderColor: isHovered ? "#CCFF00" : "rgba(204, 255, 0, 0.8)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={`flex items-center justify-center rounded-full border-2 text-center text-xs font-bold transition-all ${
          isHovered ? "h-10 w-10 text-black shadow-lg shadow-lime-accent/30" : "h-6 w-6 border-lime-accent"
        }`}
      >
        {isHovered && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="select-none font-mono text-[9px] tracking-wider uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
