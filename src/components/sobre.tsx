"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Primeiro card: Sobre mim e comunicação */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-indigo-900 min-h-[500px] lg:min-h-[300px]"
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
          src="/seu-laptop-aqui.webp" // Substitua pelo caminho da imagem do seu laptop
          width={500}
          height={500}
          alt="Laptop"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* Segundo card: Stacks */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-cyan-900">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Minhas stacks
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Construindo o futuro com tecnologias modernas e eficientes.
        </p>
        {/*
          Aqui você pode colocar seu componente de carrossel infinito.
          Exemplo: <InfiniteMovingCards />
        */}
      </WobbleCard>

      {/* Terceiro card: Entusiasta e apaixonado por desenvolvimento */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-purple-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Entusiasta de tecnologia e apaixonado por desenvolvimento.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Sempre em busca de novos desafios e soluções inovadoras para criar experiências digitais únicas.
          </p>
        </div>
        <img
          src="/outra-imagem-aqui.webp" // Substitua pelo caminho da sua imagem
          width={500}
          height={500}
          alt="Outra imagem"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}