import { useRef } from "react";
import style from "./About.module.css";

export function About() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <section className={style.container}>
      <h2>Sobre mí</h2>
      <section
        ref={cardRef}
        className={style.main__container}
        onMouseMove={handleMouseMove}
      >
        <section className={style.message}>
          <p>
            Mi nombre es <strong> Andy Vallejos Bascope</strong>. Mi camino en
            la programación comenzó hace 5 años como una curiosidad que, hace 2,
            se transformó en mi profesión y enfoque principal. Actualmente,
            curso la carrera de <strong> Ingeniería Informática</strong>.
          </p>
          <p>
            Trabajo principalmente con tecnologías como <strong> React</strong>{" "}
            para el frontend y exploro el potencial de <strong>Node.js</strong>{" "}
            y <strong>Python</strong> para robustecer mis proyectos.
          </p>
          <p>
            Mi meta actual es seguir escalando mis habilidades en el{" "}
            <strong>desarrollo Fullstack</strong> y contribuir en proyectos de
            alto impacto
          </p>
        </section>
        <img src="andy1.jpeg" alt="" />
      </section>
    </section>
  );
}
