const PROFILE = [
  "Soy Andy Vallejos Bascope, desarrollador de software con [X] años de experiencia construyendo soluciones tecnológicas reales. [Cuenta qué te apasiona y qué problemas te gusta resolver.]",
  "He trabajado en proyectos completos desde cero: [apps móviles, sistemas de gestión, plataformas administrativas, APIs REST, sitios web corporativos...].",
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
    <h3 className="mb-6 flex items-center gap-3 text-lg font-medium">
      <span className="h-2 w-2 bg-[#00b8e6]" aria-hidden="true" />
      {children}
    </h3>
  );
}

export function AboutMe({
  profile = PROFILE,
  education = EDUCATION,
  achievements = ACHIEVEMENTS,
}) {
  return (
    <section
      id="sobre-mi"
      className="w-full bg-[#0a0a0a] px-6 py-24 text-white md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-tight tracking-tight">
          Sobre mí
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Perfil */}
          <div>
            <SectionTitle>Perfil profesional</SectionTitle>
            <div className="space-y-5 text-sm leading-relaxed text-white/60">
              {profile.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>

          <div className="space-y-14">
            {/* Formación */}
            <div>
              <SectionTitle>Formación académica</SectionTitle>
              <ul className="space-y-6">
                {education.map((item) => (
                  <li
                    key={item.title}
                    className="border-l border-white/15 pl-5 transition-colors hover:border-[#00b8e6]"
                  >
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-sm text-white/60">{item.place}</p>
                    <p className="mt-1 text-xs text-white/40">
                      {item.period}
                      {item.note ? ` | ${item.note}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle>Logros</SectionTitle>
              <ul className="space-y-3 text-sm text-white/60">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b8e6]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
