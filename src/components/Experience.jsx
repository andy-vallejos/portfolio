import { Reveal } from "./Reveal";

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
  },
  {
    current: false,
    period: "Mayo 2025 – Julio 2025",
    company: "TuPizza",
    role: "Frontend Developer",
    stack: ["Flutter"],
    highlights: [
      "Participación en el desarrollo de una aplicación móvil para una pizzería. Encargado del desarrollo del frontend, implementando la interfaz de usuario y mejorando la experiencia visual de la aplicación.   ",
      "Trabajo colaborativo con el equipo de desarrollo para integrar funcionalidades con el backend.",
      "Uso de metodologías ágiles (Scrum) para la organización del trabajo en equipo, planificación de tareas y seguimiento del avance del proyecto.",
      "Aplicación de buenas prácticas de desarrollo y control de versiones con Git.",
    ],
  },
];

function Dot({ current }) {
  return (
    <span
      aria-hidden="true"
      className="absolute -left-[39px] top-8 flex h-3 w-3 md:-left-[47px]"
    >
      {current && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00b8e6]/60 motion-reduce:hidden" />
      )}
      <span
        className={`relative inline-flex h-3 w-3 rounded-full border-2 ${
          current
            ? "border-[#00b8e6] bg-[#00b8e6]"
            : "border-white/40 bg-[#0a0a0a]"
        }`}
      />
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-[#00b8e6]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
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
      className="relative isolate w-full overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white md:px-12 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#00b8e6]/[0.07] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#00b8e6]">
            04 / Trayectoria
          </p>
          <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-tight tracking-tight">
            {title}
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/60">{subtitle}</p>
        </Reveal>

        <ol className="relative mt-14 space-y-10 border-l border-white/15 pl-8 md:pl-10">
          {items.map((item, index) => (
            <li key={`${item.company}-${item.period}`} className="relative">
              <Dot current={item.current} />

              <Reveal delay={index * 100}>
                <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#00b8e6]/40 md:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#00b8e6] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                  />

                  <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                    <div>
                      <h3 className="text-xl font-medium">{item.company}</h3>
                      <p className="mt-1 text-sm text-[#00b8e6]">{item.role}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <p className="text-xs text-white/45">{item.period}</p>
                      {item.current && (
                        <span className="rounded-full border border-[#00b8e6]/40 bg-[#00b8e6]/10 px-2.5 py-0.5 text-[11px] text-[#00b8e6]">
                          Actual
                        </span>
                      )}
                    </div>
                  </header>

                  {item.highlights?.length > 0 && (
                    <ul className="mt-7 space-y-3.5 text-sm leading-relaxed text-white/65">
                      {item.highlights.map((text) => (
                        <li key={text} className="flex items-start gap-3">
                          <CheckIcon />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.metrics?.length > 0 && (
                    <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                      {item.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg border border-white/10 px-4 py-3"
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

                  {item.stack?.length > 0 && (
                    <div className="mt-7 border-t border-white/10 pt-5">
                      <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Tecnologías
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/75 transition-colors hover:border-[#00b8e6] hover:text-white"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
