const EXPERIENCE = [
  {
    current: true,
    period: "Julio 2026 – Actualidad",
    company: "Noxun",
    role: "Frontend Developer",
    stack: ["Javascript", "TypeScript", "React", "Tailwind CSS", "Tanstack"],
    highlights: [
      "Asumí el mantenimiento y soporte del sistema de gestión de importaciones de Plastiforte, uno de los clientes de la empresa.",
      "Desarrollé un módulo nuevo de proveedores dentro del sistema, ampliando sus funcionalidades.",
      "Brindé mantenimiento, mejoras y soporte continuo a los sistemas de otros clientes.",
    ],
    /* metrics: [
      { value: "[0]", label: "[métrica, por ejemplo usuarios o sesiones]" },
      { value: "[0]", label: "[otra métrica]" },
    ], */
  },
];

function Dot({ current }) {
  return (
    <span
      aria-hidden="true"
      className="absolute -left-[39px] top-7 flex h-3 w-3 md:-left-[47px]"
    >
      {current && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00b8e6]/60 motion-reduce:hidden" />
      )}
      <span
        className={`relative inline-flex h-3 w-3 rounded-full border ${
          current
            ? "border-[#00b8e6] bg-[#00b8e6]"
            : "border-white/40 bg-[#0a0a0a]"
        }`}
      />
    </span>
  );
}

export function Experience({
  title = "Experiencia profesional",
  subtitle = "Mi trayectoria en desarrollo de software",
  items = EXPERIENCE,
}) {
  return (
    <section
      id="experiencia"
      className="w-full bg-[#0a0a0a] px-6 py-24 text-white md:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-tight tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-sm text-white/60">{subtitle}</p>

        <ol className="mt-14 space-y-10 border-l border-white/15 pl-8 md:pl-10">
          {items.map((item) => (
            <li key={`${item.company}-${item.period}`} className="relative">
              <Dot current={item.current} />

              <article className="rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
                <header className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <p className="text-xs text-white/40">{item.period}</p>
                  {item.current && (
                    <span className="border border-[#00b8e6]/60 px-2 py-0.5 text-[11px] text-[#00b8e6]">
                      Actual
                    </span>
                  )}
                </header>

                <h3 className="mt-3 text-lg font-medium">{item.company}</h3>
                <p className="mt-1 text-sm text-white/60">{item.role}</p>

                {item.stack?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-white/15 px-2.5 py-1 text-xs text-white/70"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                {item.highlights?.length > 0 && (
                  <ul className="mt-6 space-y-3 text-sm text-white/60">
                    {item.highlights.map((text) => (
                      <li key={text} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b8e6]"
                        />
                        {text}
                      </li>
                    ))}
                  </ul>
                )}

                {item.metrics?.length > 0 && (
                  <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="border border-white/10 px-4 py-3"
                      >
                        <dt className="sr-only">{m.label}</dt>
                        <dd className="text-2xl font-medium text-[#00b8e6]">
                          {m.value}
                        </dd>
                        <p
                          className="mt-1 text-xs text-white/50"
                          aria-hidden="true"
                        >
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </dl>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
