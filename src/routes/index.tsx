import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import CombatSection from "@/components/CombatSection";
import ElementalReactions from "@/components/ElementalReactions";
import ExplorationSection from "@/components/ExplorationSection";
import CharactersSection from "@/components/CharactersSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <CombatSection />
      <ElementalReactions />
      <ExplorationSection />
      <CharactersSection />
      <FooterSection />
    </div>
  );
}
