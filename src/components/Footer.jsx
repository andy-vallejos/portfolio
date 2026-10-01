/*
  Reemplaza los textos entre [corchetes] con tus datos reales.
  Si ya tienes estos datos en <Contact />, puedes moverlos a un archivo
  compartido (por ejemplo data/contact.js) y usarlos en los dos componentes.
*/

const CONTACT = {
  email: "[tu@correo.com]",
  whatsapp: "[591XXXXXXXX]", // solo números con código de país
  linkedin: "[https://linkedin.com/in/tu-usuario]",
  github: "[https://github.com/tu-usuario]",
};

const SECTIONS = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tech stack", href: "#tech-stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Contacto", href: "#contacto" },
];

const linkClass =
  "text-sm text-white/60 transition-colors hover:text-[#00b8e6] focus-visible:outline-none focus-visible:text-[#00b8e6] focus-visible:underline";

function LogoMark({ className = "" }) {
  return (
    <svg viewBox="110 70 120 120" className={className} aria-hidden="true">
      <circle
        cx="160"
        cy="120"
        r="36"
        fill="none"
        stroke="#F5F7FA"
        strokeWidth="16"
        strokeDasharray="56.55 169.64"
        transform="rotate(40 160 120)"
      />
      <circle
        cx="160"
        cy="120"
        r="36"
        fill="none"
        stroke="#8792A6"
        strokeWidth="16"
        strokeDasharray="56.55 169.64"
        transform="rotate(135 160 120)"
      />
      <circle
        cx="160"
        cy="120"
        r="36"
        fill="none"
        stroke="#00B8E6"
        strokeWidth="16"
        strokeDasharray="56.55 169.64"
        transform="rotate(230 160 120)"
      />
      <polyline
        points="190,102 216,120 190,138"
        fill="none"
        stroke="#00B8E6"
        strokeWidth="13"
      />
      <line
        x1="169.4"
        y1="137.7"
        x2="189.1"
        y2="174.7"
        stroke="#F5F7FA"
        strokeWidth="16"
      />
    </svg>
  );
}

export function Footer({
  tagline = "Software a medida · [Ciudad, País]",
  description = "[Una frase sobre lo que haces y cómo trabajas. Por ejemplo: trabajo de forma remota con clientes de cualquier país.]",
  available = true,
  contact = CONTACT,
}) {
  const channels = [
    {
      label: "WhatsApp",
      href: `https://wa.me/${contact.whatsapp}`,
      external: true,
    },
    { label: "Correo", href: `mailto:${contact.email}` },
    { label: "LinkedIn", href: contact.linkedin, external: true },
    { label: "GitHub", href: contact.github, external: true },
  ];

  return (
    <footer className="relative isolate w-full overflow-hidden border-t border-white/10 bg-[#0a0a0a] px-6 pt-20 text-white md:px-12">
      {/* Malla de puntos que se desvanece hacia arriba, eco del Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:14px_14px] [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
          {/* Marca */}
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8e6]"
              aria-label="QuarkDev, volver al inicio"
            >
              <LogoMark className="h-10 w-10" />
              <span className="text-xl font-semibold tracking-tight">
                Quark<span className="font-normal text-[#00b8e6]">Dev</span>
              </span>
            </a>

            <p className="mt-5 text-sm text-white/80">{tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
              {description}
            </p>

            {available && (
              <p className="mt-6 inline-flex items-center gap-2.5 border border-white/10 px-3 py-2 text-xs text-white/70">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00b8e6]/60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00b8e6]" />
                </span>
                Disponible para nuevos proyectos
              </p>
            )}
          </div>

          {/* Secciones */}
          <nav aria-label="Secciones">
            <h2 className="text-xs text-white/40">Secciones</h2>
            <ul className="mt-5 space-y-3">
              {SECTIONS.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className={linkClass}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <nav aria-label="Contacto">
            <h2 className="text-xs text-white/40">Contacto</h2>
            <ul className="mt-5 space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className={linkClass}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Barra inferior */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} QuarkDev. Todos los derechos
            reservados.
          </p>

          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 transition-colors hover:text-[#00b8e6] focus-visible:outline-none focus-visible:text-[#00b8e6]"
          >
            Volver arriba
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-y-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path d="M7 12V2M2.5 6.5L7 2l4.5 4.5" />
            </svg>
          </a>
        </div>

        {/* Wordmark gigante */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-10 select-none overflow-hidden pb-2 text-center leading-[0.85]"
        >
          <p className="text-[clamp(3.5rem,17vw,16rem)] font-semibold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.14)]">
            Quark
            <span className="[-webkit-text-stroke:1px_rgba(0,184,230,0.55)]">
              Dev
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
