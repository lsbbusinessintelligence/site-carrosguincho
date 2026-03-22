import { motion } from "framer-motion";
import { Truck, Wrench, Droplets, Filter, AlignCenter, ShoppingBag, Zap, KeyRound } from "lucide-react";

const servicos = [
  {
    icon: Truck,
    title: "Guincho / Reboque 24h",
    subtitle: "Carros e Motos",
    desc: "Socorro para reboque e remoção de veículos a qualquer hora. Atendimento rápido em Vitória da Conquista e região sudoeste da BA.",
    color: "hsl(0 70% 38%)",
  },
  {
    icon: Wrench,
    title: "Mecânica em Geral",
    subtitle: "Serviço Completo",
    desc: "Diagnóstico e reparo completo para carros e motos. Da manutenção preventiva a reparos emergenciais — tudo sob o mesmo teto.",
    color: "hsl(210 15% 60%)",
  },
  {
    icon: Droplets,
    title: "Limpeza de Bicos Injetores",
    subtitle: "Motor de Alta Performance",
    desc: "Restabelece a potência e economia do motor com limpeza ultrassônica dos bicos injetores. Mais força, menos consumo.",
    color: "hsl(200 70% 45%)",
  },
  {
    icon: Filter,
    title: "Troca de Óleo e Filtros",
    subtitle: "Manutenção Preventiva",
    desc: "Óleo e filtros trocados com produtos de qualidade para prolongar a vida útil do seu motor. Rápido, seguro e com garantia.",
    color: "hsl(35 90% 50%)",
  },
  {
    icon: AlignCenter,
    title: "Alinhamento e Balanceamento",
    subtitle: "Precisão e Segurança",
    desc: "Geometria correta para pneus e suspensão — mais segurança, padrão de toque no volante e durabilidade dos pneus.",
    color: "hsl(0 70% 38%)",
  },
  {
    icon: ShoppingBag,
    title: "Peças e Pneus",
    subtitle: "Apoio Completo",
    desc: "Fornecimento de peças originais e alternativas de qualidade, além de pneus para todos os tipos de veículo. Instalação na hora.",
    color: "hsl(210 15% 55%)",
  },
  {
    icon: Zap,
    title: "Socorro Elétrico",
    subtitle: "Bateria e Elétrica Automotiva",
    desc: "Recarga de bateria em campo, troca emergencial e diagnóstico elétrico. Não perca compromisso por falta de bateria.",
    color: "hsl(55 95% 50%)",
  },
  {
    icon: KeyRound,
    title: "Chaveiro Automotivo",
    subtitle: "Abertura de Veículo",
    desc: "Ficou com a chave presa ou no carro fechado? Abertura especializada sem danos ao veículo. Atendimento rápido no local.",
    color: "hsl(270 60% 55%)",
  },
];

const ServicosSection = () => (
  <section
    id="servicos"
    className="py-20 md:py-28 relative overflow-hidden"
    style={{ background: "hsl(210 15% 7%)" }}
  >
    {/* Top chrome strip */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(210_15%_45%/0.3)] to-transparent" />

    <div className="container relative z-10">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        {/* Decorative shield icon */}
        <div className="flex justify-center mb-4">
          <div
            className="px-4 py-1.5 text-xs font-body font-bold uppercase tracking-[0.2em]"
            style={{
              background: "hsl(0 65% 28%)",
              border: "1px solid hsl(0 65% 40% / 0.5)",
              color: "hsl(0 0% 90%)",
              clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            Nossos Serviços
          </div>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-4">
          <span className="text-chrome">Soluções Completas</span>
          <br />
          <span className="text-red-metal">para seu Veículo</span>
        </h2>
        <p className="text-[hsl(210_8%_55%)] text-lg max-w-2xl mx-auto">
          Guincho de emergência e mecânica especializada — reboque ou reparo,
          temos a solução certa na hora certa.
        </p>
      </motion.div>

      {/* Services grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {servicos.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="metal-card p-6 rounded-sm group cursor-default transition-all duration-300"
          >
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center mb-4"
              style={{
                background: `${s.color}18`,
                border: `1px solid ${s.color}35`,
              }}
            >
              <s.icon className="w-6 h-6" style={{ color: s.color }} />
            </div>

            {/* Text */}
            <h3 className="font-heading text-lg font-bold text-[hsl(210_10%_88%)] mb-1 uppercase tracking-wide">
              {s.title}
            </h3>
            <p
              className="text-xs font-body font-semibold mb-2 uppercase tracking-wider"
              style={{ color: s.color }}
            >
              {s.subtitle}
            </p>
            <p className="text-[hsl(210_8%_52%)] text-sm font-body leading-relaxed">
              {s.desc}
            </p>

            {/* Bottom accent line */}
            <div
              className="mt-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(90deg, ${s.color}, transparent)`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>

    {/* Bottom chrome strip */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(210_15%_45%/0.3)] to-transparent" />
  </section>
);

export default ServicosSection;
