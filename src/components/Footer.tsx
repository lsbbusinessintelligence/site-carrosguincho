import { MapPin, Phone, Clock } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5577991530506?text=Ol%C3%A1!%20Preciso%20de%20um%20atendimento%20de%20guincho%20ou%20mec%C3%A2nica%20automotiva.";

const Footer = () => (
  <footer
    className="py-14 relative overflow-hidden"
    style={{
      background: "hsl(210 20% 4%)",
      borderTop: "1px solid hsl(210 15% 15%)",
    }}
  >
    {/* Top accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-[2px]"
      style={{
        background:
          "linear-gradient(90deg, transparent, hsl(0 65% 38% / 0.6) 30%, hsl(210 20% 65% / 0.3) 70%, transparent)",
      }}
    />

    <div className="container relative z-10">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/carrosguincho/CARROSGUINHO-LOGO.jpeg"
              alt="Carros Guincho 24 Horas & Centro Automotivo"
              className="w-14 h-14 rounded-sm object-cover"
              style={{ border: "1px solid hsl(210 15% 20%)" }}
            />
            <div>
              <h3 className="font-heading text-base font-bold uppercase tracking-wide text-[hsl(210_10%_85%)]">
                Carros Guincho
              </h3>
              <p className="text-[hsl(0_60%_50%)] text-xs font-body font-semibold uppercase tracking-wider">
                24 Horas & Centro Automotivo
              </p>
            </div>
          </div>
          <p className="text-[hsl(210_8%_45%)] text-sm font-body leading-relaxed mb-4">
            Guincho de emergência e mecânica especializada em Vitória da
            Conquista e região sudoeste da Bahia. Confiança comprovada, 24 horas
            por dia.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-body font-semibold text-white transition-all hover:brightness-110"
            style={{
              background:
                "linear-gradient(135deg, hsl(125 65% 20%) 0%, hsl(125 60% 27%) 100%)",
              border: "1px solid hsl(125 50% 35% / 0.5)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chamar no WhatsApp
          </a>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-[hsl(210_10%_65%)] mb-5">
            Contato
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-[hsl(0_60%_50%)] flex-shrink-0" />
              <div>
                <a
                  href="tel:+5577988148551"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-body font-semibold text-black transition-all hover:brightness-95 mb-1"
                  style={{ background: "#BFEFFF", border: "2px solid #000000" }}
                >
                  (77) 98814-8551
                </a>
                <a
                  href="tel:+5577991530506"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-body font-semibold text-black transition-all hover:brightness-95"
                  style={{ background: "#BFEFFF", border: "2px solid #000000" }}
                >
                  (77) 99153-0506
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[hsl(0_60%_50%)] flex-shrink-0" />
              <address className="not-italic text-[hsl(210_8%_55%)] text-sm font-body leading-relaxed">
                Av. Juracy Magalhães, 3340
                <br />
                Felícia – Vitória da Conquista – BA
              </address>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-[hsl(0_60%_50%)] flex-shrink-0" />
              <span className="text-[hsl(210_8%_55%)] text-sm font-body">
                Atendimento 24h — 7 dias por semana
              </span>
            </li>
          </ul>
        </div>

        {/* Services column */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-[hsl(210_10%_65%)] mb-5">
            Área de Atendimento
          </h4>
          <ul className="space-y-2 text-[hsl(210_8%_50%)] text-sm font-body">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[hsl(0_60%_45%)]" />
              Vitória da Conquista – BA
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[hsl(0_60%_45%)]" />
              Região Sudoeste da Bahia
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[hsl(0_60%_45%)]" />
              Estradas e Rodovias da Região
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-[hsl(210_10%_65%)] mb-3">
              Serviços
            </h4>
            <ul className="space-y-1 text-[hsl(210_8%_50%)] text-xs font-body">
              {[
                "Guincho / Reboque 24h",
                "Mecânica em Geral",
                "Alinhamento e Balanceamento",
                "Troca de Óleo e Filtros",
                "Limpeza de Bicos Injetores",
                "Peças e Pneus",
                "Socorro Elétrico / Bateria",
                "Chaveiro Automotivo",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[hsl(210_15%_35%)]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="pt-8 border-t border-[hsl(210_15%_12%)] flex flex-col md:flex-row items-center justify-between gap-3"
      >
        <p className="text-[hsl(210_8%_38%)] text-xs font-body text-center md:text-left">
          &copy; {new Date().getFullYear()} Carros Guincho 24 Horas &amp; Centro
          Automotivo. Todos os direitos reservados.
        </p>
        <p className="text-[hsl(210_8%_32%)] text-xs font-body text-center">
          Desenvolvido por{" "}
          <a
            href="https://lsbintelligence.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(0_55%_45%)] hover:text-[hsl(0_60%_55%)] transition-colors"
          >
            LSB Business Intelligence
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
