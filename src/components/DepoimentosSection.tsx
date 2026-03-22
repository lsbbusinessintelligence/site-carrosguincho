import { motion } from "framer-motion";
import { Star } from "lucide-react";

const avaliacoes = [
  { img: "/images/carrosguincho/CARROSGUINHO-AVALIACAO01.jpeg", alt: "Avaliação 1 - Carros Guincho 24h Vitória da Conquista" },
  { img: "/images/carrosguincho/CARROSGUINHO-AVALIACAO02.jpeg", alt: "Avaliação 2 - Carros Guincho 24h Vitória da Conquista" },
  { img: "/images/carrosguincho/CARROSGUINHO-AVALIACAO03.jpeg", alt: "Avaliação 3 - Carros Guincho 24h Vitória da Conquista" },
  { img: "/images/carrosguincho/CARROSGUINHO-AVALIACAO04.jpeg", alt: "Avaliação 4 - Carros Guincho 24h Vitória da Conquista" },
  { img: "/images/carrosguincho/CARROSGUINHO-AVALIACAO05.jpeg", alt: "Avaliação 5 - Carros Guincho 24h Vitória da Conquista" },
  { img: "/images/carrosguincho/CARROSGUINHO-AVALIACAO06.jpeg", alt: "Avaliação 6 - Carros Guincho 24h Vitória da Conquista" },
];

const DepoimentosSection = () => (
  <section
    id="avaliacoes"
    className="py-20 md:py-28 relative overflow-hidden"
    style={{
      background:
        "linear-gradient(180deg, hsl(210 15% 6%) 0%, hsl(0 20% 7%) 60%, hsl(210 15% 6%) 100%)",
    }}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(210_15%_40%/0.3)] to-transparent" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="flex justify-center mb-4">
          <div
            className="px-6 py-1.5 text-xs font-body font-bold uppercase tracking-[0.2em]"
            style={{
              background: "hsl(210 15% 12%)",
              border: "1px solid hsl(210 15% 25%)",
              color: "hsl(210 10% 65%)",
              clipPath:
                "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            Avaliações Reais
          </div>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4">
          <span className="text-chrome">O que Nossos Clientes</span>
          <br />
          <span className="text-red-metal">Dizem de Nós</span>
        </h2>

        {/* Aggregate rating pill */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-sm"
            style={{
              background: "hsl(210 15% 10%)",
              border: "1px solid hsl(45 90% 55% / 0.3)",
              boxShadow: "0 0 30px -10px hsl(45 90% 55% / 0.2)",
            }}
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 star-gold ${i <= 4 ? "fill-current" : "fill-current opacity-80"}`}
                />
              ))}
            </div>
            <div className="border-l border-[hsl(210_15%_25%)] pl-3">
              <span className="font-heading text-2xl font-bold text-[hsl(45_90%_60%)]">
                4.8
              </span>
              <span className="text-[hsl(210_8%_55%)] text-sm font-body ml-1">
                / 5 stars
              </span>
            </div>
            <div className="border-l border-[hsl(210_15%_25%)] pl-3">
              <span className="font-heading text-xl font-bold text-[hsl(210_10%_80%)]">
                50+
              </span>
              <span className="text-[hsl(210_8%_55%)] text-sm font-body ml-1">
                avaliações
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reviews grid — screenshots */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {avaliacoes.map((av, i) => (
          <motion.div
            key={av.img}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-sm overflow-hidden"
            style={{
              border: "1px solid hsl(210 15% 20%)",
              boxShadow: "0 4px 20px -8px hsl(0 0% 0% / 0.4)",
            }}
          >
            <img
              src={av.img}
              alt={av.alt}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom trust paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center text-[hsl(210_8%_45%)] text-sm font-body mt-10 max-w-xl mx-auto"
      >
        Avaliações verificadas de clientes reais no Google — reboque e mecânica
        que geram confiança em Vitória da Conquista e região.
      </motion.p>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(210_15%_35%/0.25)] to-transparent" />
  </section>
);

export default DepoimentosSection;
