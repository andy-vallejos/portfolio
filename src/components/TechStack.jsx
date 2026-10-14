import { Reveal } from "./Reveal";

const STACK = [
  {
    title: "Mobile Development",
    items: [{ name: "Flutter", learning: true }],
  },
  {
    title: "Frontend Web",
    items: [
      "Css",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "TanStack Query",
    ],
  },
  {
    title: "Backend & APIs",
    items: [{ name: "Express", learning: true }],
  },
  {
    title: "Bases de Datos",
    items: ["PostgreSQL"],
  },
  {
    title: "DevOps & Herramientas",
    items: ["Git", "GitHub", "Cloudflare", "Supabase"],
  },
  {
    title: "Calidad & Soporte",
    items: ["Corrección de errores", "Pruebas manuales", "Depuración"],
  },
];

function Chip({ item }) {
  const { name, learning } = typeof item === "string" ? { name: item } : item;

  return (
    <li
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors ${
        learning
          ? "border-dashed border-[#00b8e6]/60 bg-[#00b8e6]/5 text-[#00b8e6]"
          : "border-white/15 text-white/75 hover:border-[#00b8e6] hover:text-white"
      }`}
    >
      {learning && (
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00b8e6] opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00b8e6]" />
        </span>
      )}
      {name}
      {learning && (
        <span className="text-[10px] text-white/45">en formación</span>
      )}
    </li>
  );
}

export function TechStack({
  title = "Tech Stack",
  subtitle = "Tecnologías que utilizo y continúo desarrollando",
  categories = STACK,
}) {
  return (
    <section
      id="tech-stack"
      className="relative isolate w-full overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white md:px-12 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#00b8e6]/[0.07] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#00b8e6]">
            03 / Herramientas
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-tight tracking-tight">
                {title}
              </h2>
              <p className="mt-3 max-w-md text-sm text-white/60">{subtitle}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <Reveal key={cat.title} delay={index * 80}>
              <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#00b8e6]/40">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#00b8e6] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                />

                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3 className="text-base font-medium">{cat.title}</h3>
                  <span className="text-xs tabular-nums text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <Chip key={`${cat.title}-${i}`} item={item} />
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
