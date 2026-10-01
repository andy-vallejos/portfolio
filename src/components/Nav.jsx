import { useEffect, useRef, useState } from "react";

const FONT =
  "'JetBrains Mono', 'Space Mono', ui-monospace, SFMono-Regular, monospace";

const LINKS = [
  { nombre: "SOBRE MÍ", url: "#sobre-mi" },
  { nombre: "TECH STACK", url: "#tech-stack" },
  { nombre: "EXPERIENCIA", url: "#experiencia" },
  { nombre: "CERTIFICACIONES", url: "#certificaciones" },
  { nombre: "CONTACTO", url: "#contacto" },
];

const linkBase =
  "relative block rounded-lg px-3.5 py-3.5 text-[13px] font-medium tracking-wider transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8e6] lg:py-2.5";

const underline =
  "lg:after:absolute lg:after:inset-x-3.5 lg:after:bottom-1 lg:after:h-0.5 lg:after:origin-left lg:after:bg-[#00b8e6] lg:after:transition-transform lg:after:content-['']";

const contactLink =
  "mt-2.5 block rounded-lg bg-[#00b8e6] px-5 py-3 text-center text-[13px] font-semibold tracking-wider text-[#04121a] transition duration-200 hover:-translate-y-px hover:bg-[#33c9ee] hover:shadow-[0_6px_20px_rgba(0,184,230,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none lg:ml-3 lg:mt-0 lg:py-2.5";

export function Nav() {
  const progressRef = useRef(null);
  const lastY = useRef(0);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scroll: blur, ocultar al bajar / mostrar al subir, barra de progreso
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(y / max, 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      setScrolled(y > 20);
      if (y > 200 && y > lastY.current + 4) setHideNav(true);
      else if (y < lastY.current - 4 || y <= 200) setHideNav(false);

      lastY.current = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Enlace activo según la sección visible
  useEffect(() => {
    const sections = LINKS.map((l) =>
      document.getElementById(l.url.slice(1)),
    ).filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const headerClass = [
    "fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b px-4 transition-all duration-300 motion-reduce:transition-none sm:px-6 lg:px-10",
    scrolled ? "h-16" : "h-20",
    open
      ? "border-white/10 bg-[#0a0e18]/95"
      : scrolled
        ? "border-white/10 bg-black/10 backdrop-blur-md backdrop-saturate-150"
        : "border-transparent bg-transparent",
    hideNav && !open ? "-translate-y-full" : "translate-y-0",
  ].join(" ");

  const menuClass = [
    open ? "block" : "hidden",
    "absolute inset-x-0 top-full border-b border-white/10 bg-[#0a0e18]/95 px-4 pb-5 pt-3 sm:px-6",
    "lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0",
  ].join(" ");

  return (
    <header className={headerClass} style={{ fontFamily: FONT }}>
      <a
        href="#inicio"
        onClick={() => setOpen(false)}
        className="rounded text-lg font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8e6]"
      >
        Quark<span className="font-normal text-[#00b8e6]">Dev</span>
      </a>

      <button
        type="button"
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8e6] lg:hidden"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" />
          ) : (
            <path d="M3 5h14M3 10h14M3 15h14" />
          )}
        </svg>
      </button>

      <nav aria-label="Principal" className={menuClass}>
        <ul
          id="nav-links"
          className="m-0 flex list-none flex-col gap-0.5 p-0 lg:flex-row lg:items-center lg:gap-1"
        >
          {LINKS.map((el) => {
            const id = el.url.slice(1);
            const isActive = active === id;
            const isContact = el.nombre === "CONTACTO";

            return (
              <li key={el.nombre}>
                <a
                  href={el.url}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={
                    isContact
                      ? contactLink
                      : [
                          linkBase,
                          underline,
                          isActive
                            ? "bg-white/5 text-white lg:bg-transparent lg:after:scale-x-100"
                            : "text-[#a7afbd] hover:bg-white/5 hover:text-white focus-visible:text-white lg:after:scale-x-0 lg:hover:bg-transparent lg:hover:after:scale-x-100 lg:focus-visible:after:scale-x-100",
                        ].join(" ")
                  }
                >
                  {el.nombre}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <span
        ref={progressRef}
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-px left-0 h-0.5 w-full origin-left scale-x-0 bg-[#00b8e6] transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
}
