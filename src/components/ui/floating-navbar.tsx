"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollYProgress.getPrevious() ?? 0;
      const direction = current - prev;

      if (current > 0) {
        setHasScrolled(true); // Marca que já rolou
      }

      if (!hasScrolled) {
        // Antes de rolar a primeira vez, nunca mostra
        setVisible(false);
        return;
      }

      if (direction < 0) {
        // Subindo → mostra
        setVisible(true);
      } else {
        // Descendo → esconde
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-[12px] px-6 py-3 bg-[#0B0E1A] border border-white/10 shadow-lg z-[5000] items-center justify-center space-x-8",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "text-white text-[15px] font-medium hover:text-gray-300 transition-colors"
            )}
          >
            {navItem.name}
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
