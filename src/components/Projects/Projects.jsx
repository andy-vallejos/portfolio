import style from "./Projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faGitAlt,
  faJava,
  faPython,
  faLinux,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

import { faCode } from "@fortawesome/free-solid-svg-icons";

const MY_SKILLS = [
  { name: "Html", icon: faHtml5, color: "#e34f26" },
  { name: "Css", icon: faCss3Alt, color: "#1572b6" },
  { name: "JavaScript", icon: faJs, color: "#f7df1e" },
  { name: "Node.js", icon: faNodeJs, color: "#68a063" },
  { name: "React", icon: faReact, color: "#61dafb" },
  { name: "Git", icon: faGitAlt, color: "#f1502f" },
  { name: "Java", icon: faJava, color: "#f89820" },
  { name: "Python", icon: faPython, color: "#3776ab" },
  { name: "C++", icon: faCode, color: "#00599c" },
  { name: "Linux", icon: faLinux, color: "#000000" },
  { name: "Figma", icon: faFigma, color: "#F24E1E" },
];

const PROJECTS = [
  {
    id: 1,
    name: "Termometro WIFI",
    tecnologias: ["React", "C++"],
    contenido:
      "Sistema de monitoreo de temperatura en tiempo real utilizando un ESP32 y sensores DS18B20.",
    image: "/termometro.jpeg",
    github: "https://github.com/tu-usuario/tu-repo",
  },
  {
    id: 1,
    name: "Termometro WIFI",
    tecnologias: ["React", "C++"],
    contenido:
      "Sistema de monitoreo de temperatura en tiempo real utilizando un ESP32 y sensores DS18B20.",
    image: "/image.png",
    github: "https://github.com/tu-usuario/tu-repo",
  },
  {
    id: 1,
    name: "Termometro WIFI",
    tecnologias: ["React", "C++"],
    contenido:
      "Sistema de monitoreo de temperatura en tiempo real utilizando un ESP32 y sensores DS18B20.",
    image: "/tapacari.jpeg",
    github: "https://github.com/tu-usuario/tu-repo",
  },
];

export function Projects() {
  return (
    <section className={style.container}>
      <h2 className={style.title}> &lt;/&gt; Proyectos</h2>
      <div className={style.projectsGrid}>
        {PROJECTS.map((project) => (
          <article key={project.id} className={style.card}>
            <div className={style.imageContainer}>
              <div
                className={style.img}
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
            </div>

            <div className={style.inf}>
              <header>
                <h3>{project.name}</h3>
                <section className={style.tech}>
                  {project.tecnologias.map((techName) => {
                    const skill = MY_SKILLS.find((s) => s.name === techName);

                    return skill ? (
                      <span
                        key={techName}
                        className={style.techBadge}
                        style={{ "--brand-color": skill.color }}
                      >
                        <FontAwesomeIcon icon={skill.icon} />
                        <small>{skill.name}</small>
                      </span>
                    ) : null;
                  })}
                </section>
              </header>

              <section className={style.description}>
                <p>{project.contenido}</p>
              </section>

              <footer className={style.footer}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
