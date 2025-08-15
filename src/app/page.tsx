import { WobbleCardDemo } from "@/components/Sobre";
import { FloatingNavDemo } from "@/components/NavBar";
import { WorkExperience } from "@/components/hero";
import { WavyBackgroundDemo } from "@/components/wavy";
import { ContactSection } from "@/components/form";
import { CanvasRevealEffectDemo } from "@/components/canvas";
import { ProjectShowcase } from "@/components/projetos";
import { ProjectTitle } from "@/components/ProjectTitle";
import { ResumeDownloadButton } from "@/components/buttonCR";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col">
      {/* Background (o WavyBackgroundDemo já lida com o seu próprio fundo) */}
      <WavyBackgroundDemo/>
      <ResumeDownloadButton />

      {/* Sobre Mim */}
      <div>
        <WobbleCardDemo />
      </div>

      {/* Navegação fixa no topo */}
      <FloatingNavDemo/>

      {/* Projetos desenvolvidos */}
      <div className="py-20 flex flex-col items-center">
        <ProjectTitle title="Projetos desenvolvidos" />
        <ProjectShowcase />
      </div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 gap-8 py-20">
        <WorkExperience />
      </section>

      {/* Efeitos Visuais */}
      <section className="py-20 flex flex-col gap-16 items-center justify-center px-4">
        <CanvasRevealEffectDemo />
      </section>

      {/* Formulário de Contato */}
      <section className="py-20 flex justify-center items-center px-4">
        <ContactSection />
      </section>

      {/* Rodapé */}
      <footer className="py-10 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Meu Portfólio
      </footer>
    </main>
  );
}
