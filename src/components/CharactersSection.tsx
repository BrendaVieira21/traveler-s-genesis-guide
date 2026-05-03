import { Sword, Shield, Crosshair, Wand2, Flame, Droplets, Snowflake, Zap, Leaf } from "lucide-react";

const weapons = [
  { name: "Espada", icon: Sword, desc: "Ataques rápidos e versáteis" },
  { name: "Claymore", icon: Shield, desc: "Golpes pesados e quebra de escudos" },
  { name: "Arco", icon: Crosshair, desc: "Dano à distância com mira precisa" },
  { name: "Catalisador", icon: Wand2, desc: "Dano elemental puro em cada ataque" },
  { name: "Lança", icon: Sword, desc: "Alcance longo e ataques ágeis" },
];

const featured = [
  { name: "Diluc", element: "Pyro", weapon: "Claymore", icon: Flame, color: "text-genshin-pyro", border: "border-genshin-pyro/30" },
  { name: "Mona", element: "Hydro", weapon: "Catalisador", icon: Droplets, color: "text-genshin-hydro", border: "border-genshin-hydro/30" },
  { name: "Ganyu", element: "Cryo", weapon: "Arco", icon: Snowflake, color: "text-genshin-cryo", border: "border-genshin-cryo/30" },
  { name: "Keqing", element: "Electro", weapon: "Espada", icon: Zap, color: "text-genshin-electro", border: "border-genshin-electro/30" },
  { name: "Nahida", element: "Dendro", weapon: "Catalisador", icon: Leaf, color: "text-genshin-dendro", border: "border-genshin-dendro/30" },
];

export default function CharactersSection() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Personagens & <span className="text-genshin-gold">Armas</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Cada personagem possui um elemento e tipo de arma únicos. Monte o time perfeito.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {weapons.map((w) => (
            <div key={w.name} className="bg-card border border-border rounded-2xl px-5 py-4 text-center hover:border-genshin-gold/30 transition-all min-w-[140px]">
              <w.icon className="text-genshin-gold mx-auto mb-2" size={24} />
              <p className="font-semibold text-sm">{w.name}</p>
              <p className="text-muted-foreground text-xs mt-1">{w.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {featured.map((char) => (
            <div
              key={char.name}
              className={`bg-card border ${char.border} rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <char.icon className={char.color} size={28} />
              </div>
              <h3 className="font-bold">{char.name}</h3>
              <p className={`text-xs ${char.color} font-medium`}>{char.element}</p>
              <p className="text-muted-foreground text-xs mt-1">{char.weapon}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
