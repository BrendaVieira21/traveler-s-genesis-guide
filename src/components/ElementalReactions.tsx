import { Flame, Droplets, Snowflake, Zap, Leaf, Wind, Mountain } from "lucide-react";

const elements = [
  { name: "Pyro", icon: Flame, color: "text-genshin-pyro", bg: "bg-genshin-pyro/10" },
  { name: "Hydro", icon: Droplets, color: "text-genshin-hydro", bg: "bg-genshin-hydro/10" },
  { name: "Cryo", icon: Snowflake, color: "text-genshin-cryo", bg: "bg-genshin-cryo/10" },
  { name: "Electro", icon: Zap, color: "text-genshin-electro", bg: "bg-genshin-electro/10" },
  { name: "Dendro", icon: Leaf, color: "text-genshin-dendro", bg: "bg-genshin-dendro/10" },
  { name: "Anemo", icon: Wind, color: "text-genshin-anemo", bg: "bg-genshin-anemo/10" },
  { name: "Geo", icon: Mountain, color: "text-genshin-geo", bg: "bg-genshin-geo/10" },
];

const reactions = [
  { combo: "Pyro + Hydro", name: "Vaporize", effect: "Dano multiplicado por 1.5x ou 2x" },
  { combo: "Pyro + Cryo", name: "Melt", effect: "Dano multiplicado por 1.5x ou 2x" },
  { combo: "Hydro + Electro", name: "Electro-Charged", effect: "Dano Electro contínuo em área" },
  { combo: "Hydro + Cryo", name: "Frozen", effect: "Congela o inimigo, impedindo movimento" },
  { combo: "Pyro + Electro", name: "Overloaded", effect: "Explosão AoE que empurra inimigos" },
  { combo: "Cryo + Electro", name: "Superconduct", effect: "Reduz defesa física em 40%" },
];

export default function ElementalReactions() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Reações <span className="text-genshin-gold">Elementais</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Combine elementos para desencadear reações devastadoras. A chave para dominar Teyvat.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {elements.map((el) => (
            <div
              key={el.name}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl ${el.bg} border border-border hover:scale-105 transition-transform cursor-default`}
            >
              <el.icon className={el.color} size={20} />
              <span className={`font-semibold ${el.color}`}>{el.name}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reactions.map((r) => (
            <div
              key={r.name}
              className="bg-card border border-border rounded-2xl p-6 hover:border-genshin-gold/30 transition-all duration-300"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{r.combo}</p>
              <h3 className="text-lg font-bold text-genshin-gold mb-2">{r.name}</h3>
              <p className="text-muted-foreground text-sm">{r.effect}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
