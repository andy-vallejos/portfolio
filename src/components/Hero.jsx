import { useEffect, useState } from "react";

export function Hero({
  name = "Andy Vallejos Bascope",
  kicker = "Desarrollador freelance",
  title = "Software a medida para tu negocio",
  highlight = "a medida",
  description = "Diseño y construyo aplicaciones web, sistemas y automatizaciones. Trabajas directamente conmigo, de la idea a la entrega.",
  status = "Disponible para nuevos proyectos",
  image = "/ANDY.jpeg",
  imageAlt = "Retrato de Andy Vallejos Bascope",
  secondaryCta = {
    label: "Descargar CV",
    href: "/cv-andy-gildo-vallejos-bascope.pdf",
  },
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const highlightIndex = highlight && title ? title.indexOf(highlight) : -1;
  const hasHighlight = highlightIndex !== -1;
  const titleBefore = hasHighlight ? title.slice(0, highlightIndex) : title;
  const titleAfter = hasHighlight
    ? title.slice(highlightIndex + highlight.length)
    : "";

  const reveal = (delay) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${delay} ${
      ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    }`;

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[#0a0a0a] px-6 pb-20 pt-28 text-white md:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-[#00b8e6]/5 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-blue-500/5 blur-[130px]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="relative z-10 order-2 lg:order-1">
          {status && (
            <span
              className={`mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70 backdrop-blur-xl ${reveal("delay-0")}`}
            >
              <span className="h-2 w-2 rounded-full bg-[#00b8e6] shadow-[0_0_10px_rgba(0,184,230,0.8)]" />
              {status}
            </span>
          )}

          <p
            className={`mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/55 ${reveal("delay-100")}`}
          >
            <span className="h-px w-8 bg-[#00b8e6]" />
            {name}
          </p>

          <h1
            className={`max-w-[21ch] text-balance text-[clamp(2rem,4.2vw,3.6rem)] font-medium leading-[1.12] tracking-tight ${reveal("delay-100")}`}
          >
            <span className="mb-3 block text-base font-normal tracking-normal text-white/60 sm:text-lg">
              {kicker}
            </span>

            <span className="block">
              {hasHighlight ? (
                <>
                  {titleBefore}
                  <span className="relative inline-block text-[#00b8e6]">
                    {highlight}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-[#00b8e6] to-transparent" />
                  </span>
                  {titleAfter}
                </>
              ) : (
                title
              )}
            </span>
          </h1>

          <p
            className={`mt-8 max-w-lg text-sm leading-7 text-white/65 sm:text-base sm:leading-8 ${reveal("delay-200")}`}
          >
            {description}
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center gap-4 ${reveal("delay-300")}`}
          >
            <a
              href={secondaryCta.href}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm text-white/80 transition duration-300 hover:border-white/30 hover:bg-white/[0.05] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {secondaryCta.label}
              <svg
                aria-hidden="true"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="order-1 grid min-w-0 lg:order-2 lg:justify-self-center">
          <div
            className={`relative isolate mx-auto w-full max-w-[17rem] sm:max-w-sm lg:mx-0 lg:w-[min(34vw,25rem)] lg:max-w-none ${reveal("delay-200")}`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-12 -z-20 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,184,230,0.22),transparent_66%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-[2rem] rounded-tr-[5rem] rounded-bl-[5rem] border border-[#00b8e6]/30 bg-gradient-to-br from-[#00b8e6]/10 to-transparent sm:translate-x-4 sm:translate-y-4"
            />

            <div className="group relative aspect-[1102/1280] w-full overflow-hidden rounded-[2rem] rounded-tr-[5rem] rounded-bl-[5rem] border border-white/15 bg-[#101316] shadow-[0_30px_90px_-30px_rgba(0,184,230,0.45)]">
              <img
                src={image}
                alt={imageAlt}
                width={1102}
                height={1280}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full select-none object-cover object-[50%_15%] brightness-[1.08] contrast-[1.06] saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,184,230,0.16)_0%,transparent_50%)] mix-blend-screen"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-[#00b8e6]/40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
