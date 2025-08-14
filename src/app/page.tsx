import { WobbleCardDemo } from "@/components/Sobre";
import { FloatingNavDemo } from "@/components/NavBar"
import { FlipWordsDemo } from "@/components/flip"
import { WorkExperience } from "@/components/hero"
import { PointerHighlightDemo } from "@/components/pointer"
import { WavyBackgroundDemo } from "@/components/wavy"
import { SignupFormDemo } from "@/components/form"
import { CanvasRevealEffectDemo } from "@/components/canvas"
import { ProjectShowcase } from "@/components/projetos";
import { ProjectTitle } from "@/components/ProjectTitle";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* Background */}
      <WavyBackgroundDemo />

      {/* Sobre Mim */}
      <WobbleCardDemo />

      {/* Navegação fixa no topo */}
      <FloatingNavDemo />

      {/* Projetos desenvolvidos */}
      <ProjectTitle title="Projetos desenvolvidos"/>
      <ProjectShowcase />
      
      {/* NOVO: Adiciona um espaço grande entre as seções */}
      <div className="py-40" />

      {/* Efeitos de destaque */}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 gap-8">
        <WorkExperience />
        <FlipWordsDemo />
      </section>

      {/* Efeitos Visuais */}
      <section className="py-20 flex flex-col gap-16 items-center justify-center px-4">
        <PointerHighlightDemo />
        <CanvasRevealEffectDemo />
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 flex justify-center items-center px-4">
        <SignupFormDemo />
      </section>

      {/* Rodapé */}
      <footer className="py-10 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Meu Portfólio
      </footer>
    </main>
  );
}