import { Sword, Sparkles, Star } from "lucide-react";

const combatCards = [
  {
    icon: Sword,
    title: "Ataques Normais",
    desc: "Cada personagem possui uma sequência única de ataques corpo a corpo ou à distância. Domine os combos para maximizar o dano.",
  },
  {
    icon: Sparkles,
    title: "Habilidade Elemental",
    desc: "Pressione E para usar a Habilidade Elemental. Cada personagem canaliza seu elemento de forma única, com cooldowns variados.",
  },
  {
    icon: Star,
    title: "Supremo (Burst)",
    desc: "Acumule energia elemental e libere o Supremo com Q. Ataques devastadores que podem mudar o rumo da batalha.",
  },
];

export default function CombatSection() {
  return (
    <section id="combate" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Sistema de <span className="text-genshin-gold">Combate</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Domine os três pilares do combate para se tornar um viajante lendário.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {combatCards.map((card) => (
            <div
              key={card.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-genshin-gold/50 transition-all duration-300 hover:shadow-[0_0_20px_var(--genshin-gold-dim)] hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-genshin-gold/10 transition-colors">
                <card.icon className="text-genshin-gold" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-[var(--font-display)]">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
