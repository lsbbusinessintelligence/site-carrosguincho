import { motion } from "framer-motion";
import { Clock, Wrench, Navigation, Star } from "lucide-react";

const diferenciais = [
  {
    icon: Clock,
    title: "Atendimento 24 Horas",
    desc: "Guincho e mecânica de emergência disponíveis a qualquer hora do dia ou da noite. Pane às 3 da manhã? Estamos prontos.",
    highlight: "24h • 7 dias",
  },
  {
    icon: Wrench,
    title: "Equipe Mecânica Especializada",
    desc: "Centro automotivo completo com mecânicos experientes. Diagnóstico preciso, peças de qualidade e serviço com garantia.",
    highlight: "Serviço Garantido",
  },
  {
    icon: Navigation,
    title: "Chegada Ágil na Região",
    desc: "Atendimento rápido em Vitória da Conquista e toda a região sudoeste da Bahia. Frota própria de guincho para máxima agilidade.",
    highlight: "VCA & Sudoeste BA",
  },
  {
    icon: Star,
    title: "4.8 Estrelas · 50 Avaliações",
    desc: "Histórico comprovado de excelência com clientes reais. Nota média de 4.8 e mais de 50 avaliações positivas — confiança que fala por si.",
    highlight: "Confiança Provada",
  },
];

const DiferenciaisSection = () => (
  <section
    className="py-20 md:py-28 relative overflow-hidden"
    style={{
      background:
        "linear-gradient(160deg, hsl(0 35% 8%) 0%, hsl(210 18% 7%) 60%, hsl(0 25% 7%) 100%)",
    }}
  >
    {/* Decorative angular red stripe left */}
    <div
      className="absolute left-0 top-0 bottom-0 w-2"
      style={{
        background:
          "linear-gradient(180deg, transparent, hsl(0 65% 38% / 0.7) 30%, hsl(0 65% 38% / 0.7) 70%, transparent)",
      }}
    />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[hsl(0_65%_38%/0.4)] via-[hsl(210_15%_50%/0.2)] to-transparent" />

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
            Por que nos escolher
          </div>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4">
          <span className="text-chrome">Dupla Expertise:</span>
          <br />
          <span className="text-red-metal">Reboque + Mecânica</span>
        </h2>
        <p className="text-[hsl(210_8%_55%)] text-lg max-w-2xl mx-auto">
          Mais do que um simples guincho — somos o parceiro completo para o seu
          veículo, da estrada à oficina.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {diferenciais.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="relative p-6 rounded-sm overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, hsl(210 15% 10%) 0%, hsl(210 12% 13%) 100%)",
              border: "1px solid hsl(210 15% 18%)",
            }}
          >
            {/* Top-left corner red accent */}
            <div
              className="absolute top-0 left-0 w-6 h-6"
              style={{
                background: "hsl(0 65% 38%)",
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
            />

            {/* Icon */}
            <div
              className="w-14 h-14 rounded-sm flex items-center justify-center mb-5 mt-2"
              style={{
                background:
                  "linear-gradient(135deg, hsl(0 65% 28% / 0.2) 0%, hsl(0 65% 28% / 0.08) 100%)",
                border: "1px solid hsl(0 65% 38% / 0.3)",
              }}
            >
              <d.icon className="w-7 h-7 text-[hsl(0_65%_55%)]" />
            </div>

            {/* Highlight badge */}
            <div
              className="inline-block px-2 py-0.5 rounded-full text-[10px] font-body font-bold uppercase tracking-wider mb-3"
              style={{
                background: "hsl(0 65% 28% / 0.25)",
                border: "1px solid hsl(0 65% 38% / 0.4)",
                color: "hsl(0 65% 65%)",
              }}
            >
              {d.highlight}
            </div>

            <h3 className="font-heading text-lg font-bold text-[hsl(210_10%_88%)] uppercase tracking-wide mb-2">
              {d.title}
            </h3>
            <p className="text-[hsl(210_8%_52%)] text-sm font-body leading-relaxed">
              {d.desc}
            </p>

            {/* Hover bottom glow */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(0 65% 40% / 0.6), transparent)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(210_15%_35%/0.25)] to-transparent" />
  </section>
);

export default DiferenciaisSection;
