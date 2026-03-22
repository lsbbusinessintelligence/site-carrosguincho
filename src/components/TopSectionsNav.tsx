const items = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Por que nos Escolher", href: "#diferenciais" },
  { label: "Trabalhos Realizados", href: "#resultados" },
  { label: "Avaliações Reais", href: "#avaliacoes" },
  { label: "Fale Conosco", href: "#contato" },
];

const TopSectionsNav = () => (
  <div
    className="fixed top-0 inset-x-0 z-40 backdrop-blur-md"
    style={{
      background: "hsl(210 20% 5% / 0.92)",
      borderBottom: "1px solid hsl(0 65% 38% / 0.25)",
    }}
  >
    <div className="container py-2.5">
      <div className="flex gap-2 overflow-x-auto no-scrollbar items-center">
        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 inline-flex items-center justify-center rounded-sm p-1"
          style={{ border: "1px solid hsl(210 15% 22%)" }}
          aria-label="Ir para o topo"
        >
          <img
            src="/images/carrosguincho/CARROSGUINHO-LOGO.jpeg"
            alt="Carros Guincho 24h logo"
            className="w-10 h-10 rounded-sm object-cover"
          />
        </a>

        {/* Nav items */}
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 inline-flex items-center justify-center text-center rounded-sm px-4 py-2 text-xs sm:text-sm font-body font-semibold transition-all duration-200"
            style={{
              border: "1px solid hsl(210 15% 20%)",
              background: "hsl(210 15% 10% / 0.6)",
              color: "hsl(210 10% 72%)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "hsl(0 65% 28%)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "hsl(0 65% 42% / 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "hsl(210 15% 10% / 0.6)";
              (e.currentTarget as HTMLAnchorElement).style.color =
                "hsl(210 10% 72%)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "hsl(210 15% 20%)";
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopSectionsNav;
