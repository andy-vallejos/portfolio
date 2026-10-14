import { Reveal } from "./Reveal";

const CERTIFICATIONS = [
  {
    category: "Linux",
    featured: true,
    title: "Fundamentos de Linux",
    description:
      "Curso de Cisco Networking Academy sobre los fundamentos del sistema operativo Linux: manejo de la línea de comandos, administración básica y conceptos de código abierto.",
    highlights: [
      "Manejo de la terminal y comandos esenciales",
      "Sistema de archivos, usuarios y permisos",
      "Conceptos de software libre y código abierto",
    ],
    skills: ["Linux", "Bash", "Terminal", "Cisco"],
    issuer: "Cisco Networking Academy",
    date: "Octubre 24",
    image:
      "/Curriculum/_certificate_andy-vallejos-ucb-edu-bo_fcbcc368-e72d-42f0-9248-bca8cfa11cca (1).pdf",
    pdf: "/Curriculum/_certificate_andy-vallejos-ucb-edu-bo_fcbcc368-e72d-42f0-9248-bca8cfa11cca (1).pdf",
  },
  {
    category: "Programación",
    featured: false,
    title: "Curso de programación en Python - Coding Dojo",
    description:
      "Curso de programación en Python del Coding Dojo de Jalasoft, que formó parte del proceso de selección para ingresar a Jala University.",
    highlights: [
      "Fundamentos de programación con Python",
      "Resolución de ejercicios de lógica y algoritmos",
      "Práctica en formato dojo: aprender haciendo, con retos guiados",
    ],
    skills: ["Python", "Lógica de programación", "Algoritmos"],
    issuer: "Jalasoft - Coding Dojo",
    date: "Mayo 2021",
    image: "/Curriculum/ANDY GILDO VALLEJOS BASCOPE-certificadoJala.pdf",
    pdf: "/Curriculum/ANDY GILDO VALLEJOS BASCOPE-certificadoJala.pdf",
  },
  {
    category: "Programación",
    featured: false,
    title: "Introducción a la programación con Java",
    description:
      "Curso introductorio de programación con Java, enfocado en los conceptos base para empezar a desarrollar software.",
    highlights: [
      "Sintaxis básica de Java y estructura de un programa",
      "Variables, condicionales, ciclos y funciones",
      "Introducción a la programación orientada a objetos",
    ],
    skills: ["Java", "POO", "Lógica de programación"],
    issuer: "SCESI",
    date: "Enero 2021",
    image: "/Curriculum/certificadoCursosScesi.docx(3).pdf",
    pdf: "/Curriculum/certificadoCursosScesi.docx(3).pdf",
    verifyUrl: "",
  },
  {
    category: "Desarrollo web",
    featured: false,
    title: "Curso de HTML, CSS y JavaScript",
    description:
      "Mi primer curso de desarrollo web, donde aprendí a construir páginas desde cero con los tres lenguajes base del frontend.",
    highlights: [
      "Estructura de páginas web con HTML",
      "Estilos y diseño con CSS",
      "Interactividad básica con JavaScript",
    ],
    skills: ["HTML", "CSS", "JavaScript"],
    issuer: "Ariel Yanarico - JalaSoft",
    date: "2019",
    image: "/Curriculum/certificate-andy.pdf",
    pdf: "/Curriculum/certificate-andy.pdf",
    verifyUrl: "",
  },
];

const isPdf = (src) => /\.pdf($|[?#])/i.test(src);

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

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

function PdfFallback() {
  return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/50">
      <span className="text-[#00b8e6]">
        <FileIcon />
      </span>
      <span className="text-xs uppercase tracking-[0.2em]">Ver PDF</span>
    </span>
  );
}

function Preview({ src, title }) {
  const url = encodeURI(src);

  if (isPdf(src)) {
    return (
      <object
        data={`${url}#page=1&view=Fit&toolbar=0&navpanes=0&scrollbar=0`}
        type="application/pdf"
        aria-label={`Vista previa del certificado de ${title}`}
        className="pointer-events-none h-full w-full"
      >
        <PdfFallback />
      </object>
    );
  }

  return (
    <img
      src={url}
      alt={`Certificado de ${title}`}
      loading="lazy"
      className="h-full w-full object-contain"
    />
  );
}

const buttonClass =
  "inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#00b8e6] hover:text-white";

export default function Certifications({
  title = "Certificaciones",
  subtitle = "Formación y credenciales que respaldan mi trabajo",
  items = CERTIFICATIONS,
}) {
  return (
    <section
      id="certificaciones"
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
            02 / Formación
          </p>
          <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-tight tracking-tight">
            {title}
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/60">{subtitle}</p>
        </Reveal>

        <ul className="mt-14 space-y-8">
          {items.map((item, index) => {
            const preview = item.image || item.pdf;
            const fullFile = item.pdf || item.image;

            return (
              <li key={`${item.title}-${item.date}`}>
                <Reveal delay={index * 100}>
                  <article className="group relative grid gap-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#00b8e6]/40 md:p-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#00b8e6] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                    />

                    <div className="flex flex-col">
                      {(item.category || item.featured) && (
                        <div className="flex flex-wrap items-center gap-2">
                          {item.category && (
                            <span className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/70">
                              {item.category}
                            </span>
                          )}
                          {item.featured && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-amber-300">
                              <StarIcon />
                              Destacado
                            </span>
                          )}
                        </div>
                      )}

                      <h3 className="mt-5 text-xl font-medium leading-snug md:text-2xl">
                        {item.title}
                      </h3>

                      {(item.issuer || item.date) && (
                        <p className="mt-2 text-xs text-white/45 md:hidden">
                          {[item.issuer, item.date].filter(Boolean).join(" · ")}
                        </p>
                      )}

                      {item.description && (
                        <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                          {item.description}
                        </p>
                      )}

                      {item.highlights?.length > 0 && (
                        <ul className="mt-6 space-y-2.5 text-sm text-white/65">
                          {item.highlights.map((text) => (
                            <li key={text} className="flex items-start gap-3">
                              <CheckIcon />
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.skills?.length > 0 && (
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <li
                              key={skill}
                              className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-xs text-white/75 transition-colors hover:border-[#00b8e6] hover:text-white"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      )}

                      {(item.pdf || item.verifyUrl) && (
                        <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                          {item.pdf && (
                            <a
                              href={encodeURI(item.pdf)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={buttonClass}
                            >
                              Ver PDF
                              <FileIcon />
                            </a>
                          )}
                          {item.verifyUrl && (
                            <a
                              href={item.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={buttonClass}
                            >
                              Verificar
                              <ExternalIcon />
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {preview && (
                      <figure className="hidden flex-col self-start overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] md:flex">
                        <a
                          href={encodeURI(fullFile)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver certificado: ${item.title}`}
                          className="block aspect-[4/3] p-3"
                        >
                          <Preview src={preview} title={item.title} />
                        </a>
                        {(item.issuer || item.date) && (
                          <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3 text-xs text-white/50">
                            <span>{item.issuer}</span>
                            <span className="whitespace-nowrap">
                              {item.date}
                            </span>
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
