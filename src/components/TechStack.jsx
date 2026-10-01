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
      className={`border px-2.5 py-1 text-xs transition-colors ${
        learning
          ? "border-dashed border-[#00b8e6]/50 text-[#00b8e6]"
          : "border-white/15 text-white/70 hover:border-[#00b8e6] hover:text-white"
      }`}
    >
      {name}
      {learning && (
        <span className="ml-1.5 text-[10px] text-white/40">en formación</span>
      )}
    </li>
  );
}

export function TechStack({
  title = "Tech Stack",
  subtitle = "Tecnologías que utilizo y continúo desarrollando",
  categories = STACK,
}) {
  const hasLearning = categories.some((c) =>
    c.items.some((i) => typeof i !== "string" && i.learning),
  );

  return (
    <section
      id="tech-stack"
      className="w-full bg-[#0a0a0a] px-6 py-24 text-white md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-tight tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-sm text-white/60">{subtitle}</p>
        {hasLearning && (
          <p className="mt-2 text-xs text-white/40">
            Las etiquetas con borde punteado son tecnologías que estoy
            aprendiendo.
          </p>
        )}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20"
            >
              <h3 className="mb-5 flex items-center gap-3 text-base font-medium">
                <span className="h-2 w-2 bg-[#00b8e6]" aria-hidden="true" />
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <Chip key={`${cat.title}-${i}`} item={item} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
