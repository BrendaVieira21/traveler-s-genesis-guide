import { Flame, Droplets, Zap, Snowflake, Leaf, Wind, Mountain } from "lucide-react";
import type { Element } from "@/data/characters";
import { elementColors } from "@/data/characters";

const elementIcons: Record<Element, React.ComponentType<{ size?: number; className?: string }>> = {
  Pyro: Flame,
  Hydro: Droplets,
  Electro: Zap,
  Cryo: Snowflake,
  Dendro: Leaf,
  Anemo: Wind,
  Geo: Mountain,
};

export default function ElementBadge({ element }: { element: Element }) {
  const Icon = elementIcons[element];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${elementColors[element]}`}>
      <Icon size={14} />
      {element}
    </span>
  );
}
