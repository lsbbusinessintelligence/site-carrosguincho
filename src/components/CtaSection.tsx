import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5577991530506?text=Ol%C3%A1!%20Preciso%20de%20socorro%20em%20Vit%C3%B3ria%20da%20Conquista.%20%C3%89%20para%20guincho%20ou%20mec%C3%A2nica%3F";

const PHONE_1 = "tel:+5577988148551";
const PHONE_2 = "tel:+5577991530506";

const fireGA = (label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click_whatsapp", {
      event_category: "lead",
      event_label: label,
    });
  }
};

const fireGACall = (label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click_call", {
      event_category: "lead",
      event_label: label,
    });
  }
};

const CtaSection = () => (
  <section
    id="contato"
    className="py-20 md:py-28 relative overflow-hidden"
    style={{
      background:
        "linear-gradient(160deg, hsl(210 20% 5%) 0%, hsl(0 30% 8%) 50%, hsl(210 20% 5%) 100%)",
    }}
  >
    {/* Metal stripe decoration */}
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, transparent, transparent 8px, hsl(210 20% 80%) 8px, hsl(210 20% 80%) 9px)",
      }}
    />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(0_60%_38%/0.4)] to-transparent" />

    {/* Angular shield accent — red */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none">
      <div
        className="w-px h-20 mx-auto"
        style={{
          background:
            "linear-gradient(180deg, hsl(0 65% 38% / 0.8), transparent)",
        }}
      />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto"
      >
        {/* Urgency tag */}
        <div className="flex justify-center mb-6">
          <div
            className="px-5 py-2 text-sm font-body font-bold uppercase tracking-wider"
            style={{
              background: "hsl(0 65% 28%)",
              border: "1px solid hsl(0 65% 42% / 0.5)",
              color: "hsl(0 0% 92%)",
            }}
          >
            🚨 Emergência? Ligue Agora!
          </div>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight mb-6">
          <span className="text-chrome">Não Fique na Mão!</span>
          <br />
          <span className="text-red-metal">
            Guincho ou Mecânica — Carros Guincho 24h
          </span>
          <br />
          <span
            className="text-[hsl(210_10%_65%)] text-2xl md:text-3xl normal-case tracking-normal"
            style={{ fontWeight: 500, fontFamily: "'Montserrat', sans-serif" }}
          >
            é a sua solução em Vitória da Conquista.
          </span>
        </h2>

        <p className="text-[hsl(210_8%_55%)] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Para guincho ou mecânica, Carros Guincho 24 Horas é a sua solução.
          Atendimento rápido, equipe especializada e confiança comprovada com
          mais de 50 avaliações positivas.
        </p>

        {/* Main WhatsApp CTA */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-sm font-body font-bold text-white text-xl transition-all duration-200 hover:brightness-110 mb-6"
          style={{
            background:
              "linear-gradient(135deg, hsl(125 65% 20%) 0%, hsl(125 60% 27%) 50%, hsl(125 65% 18%) 100%)",
            border: "1px solid hsl(125 50% 35% / 0.5)",
            boxShadow:
              "0 0 40px -8px hsl(125 60% 25% / 0.7), 0 6px 30px -6px hsl(0 0% 0% / 0.4)",
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => fireGA("botao_whatsapp_cta_final")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp
        </motion.a>

        {/* Phone links */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-2">
          <a
            href={PHONE_1}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm font-body font-semibold text-black text-base transition-all duration-200"
            style={{
              background: "#BFEFFF",
              border: "2px solid #000000",
            }}
            onClick={() => fireGACall("ligação_numero1_cta")}
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            (77) 98814-8551
          </a>
          <a
            href={PHONE_2}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm font-body font-semibold text-black text-base transition-all duration-200"
            style={{
              background: "#BFEFFF",
              border: "2px solid #000000",
            }}
            onClick={() => fireGACall("ligação_numero2_cta")}
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            (77) 99153-0506
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[
            "✅ Guincho 24h",
            "🔧 Mecânica Completa",
            "⭐ 4.8 Estrelas",
            "📍 Vitória da Conquista e Região",
          ].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1.5 text-sm font-body text-[hsl(210_8%_55%)]"
              style={{
                background: "hsl(210 15% 10%)",
                border: "1px solid hsl(210 15% 18%)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(0_60%_38%/0.3)] to-transparent" />
  </section>
);

export default CtaSection;
