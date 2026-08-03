import { useState } from "react";
import { motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";

export default function ClickButton() {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-6 py-24"
    >
      <h2 className="text-2xl md:text-3xl font-bold font-display text-center">
        Teste seu reflexo
      </h2>
      <p className="text-muted-foreground text-center max-w-md">
        Clique no botão abaixo e veja o contador aumentar.
      </p>

      <button
        onClick={() => setCount((c) => c + 1)}
        className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MousePointerClick size={22} />
        <span>Clique aqui</span>
      </button>

      <p className="text-lg font-medium">
        {count === 0 ? "Nenhum clique ainda" : `Você clicou ${count} ${count === 1 ? "vez" : "vezes"}`}
      </p>
    </motion.div>
  );
}
