import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Character } from "@/data/characters";
import { elementGlow } from "@/data/characters";
import ElementBadge from "./ElementBadge";

interface Props {
  character: Character;
  index: number;
}

export default function CharacterCard({ character, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-16`}
    >
      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl ${elementGlow[character.element]} flex-shrink-0`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </motion.div>

      {/* Info */}
      <div className="flex-1 text-center md:text-left max-w-lg">
        <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
          {Array.from({ length: character.rarity }).map((_, i) => (
            <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display">{character.name}</h2>

        <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
          <ElementBadge element={character.element} />
          <span className="text-sm text-muted-foreground">{character.weapon}</span>
          <span className="text-xs text-muted-foreground/60">•</span>
          <span className="text-sm text-muted-foreground">{character.region}</span>
        </div>

        <p className="text-muted-foreground leading-relaxed">{character.description}</p>
      </div>
    </motion.div>
  );
}
