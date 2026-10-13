function ExternalArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Footer({
  name = "Andy Vallejos Bascope",
  tagline = "Software a medida",
  description = "Aplicaciones web, sistemas y automatización para tu negocio.",
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate w-full overflow-hidden border-t border-white/10 bg-[#0a0a0a] px-6 pb-8 pt-20 text-white md:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:14px_14px] [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#00b8e6]/[0.08] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
          {/* Marca */}
          <div>
            <p className="mt-5 text-sm text-white/80">{tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>
            © {year} {name}. Todos los derechos reservados.
          </p>

          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00b8e6]"
          >
            Volver arriba
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 motion-reduce:transition-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
