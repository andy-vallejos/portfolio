import { Reveal } from "./Reveal";

const CONTACT = {
  email: "andyvallejosgb@gmail.com",
  whatsapp: "59169442181",
  linkedin: "https://linkedin.com/in/andy-vallejos-bascope-99aa511b2",
  github: "https://github.com/andy-vallejos",
  instagram: "https://www.instagram.com/andy.gvb",
};

const svgBase = {
  viewBox: "0 0 24 24",
  className: "h-5 w-5",
  "aria-hidden": "true",
};

function MailIcon() {
  return (
    <svg
      {...svgBase}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      {...svgBase}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21Z" />
      <path d="M9 12h.01M12 12h.01M15 12h.01" strokeWidth="2.2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      {...svgBase}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" strokeWidth="2.4" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...svgBase} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg {...svgBase} fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function ArrowIcon() {
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
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

const handleFromUrl = (url) => url.replace(/\/+$/, "").split("/").pop() ?? url;

export function Contact({
  title = "Contacto",
  subtitle = "¿Tienes un proyecto en mente? Escríbeme por el canal que prefieras y conversemos.",
  contact = CONTACT,
}) {
  const channels = [
    contact.instagram && {
      label: "Instagram",
      value: `+${contact.instagram}`,
      href: `https://wa.me/${contact.instagram}`,
      icon: <InstagramIcon />,
    },
    contact.linkedin && {
      label: "LinkedIn",
      value: handleFromUrl(contact.linkedin),
      href: contact.linkedin,
      icon: <LinkedInIcon />,
    },
    contact.github && {
      label: "GitHub",
      value: `@${handleFromUrl(contact.github)}`,
      href: contact.github,
      icon: <GitHubIcon />,
    },
    contact.email && {
      label: "Correo",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <MailIcon />,
      internal: true,
    },
  ].filter(Boolean);

  return (
    <section
      id="contacto"
      className="relative isolate w-full overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white md:px-12 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#00b8e6]/[0.07] blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Encabezado */}
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#00b8e6]">
            05 / Contacto
          </p>
          <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-tight tracking-tight">
            {title}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {subtitle}
          </p>

          {contact.whatsapp && (
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#00b8e6] px-6 py-3 text-sm font-medium text-[#0a0a0a] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00b8e6]"
            >
              Escríbeme por WhatsApp
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          )}
        </Reveal>

        {/* Redes */}
        <ul className="grid gap-4 sm:grid-cols-2">
          {channels.map((c, i) => (
            <li key={c.label}>
              <Reveal delay={100 + i * 80} className="h-full">
                <a
                  href={c.href}
                  {...(!c.internal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group relative flex h-full min-h-36 flex-col justify-between gap-8 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-[#00b8e6]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00b8e6]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#00b8e6] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                  />

                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-colors group-hover:bg-[#00b8e6]/10 group-hover:text-[#00b8e6]">
                      {c.icon}
                    </span>
                    <span className="text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00b8e6]">
                      <ArrowIcon />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-white/40">{c.label}</p>
                    <p className="mt-1 truncate text-sm text-white/85">
                      {c.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
