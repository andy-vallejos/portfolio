import style from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { projects } from "../../data/projects.js";
import { skills } from "../../data/skills.js";

export function Projects() {
  return (
    <section className={style.proyectos__container}>
      <h2>Proyectos</h2>
      {projects.map((p) => {
        return (
          <article className={style.proyecto__card}>
            <section className={style.card__about}>
              <img src={p.image} alt="" />

              <section className={style.card__inf}>
                <h3>{p.name}</h3>
                <p>{p.contenido}</p>
              </section>
            </section>
            <footer className={style.footer__card}>
              <section className={style.container__skills}>
                {p.tecnologias.map((t) => {
                  const skillData = skills.find(
                    (s) => s.name.toLowerCase() === t.toLowerCase(),
                  );
                  if (!skillData) return null;

                  return (
                    <div key={t} className={style.skills}>
                      <FontAwesomeIcon
                        icon={skillData.icon}
                        style={{ color: skillData.color }}
                      />
                      <p style={{ color: skillData.color }}>{skillData.name}</p>
                    </div>
                  );
                })}
              </section>
              <section className={style.card__buttons}>
                {p.pagina === "" ? "" : <a href="">GitHub</a>}
                <a
                  href={p.github}
                  style={p.pagina === "" ? { width: "100%" } : ""}
                >
                  GitHub
                </a>
              </section>
            </footer>
          </article>
        );
      })}
    </section>
  );
}
