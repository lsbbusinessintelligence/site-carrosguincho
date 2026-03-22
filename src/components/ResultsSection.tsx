import { motion } from "framer-motion";

const fotos = [
  {
    src: "/images/carrosguincho/CARROSGUINHO-FOTOSITE01.jpeg",
    alt: "Guincho Carros 24h em reboque em Vitória da Conquista",
    label: "Reboque em Ação",
  },
  {
    src: "/images/carrosguincho/CARROSGUINHO-FOTOSITE02.jpeg",
    alt: "Mecânico Carros Guincho 24h em oficina de Vitória da Conquista",
    label: "Mecânica Especializada",
  },
  {
    src: "/images/carrosguincho/CARROSGUINHO-FOTOSITE03.jpeg",
    alt: "Guincho carregando carro em Vitória da Conquista",
    label: "Socorro no Local",
  },
  {
    src: "/images/carrosguincho/CARROSGUINHO-FOTOSITE04.jpeg",
    alt: "Centro Automotivo Carros Guincho 24h Vitória da Conquista",
    label: "Centro Automotivo",
  },
  {
    src: "/images/carrosguincho/CARROSGUINHO-FOTOSITE05.jpeg",
    alt: "Reboque de moto em Vitória da Conquista BA",
    label: "Reboque de Motos",
  },
  {
    src: "/images/carrosguincho/CARROSGUINHO-FOTOSITE06.jpeg",
    alt: "Troca de óleo e filtros em oficina de Vitória da Conquista",
    label: "Troca de Óleo",
  },
  {
    src: "/images/carrosguincho/CARROSGUINHO-FOTOSITE07.jpeg",
    alt: "Alinhamento e balanceamento em Vitória da Conquista",
    label: "Alinhamento",
  },
  {
    src: "/images/carrosguincho/CARROSGUINHO-FOTOSITE08.jpeg",
    alt: "Serviços de mecânica automotiva em Vitória da Conquista",
    label: "Mecânica Geral",
  },
  {
    src: "/images/carrosguincho/CARROSGUINHO-FOTOSITE09.jpeg",
    alt: "Pneus e peças automotivas em Vitória da Conquista",
    label: "Peças e Pneus",
  },
];

const ResultsSection = () => (
  <section
    id="resultados"
    className="py-20 md:py-28 relative overflow-hidden"
    style={{ background: "hsl(210 15% 6%)" }}
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(0_60%_38%/0.3)] to-transparent" />

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
              background: "hsl(0 65% 28%)",
              border: "1px solid hsl(0 65% 40% / 0.5)",
              color: "hsl(0 0% 90%)",
              clipPath:
                "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            Trabalhos Realizados
          </div>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4">
          <span className="text-chrome">Guincho e Mecânica</span>
          <br />
          <span className="text-red-metal">em Ação Real</span>
        </h2>
        <p className="text-[hsl(210_8%_55%)] text-lg max-w-2xl mx-auto">
          Veja nossos serviços de reboque e mecânica registrados com clientes
          reais de Vitória da Conquista e região.
        </p>
      </motion.div>

      {/* Main featured image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mb-4 rounded-sm overflow-hidden"
        style={{
          border: "1px solid hsl(210 15% 20%)",
          boxShadow: "0 0 60px -20px hsl(0 65% 38% / 0.3)",
        }}
      >
        <img
          src="/images/carrosguincho/CARROSGUINHO-FOTOSITE01.jpeg"
          alt="Guincho Carros 24h em reboque em Vitória da Conquista"
          className="w-full h-64 md:h-96 object-cover"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, hsl(210 18% 6%) 0%, transparent 60%)",
          }}
        />
        <div className="absolute bottom-4 left-4">
          <span
            className="px-3 py-1 text-xs font-body font-bold uppercase tracking-wider"
            style={{
              background: "hsl(0 65% 28%)",
              border: "1px solid hsl(0 65% 40% / 0.5)",
              color: "hsl(0 0% 90%)",
            }}
          >
            Reboque em Ação
          </span>
        </div>
      </motion.div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {fotos.slice(1).map((foto, i) => (
          <motion.div
            key={foto.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="relative rounded-sm overflow-hidden group cursor-default"
            style={{ border: "1px solid hsl(210 15% 18%)" }}
          >
            <img
              src={foto.src}
              alt={foto.alt}
              className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Label overlay */}
            <div
              className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(to top, hsl(0 65% 15% / 0.85) 0%, transparent 60%)",
              }}
            >
              <span className="p-2 text-xs font-body font-semibold text-white uppercase tracking-wide">
                {foto.label}
              </span>
            </div>
            {/* Hover chrome border */}
            <div
              className="absolute inset-0 border border-[hsl(0_65%_38%/0)] group-hover:border-[hsl(0_65%_38%/0.4)] transition-all duration-300 rounded-sm"
            />
          </motion.div>
        ))}
      </div>


    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(210_15%_35%/0.25)] to-transparent" />
  </section>
);

export default ResultsSection;
