import { AnimatedPinDemo } from "@/components/Pin"
import { FloatingNavDemo } from "@/components/NavBar"
import { FlipWordsDemo } from "@/components/flip"
import { HeroHighlightDemo } from "@/components/hero"
import { PointerHighlightDemo } from "@/components/pointer"
import { WavyBackgroundDemo } from "@/components/wavy"
import { SignupFormDemo } from "@/components/form"
import { CanvasRevealEffectDemo } from "@/components/canvas"

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex flex-col">
    
      {/* Background */}
      <WavyBackgroundDemo />

      {/* Navegação fixa no topo */}
      <FloatingNavDemo />


      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 gap-8">
        <HeroHighlightDemo />
        <FlipWordsDemo />
      </section>

      {/* Projetos / Pin */}
      <section className="py-20 flex justify-center items-center px-4">
        <AnimatedPinDemo />
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
      <footer className="py-10 text-center text-black text-sm">
        © {new Date().getFullYear()} Meu Portfólio
      </footer>
    </main>
  )
}
