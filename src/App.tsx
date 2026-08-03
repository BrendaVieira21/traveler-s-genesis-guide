import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CharacterCard from "@/components/CharacterCard";
import ClickButton from "@/components/ClickButton";
import { characters, regions } from "@/data/characters";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      <main className="max-w-5xl mx-auto px-4 pb-24">
        {regions.map((region) => {
          const regionChars = characters.filter((c) => c.region === region);
          if (regionChars.length === 0) return null;

          return (
            <section key={region} id={region} className="pt-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold font-display text-center mb-16"
              >
                — {region} —
              </motion.h2>

              <div className="space-y-24">
                {regionChars.map((char, i) => (
                  <CharacterCard key={char.id} character={char} index={i} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>Genshin Impact é marca registrada da HoYoverse. Este é um projeto educacional sem fins lucrativos.</p>
      </footer>
    </div>
  );
}

export default App;
