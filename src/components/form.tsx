"use client";
import React, { useState } from "react";
import { ProjectTitle } from "./ProjectTitle";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";

export function ContactSection() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [mensagemError, setMensagemError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    let hasError = false;
    
    // Validação do campo Nome
    if (nome.trim().length < 3) {
      setNomeError("Preciso de mais letras :)");
      hasError = true;
    } else {
      setNomeError("");
    }
    
    // Validação do campo Mensagem
    if (mensagem.trim() === "") {
      setMensagemError("Me conte mais!");
      hasError = true;
    } else {
      setMensagemError("");
    }
    
    if (!hasError) {
      const phoneNumber = "5588999636921"; // Substitua pelo seu número de telefone
      const text = `Olá, meu nome é ${nome}. Gostaria de entrar em contato sobre a seguinte mensagem: ${mensagem}`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
      
      window.open(whatsappUrl, "_blank");
      
      // Limpar os campos do formulário após o envio
      setNome("");
      setMensagem("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-1 px-4">
      {/* Título e Subtítulo */}
      <ProjectTitle title="Contatos"/>
      <p className="max-w-xl text-center text-sm md:text-base mt-5 text-black dark:text-neutral-300 mb-10">
        Transforme Sua Ideia em Resultados Vamos Começar Hoje?
      </p>

      {/* Container principal com duas colunas */}
      <div className="shadow-input w-full lg:w-[90vw] mx-auto rounded-lg bg-white p-6 md:rounded-2xl md:p-12 dark:bg-black flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Coluna da Esquerda: Formulário de Mensagem */}
        <div className="flex flex-col w-full lg:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Envie uma mensagem!
          </h3>
          <form className="my-4 flex flex-col space-y-4" onSubmit={handleSubmit}>
            <LabelInputContainer>
              <Label htmlFor="nome">Nome</Label>
              <Input 
                id="nome" 
                placeholder="Seu nome" 
                type="text" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              {nomeError && <p className="text-red-500 text-sm mt-1">{nomeError}</p>}
            </LabelInputContainer>

            <LabelTextareaContainer className="mb-4 flex-grow">
              <Label htmlFor="mensagem">Mensagem</Label>
              <textarea
                id="mensagem"
                placeholder="Sua mensagem..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="flex h-48 w-full rounded-md border border-neutral-300 bg-gray-50 px-3 py-2 text-sm text-black placeholder:text-neutral-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-zinc-800 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-cyan-400"
              />
              <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Me conte mais como posso te ajudar!</span>
              {mensagemError && <p className="text-red-500 text-sm mt-1">{mensagemError}</p>}
            </LabelTextareaContainer>

            <button
              className="group/btn relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-emerald-500 px-4 font-medium text-white shadow-md transition-colors hover:bg-emerald-600"
              type="submit"
            >
              <IconBrandWhatsapp className="h-4 w-4" />
              <span className="text-sm">
                Enviar
              </span>
              <BottomGradient />
            </button>
          </form>
        </div>

        {/* Coluna da Direita: Redes Sociais */}
        <div className="flex flex-col w-full lg:w-1/2 items-center">
          <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Acesse minhas redes:
          </h3>
          <div className="flex flex-col space-y-10 mt-15 w-full max-w-sm">
            <SocialButton
              href="https://www.linkedin.com/in/agostinho-alves-8b319934a/"
              icon={<IconBrandLinkedin className="h-4 w-4" />}
              text="LinkedIn"
              bgColor="bg-blue-600 hover:bg-blue-700"
            />
            <SocialButton
              href="https://github.com/AgostinhoAlves15"
              icon={<IconBrandGithub className="h-4 w-4" />}
              text="Github"
              bgColor="bg-neutral-800 hover:bg-neutral-700"
            />
            <SocialButton
              href="mailto:aalvesdeoliveirafilho1@gmail.com"
              icon={<IconMail className="h-4 w-4" />}
              text="Email"
              bgColor="bg-gray-600 hover:bg-gray-700"
            />
            <SocialButton
              href="https://www.instagram.com/agostinho.67/"
              icon={<IconBrandInstagram className="h-4 w-4" />}
              text="Instagram"
              bgColor="bg-pink-500 hover:bg-pink-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const SocialButton = ({ href, icon, text, bgColor }: { href: string; icon: React.ReactNode; text: string; bgColor: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "group/btn relative flex h-10 w-full items-center justify-center space-x-2 rounded-md px-4 font-medium text-white shadow-md transition-colors",
      bgColor
    )}
  >
    {icon}
    <span className="text-sm">
      {text}
    </span>
    <BottomGradient />
  </a>
);

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const LabelTextareaContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
