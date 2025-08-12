"use client";

import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

export function WavyBackgroundDemo() {
  const { theme } = useTheme();

  // Define a cor de fundo com base no tema.
  const backgroundFillColor = theme === "dark" ? "#09090b" : "#ffffff";

  return (
    <WavyBackground
      className="max-w-4xl mx-auto pb-40"
      backgroundFill={backgroundFillColor}
    >
      {/* Container para o botão de tema no canto superior direito */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Nome */}
      <p className="text-5xl md:text-4xl lg:text-7xl font-bold inter-var text-center bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text pb-4">
        Agostinho Alves
      </p>

      {/* Frase */}
      <div className="mt- font-normal inter-var text-center flex items-center flex-col text-2xl text-foreground drop-shadow-md leading-relaxed">
        Desenvolvendo interfaces que conectam pessoas e tecnologia de forma
        <br />
        <PointerHighlight>
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 text-transparent text-center bg-clip-text font-bold">
            simples e encantadora.
          </span>
        </PointerHighlight>
      </div>

      {/* Botões - CORRIGIDO: Cores com contraste para tema claro e escuro */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Botão Baixar Currículo */}
        <a
          href="/curriculo.pdf"
          download
          // As cores foram corrigidas para terem alto contraste em ambos os temas
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

        {/* Botão Contate-me */}
        <a
          href="#contato"
          // As cores foram corrigidas para terem alto contraste em ambos os temas
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