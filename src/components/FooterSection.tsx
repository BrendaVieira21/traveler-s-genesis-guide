import { ExternalLink } from "lucide-react";

const links = [
  { label: "Genshin Wiki", url: "https://genshin-impact.fandom.com" },
  { label: "Mapa Interativo", url: "https://act.hoyolab.com/ys/app/interactive-map" },
  { label: "HoYoLAB", url: "https://www.hoyolab.com" },
  { label: "Site Oficial", url: "https://genshin.hoyoverse.com" },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-1">
              Genshin Impact: <span className="text-genshin-gold">Guia do Viajante</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Conteúdo educativo feito por fãs. Não afiliado à HoYoverse.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-genshin-gold transition-colors"
              >
                {link.label}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 Guia do Viajante. Genshin Impact é marca registrada da HoYoverse.
          </p>
        </div>
      </div>
    </footer>
  );
}
