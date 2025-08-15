"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { IconDownload } from "@tabler/icons-react";

/**
 * Componente do botão flutuante para download de currículo.
 * Ele aparece em todas as telas, exceto na página inicial.
 *
 * @param {string} resumeUrl - O URL do arquivo do currículo para download.
 */
export function ResumeDownloadButton({ resumeUrl = "/path/to/your/resume.pdf" }) {
  // Simula a verificação de rota. Em um projeto real, você usaria um hook de roteamento como usePathname() do Next.js.
  // Por padrão, definimos como false para o botão ser visível.
  const [isHomePage, setIsHomePage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Aqui você adicionaria a lógica para verificar a rota
    // Exemplo: setIsHomePage(window.location.pathname === '/');
    // Deixamos como false para a demonstração
    setIsHomePage(false); 
  }, []);

  if (isHomePage) {
    return null; // Não renderiza nada se estiver na página inicial
  }

  return (
    <a
      href= 'curriculo.pdf'
      download
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out group",
        // Aplica o gradiente de rosa para roxo com efeito de hover
        "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
        "flex items-center space-x-2 overflow-hidden",
        // Lógica de transição de largura corrigida
        isHovered ? "max-w-64" : "max-w-12"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconDownload className="h-6 w-6 text-white shrink-0" />
      <span className={cn(
        "text-sm font-medium text-white whitespace-nowrap opacity-0 transition-opacity duration-300",
        isHovered && "opacity-100"
      )}>
        Baixar Currículo
      </span>
    </a>
  );
}
