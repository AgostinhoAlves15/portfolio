"use client";

import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ProjectShowcase() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects = [
    {
      title: "Amotur",
      description: "Breve descrição sobre o projeto e as tecnologias utilizadas.",
      videoUrl: "/Vídeo-Amotur.webm",
      link: "https://mapa-praia-next.vercel.app/",
      stacks: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      title: "Nome do Projeto 2",
      description: "Uma descrição detalhada sobre as funcionalidades e desafios superados.",
      videoUrl: "/videos/meu-projeto-2.mp4",
      link: "https://example.com/projeto2",
      stacks: [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      ],
    },
    {
      title: "Amotur",
      description: "Breve descrição sobre o projeto e as tecnologias utilizadas.",
      videoUrl: "/Vídeo-Amotur.webm",
      link: "https://mapa-praia-next.vercel.app/",
      stacks: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 p-10 mt-20">
      {projects.map((project, index) => (
        <PinContainer key={index} title={project.title} href={project.link}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[25rem]">
            {/* Seção do vídeo (só renderiza no cliente) */}
            <div className="relative flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
              {isMounted && (
                <video
                  className="w-full h-full rounded-lg object-cover"
                  src={project.videoUrl}
                  loop
                  muted
                  autoPlay
                  playsInline
                  controls={false}
                />
              )}
            </div>
            
            <div className="flex flex-col flex-grow mt-4 gap-2">
              <h3 className="!m-0 !pb-2 text-base font-bold text-slate-100">
                {project.title}
              </h3>
              <div className="!m-0 !p-0 text-base font-normal">
                <span className="text-slate-500 text-sm">
                  {project.description}
                </span>
              </div>

              <div className="flex items-end justify-between mt-auto">
                <div className="flex items-center gap-2">
                  {project.stacks.map((stack, stackIndex) => (
                    <Image
                      key={stackIndex}
                      src={stack.icon}
                      alt={stack.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Veja no ar
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}