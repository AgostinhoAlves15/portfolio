"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function WobbleCardDemo() {
  const stacks = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: 'bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: 'github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10">
      {/* Primeiro card: Sobre mim e comunicação */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-cyan-700 to-indigo-700 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-md">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Eu priorizo a comunicação e colaboração com o cliente
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Sou muito flexível com comunicações de fuso horário, e prezo pela transparência e feedback contínuo em cada etapa do projeto.
          </p>
        </div>
        <img
          src="/seu-laptop-aqui.webp"
          width={500}
          height={500}
          alt="Laptop"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* Segundo card: Agora ele está livre para outro conteúdo */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-tr from-purple-700 to-pink-700">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Sou muito flexível com comunicações de fuso horário
        </h2>
      </WobbleCard>

      {/* Terceiro card (agora o de baixo): Stacks com carrossel */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-b from-purple-950 to-indigo-950 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white mb-4">
            Stacks
          </h2>
          <InfiniteMovingCards
            items={stacks}
            direction="right"
            speed="slow"
          />
        </div>
      </WobbleCard>
    </div>
  );
}