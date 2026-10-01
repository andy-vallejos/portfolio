import { useState } from "react";

const CONTACT = {
  email: "andyvallejosgb@gmail.com",
  whatsapp: "59169442181",
  linkedin: "[https://linkedin.com/in/tu-usuario]",
  github: "https://github.com/andy-vallejos",
};

const inputClass =
  "w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-[#00b8e6] focus:outline-none focus:ring-1 focus:ring-[#00b8e6]";

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs text-white/60">
        {label}
      </label>
      {children}
    </div>
  );
}

export function Contact({
  title = "Contacto",
  subtitle = "¿Tienes un proyecto en mente? Cuéntame qué necesitas y conversemos.",
  contact = CONTACT,
  endpoint,
}) {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const channels = [
    { label: "Correo", value: contact.email, href: `mailto:${contact.email}` },
    {
      label: "WhatsApp",
      value: `+${contact.whatsapp}`,
      href: `https://wa.me/${contact.whatsapp}`,
      external: true,
    },
    {
      label: "LinkedIn",
      value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: contact.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: contact.github.replace(/^https?:\/\/(www\.)?/, ""),
      href: contact.github,
      external: true,
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Campo trampa para bots: las personas no lo ven ni lo llenan
    if (data.website) return;
    delete data.website;

    if (!endpoint) {
      const subject = encodeURIComponent(`Mensaje de ${data.name}`);
      const body = encodeURIComponent(
        `${data.message}\n\n${data.name} (${data.email})`,
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      className="w-full bg-[#0a0a0a] px-6 py-24 text-white md:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Información */}
        <div>
          <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-tight tracking-tight">
            {title}
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
            {subtitle}
          </p>

          <ul className="mt-10 border-t border-white/10">
            {channels.map((c) => (
              <li key={c.label} className="border-b border-white/10">
                <a
                  href={c.href}
                  {...(c.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group flex items-center justify-between gap-4 py-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8e6]"
                >
                  <span className="text-xs text-white/40">{c.label}</span>
                  <span className="truncate text-white/80 transition-colors group-hover:text-[#00b8e6]">
                    {c.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="contact-name" label="Nombre">
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Tu nombre"
                className={inputClass}
              />
            </Field>
            <Field id="contact-email" label="Correo">
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="tu@correo.com"
                className={inputClass}
              />
            </Field>
          </div>

          <Field id="contact-message" label="Mensaje">
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              placeholder="Cuéntame sobre tu proyecto"
              className={`${inputClass} resize-y`}
            />
          </Field>

          <div aria-hidden="true" className="absolute -left-[9999px]">
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#00b8e6] px-6 py-3 text-sm font-semibold text-[#04121a] transition hover:bg-[#33c9ee] focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            <p aria-live="polite" className="text-sm">
              {status === "success" && (
                <span className="text-[#00b8e6]">
                  Mensaje enviado. Te responderé pronto.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-400">
                  No se pudo enviar. Inténtalo de nuevo o escríbeme por correo.
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
