import { motion } from "framer-motion";
import { Phone, Star, Clock, MapPin } from "lucide-react";

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

const HeroSection = () => (
  <section className="hero-gradient relative overflow-hidden min-h-screen flex items-center">
    {/* Metal texture overlay */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 3px, hsl(210 20% 80%) 3px, hsl(210 20% 80%) 4px)",
        }}
      />
      {/* Red glow orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(0_65%_35%/0.06)] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(0_65%_35%/0.04)] blur-3xl" />
      {/* Chrome shimmer top strip */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(210_20%_70%/0.25)] to-transparent" />
    </div>

    {/* Shield decorative element — right side, desktop only */}
    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none overflow-hidden">
      <div
        className="absolute top-0 -right-16 bottom-0 opacity-40"
        style={{
          background:
            "linear-gradient(160deg, hsl(210 18% 12%) 0%, hsl(0 40% 12%) 100%)",
          clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />
      {/* Shield border glow */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: "14.5%",
          width: "2px",
          background:
            "linear-gradient(180deg, transparent 0%, hsl(0 70% 38% / 0.5) 30%, hsl(210 20% 70% / 0.3) 70%, transparent 100%)",
        }}
      />
    </div>

    <div className="container relative z-10 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-body font-semibold"
              style={{
                background:
                  "linear-gradient(135deg, hsl(0 65% 28%) 0%, hsl(0 70% 34%) 100%)",
                border: "1px solid hsl(0 65% 45% / 0.4)",
                color: "hsl(0 0% 95%)",
                letterSpacing: "0.05em",
              }}
            >
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>ATENDIMENTO 24 HORAS</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 uppercase tracking-wide">
            <span className="text-chrome">Centro Automotivo</span>
            <br />
            <span className="text-red-metal">com Guincho 24 Horas</span>
            <br />
            <span
              className="text-[hsl(210_10%_75%)] text-3xl md:text-4xl lg:text-5xl normal-case tracking-normal"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            >
              em Vitória da Conquista
            </span>
          </h1>

          <p className="text-[hsl(210_8%_65%)] text-lg md:text-xl mb-4 max-w-xl leading-relaxed">
            Socorro rápido para reboque e soluções mecânicas de confiança.
            Sua paz de espírito em caso de pane ou acidente — mecânica de alta
            qualidade e guincho ágil sob o mesmo teto.
          </p>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i <= 4 ? "star-gold fill-current" : "star-gold fill-current opacity-80"}`}
                />
              ))}
            </div>
            <span className="text-[hsl(210_8%_65%)] text-sm font-body">
              <strong className="text-[hsl(45_95%_60%)]">4.8</strong> estrelas
              · <strong className="text-[hsl(210_10%_80%)]">50+</strong>{" "}
              avaliações
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-sm font-body font-bold text-white text-lg transition-all duration-200 hover:brightness-110"
              style={{
                background:
                  "linear-gradient(135deg, hsl(125 65% 20%) 0%, hsl(125 60% 27%) 50%, hsl(125 65% 18%) 100%)",
                border: "1px solid hsl(125 50% 35% / 0.5)",
                boxShadow:
                  "0 0 30px -5px hsl(125 60% 25% / 0.6), 0 4px 20px -4px hsl(0 0% 0% / 0.4)",
              }}
              onClick={() => fireGA("botao_whatsapp_hero")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar Socorro Agora
            </a>

            {/* Phone call buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={PHONE_1}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-sm font-body font-semibold text-[hsl(210_10%_80%)] text-base transition-all duration-200 hover:text-white"
                style={{
                  background: "hsl(210 15% 13%)",
                  border: "1px solid hsl(210 15% 25%)",
                }}
                onClick={() => fireGACall("ligação_numero1_hero")}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (77) 98814-8551
              </a>
              <a
                href={PHONE_2}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-sm font-body font-semibold text-[hsl(210_10%_80%)] text-base transition-all duration-200 hover:text-white"
                style={{
                  background: "hsl(210 15% 13%)",
                  border: "1px solid hsl(210 15% 25%)",
                }}
                onClick={() => fireGACall("ligação_numero2_hero")}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (77) 99153-0506
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 text-[hsl(210_8%_50%)] text-sm">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(0_60%_45%)]" />
            <span>
              Av. Juracy Magalhães, 3340 – Felícia, Vitória da Conquista – BA
            </span>
          </div>
        </motion.div>

        {/* Right: Logo / Image showcase */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex flex-col items-center gap-6"
        >
          {/* Shield frame with logo */}
          <div className="relative w-72 h-80">
            {/* Outer shield glow */}
            <div
              className="absolute inset-0 opacity-20 blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse, hsl(0 70% 38%) 0%, transparent 70%)",
              }}
            />
            {/* Shield border decoration */}
            <svg
              viewBox="0 0 240 280"
              className="absolute inset-0 w-full h-full"
              fill="none"
            >
              <path
                d="M120 8L228 56V172C228 220 120 272 120 272C120 272 12 220 12 172V56L120 8Z"
                stroke="url(#shieldGrad)"
                strokeWidth="2"
                fill="url(#shieldFill)"
              />
              <defs>
                <linearGradient
                  id="shieldGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="hsl(210,18%,55%)" />
                  <stop offset="40%" stopColor="hsl(210,20%,80%)" />
                  <stop offset="60%" stopColor="hsl(0,65%,40%)" />
                  <stop offset="100%" stopColor="hsl(210,18%,35%)" />
                </linearGradient>
                <linearGradient
                  id="shieldFill"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="hsl(210,18%,10%)" />
                  <stop offset="100%" stopColor="hsl(0,30%,10%)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Logo inside shield */}
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <img
                src="/images/carrosguincho/CARROSGUINHO-LOGO.jpeg"
                alt="Carros Guincho 24 Horas & Centro Automotivo logo"
                className="w-full h-full object-contain rounded-sm"
                style={{ filter: "drop-shadow(0 4px 24px hsl(0 70% 38% / 0.3))" }}
              />
            </div>
          </div>

          {/* Info cards below shield */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            {[
              { icon: "⚡", label: "Guincho 24h" },
              { icon: "🔧", label: "Mecânica Completa" },
              { icon: "📍", label: "VCA e Região" },
              { icon: "⭐", label: "4.8 · 50+ Aval." },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1 px-3 py-3 rounded-sm text-center"
                style={{
                  background: "hsl(210 15% 11%)",
                  border: "1px solid hsl(210 15% 20%)",
                }}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-[hsl(210_10%_70%)] text-xs font-body font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
