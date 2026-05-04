import { useState, useEffect } from "react";
import { Menu, X, Compass } from "lucide-react";
import { regions } from "@/data/characters";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 text-lg font-bold font-display text-foreground hover:text-primary transition-colors">
          <Compass size={22} className="text-primary" />
          Guia do Viajante
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => scrollTo(r)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {r}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => scrollTo(r)}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {r}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
