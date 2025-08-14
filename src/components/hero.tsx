"use client";

import React from "react";
import { HeroHighlight } from "./ui/hero-highlight";
import { ProjectTitle } from "./ProjectTitle"; // Importando o novo componente

// Defina a estrutura de dados para cada item de experiência
const experienceItems = [
  {
    title: "Desenvolvedor Frontend da Bullean Technologys",
    description: "Desenvolvimento front-end focado no React.js, Next.js, TailwindCSS, MaterialUI.",
    icon: "/Bullean_logo.png",
  },
  {
    title: "Mobile App Dev - Bullean Technologys",
    description: "Desenvolvedor de aplicativos mobile projetados e desenvolvidos para plataformas iOS e Android usando React Native.",
    icon: "/Ninna_logo.png",
  },
  {
    title: "Vencedor do 3º Hackathon do Amontada Valley + M. Dias Branco",
    description: "Vencedor do 3º Hackathon do Amontada Valley + M. Dias Branco",
    icon: "/Valley_logo.png",
  },
  {
    title: "TechLead - CoffeeStack",
    description: "TechLead campeão do 3º Hackathon do Amontada Valley, na squad CoffeeStack.",
    icon: "/valley_logo.png",
  },
];

export function WorkExperience() {
  return (
    <HeroHighlight className="py-20">
      <div className="container mx-auto px-4">
        {/* Usando o componente ProjectTitle com a prop "title" */}
        <ProjectTitle title="Minha experiência de trabalho" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {experienceItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-700 via-pink-500 to-blue-700 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 md:p-8 flex items-start gap-6 transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div
                className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
              >
                <img src={item.icon} alt={`${item.title} icon`} className="rounded-full" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white dark:text-neutral-400 text-base md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HeroHighlight>
  );
}