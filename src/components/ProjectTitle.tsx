"use client";

import React from "react";
import { motion } from "framer-motion";

// Agora o componente aceita uma prop chamada "title"
export function ProjectTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center pt-20 px-4">
      {/* O título agora é dinâmico, usando a prop "title" */}
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 pb-3">
        {title}
      </h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mt-4 rounded-full max-w-lg"
      />
    </div>
  );
}