import { useEffect, useRef, useState } from "react";

const FONT =
  "'JetBrains Mono', 'Space Mono', ui-monospace, SFMono-Regular, monospace";

const LINKS = [
  { nombre: "SOBRE MÍ", url: "#sobre-mi" },
  { nombre: "TECH STACK", url: "#tech-stack" },
  { nombre: "EXPERIENCIA", url: "#experiencia" },
  //{ nombre: "CERTIFICACIONES", url: "#certificaciones" },
  { nombre: "CONTACTO", url: "#contacto" },
];

const linkBase =
  "relative block rounded-lg px-3.5 py-2.5 text-[13px] font-medium tracking-wider transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8e6]";
const underline =
  "after:absolute after:inset-x-3.5 after:bottom-0.5 after:h-0.5 after:origin-left after:bg-[#00b8e6] after:transition-transform after:content-['']";
const contactLink =
  "ml-3 block rounded-lg bg-[#00b8e6] px-5 py-2.5 text-center text-[13px] font-semibold tracking-wider text-[#04121a] transition duration-200 hover:-translate-y-px hover:bg-[#33c9ee] hover:shadow-[0_6px_20px_rgba(0,184,230,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none";

export function Nav() {
  const progressRef = useRef(null);
  const [active, setActive] = useState("");

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(y / max, 1) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      if (y < 120) setActive("");
      else if (max > 0 && progress > 0.995) {
        setActive(LINKS[LINKS.length - 1].url.slice(1));
      }

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
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] flex h-[calc(4rem+env(safe-area-inset-bottom))] items-center justify-between border-t border-white/10 bg-[#0a0a0a]/80 px-4 pb-[env(safe-area-inset-bottom)] backdrop-blur-md backdrop-saturate-150 sm:px-6 lg:px-10"
      style={{ fontFamily: FONT }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-0.5 bg-white/5"
      >
        <span
          ref={progressRef}
          className="block h-full w-full origin-left scale-x-0 bg-[#00b8e6] shadow-[0_0_10px_rgba(0,184,230,0.7)] will-change-transform"
        />
      </span>

      <a
        href="#inicio"
        className="rounded text-lg font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8e6]"
      >
        Andy<span className="font-normal text-[#00b8e6]">Vallejos</span>
      </a>

      <nav aria-label="Principal" className="hidden lg:block">
        <ul className="m-0 flex list-none flex-row items-center gap-1 p-0">
          {LINKS.map((el) => {
            const id = el.url.slice(1);
            const isActive = active === id;
            const isContact = el.nombre === "CONTACTO";

            return (
              <li key={el.nombre}>
                <a
                  href={el.url}
                  aria-current={isActive ? "true" : undefined}
                  className={
                    isContact
                      ? contactLink
                      : [
                          linkBase,
                          underline,
                          isActive
                            ? "text-white after:scale-x-100"
                            : "text-[#a7afbd] after:scale-x-0 hover:text-white hover:after:scale-x-100 focus-visible:text-white focus-visible:after:scale-x-100",
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
    </header>
  );
}
