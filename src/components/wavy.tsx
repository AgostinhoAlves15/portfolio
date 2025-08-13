"use client";

import React, { useState, useEffect } from "react";
import { WavyBackground } from "./ui/wavy-background";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

export function WavyBackgroundDemo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Evita renderizar até saber o tema no cliente
  if (!mounted) {
    return null;
  }

  const backgroundFillColor = resolvedTheme === "dark" ? "#09090b" : "#ffffff";

  const gradientDark =
    "bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg";
  const gradientLight =
    "bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 text-transparent bg-clip-text drop-shadow-md";

  const gradientText =
    resolvedTheme === "dark" ? gradientDark : gradientLight;

  return (
    <WavyBackground
      className="max-w-4xl mx-auto pb-40"
      backgroundFill={backgroundFillColor}
    >
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <p
        className={`text-5xl md:text-4xl lg:text-7xl font-bold inter-var text-center pb-4 ${gradientText}`}
      >
        Agostinho Alves
      </p>

      <div className="mt- font-normal inter-var text-center flex items-center flex-col text-2xl text-foreground leading-relaxed">
        Desenvolvendo interfaces que conectam pessoas e tecnologia de forma
        <br />
        <PointerHighlight>
          <span className={`${gradientText} font-bold`}>
            simples e encantadora.
          </span>
        </PointerHighlight>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <a
          href="/curriculo.pdf"
          download
          className="inline-flex items-center px-4 py-2 rounded-lg shadow hover:opacity-90 transition bg-gray-800 text-white dark:bg-white dark:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
          Baixar Currículo
        </a>

        <a
          href="#contato"
          className="inline-flex items-center px-4 py-2 rounded-lg shadow hover:opacity-90 transition bg-gray-800 text-white dark:bg-white dark:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12H8m8 0l-4-4m4 4l-4 4"
            />
          </svg>
          Contate-me
        </a>
      </div>
    </WavyBackground>
  );
}
