import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Teyvat landscape"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-genshin-gold tracking-[0.3em] uppercase text-sm mb-4 animate-glow-pulse">
          Guia do Viajante
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          Genshin <span className="text-genshin-gold">Impact</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10">
          Tudo o que você precisa saber para começar sua jornada por Teyvat.
          Elementos, combate, exploração e muito mais.
        </p>
        <a
          href="#combate"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:brightness-110 transition-all shadow-[0_0_30px_var(--genshin-gold-dim)]"
        >
          Começar Aventura
        </a>
      </div>

      <a
        href="#combate"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-genshin-gold animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
