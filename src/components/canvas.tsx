"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { ProjectTitle } from "./ProjectTitle";

export function CanvasRevealEffectDemo() {
  const approaches = [
    {
      title: "Planejamento e Estratégia",
      description: "Colaboraremos para mapear os objetivos do seu site, público-alvo e funcionalidades principais. Discutiremos a estrutura, navegação e requisitos de conteúdo.",
      step: "Passo 1",
      containerClassName: "bg-purple-900",
      colors: undefined,
      dotSize: 2,
    },
    {
      title: "Design e Prototipagem",
      description: "Criarei wireframes, mockups e protótipos interativos para visualizar o design e a experiência do usuário. Seu feedback será fundamental para refinar o visual.",
      step: "Passo 2",
      containerClassName: "bg-pink-900",
      colors: [
        [236, 72, 153],
        [232, 121, 249],
      ],
      dotSize: 2,
    },
    {
      title: "Desenvolvimento e Lançamento",
      description: "Transformarei o design em código funcional, garantindo que o site seja responsivo e otimizado. Após testes, o site será lançado e faremos o monitoramento inicial.",
      step: "Passo 3",
      containerClassName: "bg-sky-900",
      colors: [[125, 211, 252]],
      dotSize: 2,
    },
  ];
  return (
    <div className="py-20 flex flex-col items-center justify-center bg-white dark:bg-black w-full mx-auto px-8">
      {/* Título centralizado no topo */}
      <ProjectTitle title="Minhas Abordagens" />

      {/* Cards agrupados e alinhados lado a lado */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mt-10">
        {approaches.map((approach, index) => (
            <Card 
              key={index} 
              title={approach.title} 
              step={approach.step} 
              description={approach.description}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName={approach.containerClassName}
                colors={approach.colors}
                dotSize={approach.dotSize}
              />
            </Card>
          ))}
      </div>
    </div>
  );
}

const Card = ({
  title,
  step,
  description,
  children,
}: {
  title: string;
  step: string;
  description: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative max-w-sm w-full mx-auto p-4 h-[30rem] overflow-hidden rounded-xl border border-black/[0.2] dark:border-white/[0.2] transition duration-200"
    >
      {/* Background with CanvasRevealEffect and dark overlay on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {children}
            <div className="absolute inset-0 bg-black/50 dark:bg-black/80" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content that changes on hover */}
      <AnimatePresence mode="wait">
        <motion.div
          key={hovered ? "hovered" : "not-hovered"}
          initial={{ opacity: 0, y: hovered ? 20 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex h-full w-full items-center justify-center"
        >
          {hovered ? (
            <div className="flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-lg">{description}</p>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="dark:text-white text-3xl text-black font-bold">
                {step}
              </h2>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Decorative Icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
