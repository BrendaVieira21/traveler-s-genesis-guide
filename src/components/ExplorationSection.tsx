import explorationBg from "@/assets/exploration-bg.jpg";
import { MapPin, TrendingUp } from "lucide-react";

export default function ExplorationSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={explorationBg}
            alt="Estátua dos Sete em Teyvat"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-auto object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Explore <span className="text-genshin-gold">Teyvat</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            O mundo aberto de Genshin Impact é vasto e cheio de segredos. Escale montanhas,
            nade em rios, plane sobre vales e descubra tesouros escondidos em cada canto.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-genshin-gold/10 flex items-center justify-center shrink-0">
                <MapPin className="text-genshin-gold" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Estátuas dos Sete</h3>
                <p className="text-muted-foreground text-sm">
                  Ofereça Oculi às estátuas para aumentar sua Stamina e desbloquear
                  pontos de teletransporte pelo mapa.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-genshin-gold/10 flex items-center justify-center shrink-0">
                <TrendingUp className="text-genshin-gold" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Rank de Aventura (AR)</h3>
                <p className="text-muted-foreground text-sm">
                  Complete quests, abra baús e explore para ganhar EXP de Aventura.
                  Subir de AR desbloqueia novas regiões, dungeons e conteúdos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
