import { Reveal } from "./Reveal";

const PROFILE = [
  "Soy Andy Vallejos Bascope, desarrollador de software y estudiante de Ingeniería Informática. Desde que empecé a programar, me ha motivado la idea de convertir problemas reales en soluciones tecnológicas. He ido construyendo mi experiencia participando en proyectos reales, como sistemas de gestión y aplicaciones web, donde he trabajado tanto en el desarrollo de interfaces como en la integración de APIs y la lógica de las aplicaciones.",
];

const EDUCATION = [
  {
    title: "Ing. Informática",
    place: "Universidad Mayor de San Simón (UMSS)",
    period: "2025 – ...",
    note: "En curso",
  },
];

const ACHIEVEMENTS = ["Ganador de la Cochatech Hackathon 2026"];

function SectionTitle({ children }) {
  return (
    <h3 className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
      <span className="h-px w-6 bg-[#00b8e6]" aria-hidden="true" />
      {children}
    </h3>
  );
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    </svg>
  );
}

export function AboutMe({
  profile = PROFILE,
  education = EDUCATION,
  achievements = ACHIEVEMENTS,
}) {
  const [intro, ...rest] = profile;

  return (
    <section
      id="sobre-mi"
      className="relative isolate w-full overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white md:px-12 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#00b8e6]/[0.07] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#00b8e6]">
            01 / Perfil
          </p>
          <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-tight tracking-tight">
            Sobre <span className="text-white/25">mí</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal delay={100}>
            <SectionTitle>Perfil profesional</SectionTitle>
            <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              {intro}
            </p>
            <div className="mt-6 max-w-xl space-y-5 text-sm leading-relaxed text-white/60">
              {rest.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </Reveal>

          <div className="space-y-12">
            <Reveal delay={200}>
              <SectionTitle>Formación académica</SectionTitle>
              <ul className="relative space-y-8 border-l border-white/15 pl-7">
                {education.map((item) => (
                  <li key={item.title} className="group relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#00b8e6] bg-[#0a0a0a] transition-colors group-hover:bg-[#00b8e6]"
                    />
                    <p className="text-lg font-medium">{item.title}</p>
                    <p className="mt-1 text-sm text-white/60">{item.place}</p>
                    <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/45">
                      <span>{item.period}</span>
                      {item.note && (
                        <span className="rounded-full border border-[#00b8e6]/40 bg-[#00b8e6]/10 px-2 py-0.5 text-[#00b8e6]">
                          {item.note}
                        </span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <SectionTitle>Logros</SectionTitle>
              <ul className="space-y-3">
                {achievements.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#00b8e6]/50"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00b8e6]/10 text-[#00b8e6]">
                      <TrophyIcon />
                    </span>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
