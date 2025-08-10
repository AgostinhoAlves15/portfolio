"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-5xl pb-2 md:text-4xl lg:text-7xl font-bold inter-var text-center bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text">
        Agostinho Alves
      </p>
      <p className="text-base md:text-lg mt-2 text-white font-normal inter-var text-center">
        Front-End Developer | Web | JavaScript | TypeScript | React | Bootstrap | Tailwind
      </p>
    </WavyBackground>
  );
}
<h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text">
  Agostinho Alves
</h1>