import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
// Adições conforme o roteiro (Passo 3 - Importar funções) [cite: 114, 115, 116]
import { useEffect, useState } from "react";
import { fetchPagina } from "../utils/fetchPagina";
import { parseContent } from "../utils/parseContent";

// Adição conforme o roteiro (Passo 3 - Definir tipo Conteudo) [cite: 149]
type Conteudo = ReturnType<typeof parseContent>;

export default function HeroSection() {
  // Adição conforme o roteiro (Passo 3 - Declarar estado) [cite: 153]
  const [conteudo, setConteudo] = useState<Conteudo | null>(null);

  // Adição conforme o roteiro (Passo 3 - useEffect para buscar dados) [cite: 154, 155]
  useEffect(() => {
    fetchPagina("pagina-1") // Slug da página no WordPress [cite: 155]
      .then(pagina => {
        // Separa o HTML em arrays de parágrafos, títulos, etc [cite: 159]
        const elementos = parseContent(pagina.content.rendered);
        setConteudo(elementos);
      })
      .catch(() => {
        console.warn("Não foi possível buscar o conteúdo do WordPress."); 
      });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary text-sm tracking-[0.3em] uppercase mb-4"
        >
          {/* Acessa o primeiro parágrafo do WP [cite: 184] */}
          {conteudo?.paragrafos[0]?.textContent || "Genshin Impact"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight"
        >
          {/* Acessa os títulos do WP [cite: 182] */}
          {conteudo?.titulos[0]?.textContent || "Guia do"} <br />
          <span className="text-primary">
            {conteudo?.titulos[1]?.textContent || "Viajante"}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-md mx-auto text-lg mb-12"
        >
          {/* Acessa o segundo parágrafo do WP [cite: 184] */}
          {conteudo?.paragrafos[1]?.textContent || "Conheça os personagens lendários de Teyvat e seus poderes elementais."}
        </motion.p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="mx-auto text-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
}