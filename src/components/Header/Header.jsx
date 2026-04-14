import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const BOTONES = [
  {
    nombre: "GitHub",
    icon: faGithub,
    link: "https://github.com/andy-vallejos",
  },
  { nombre: "Linkedin", icon: faLinkedin, link: "" },
  {
    nombre: "andyvallejos@gmail.com",
    icon: faEnvelope,
    link: "mailto:andyvallejosgb@gmail.com",
  },
];

export function Header() {
  return (
    <header className={style.container}>
      <article className={style.about}>
        <section className={style.message}>
          <header>
            <h1>
              Hola, <strong>soy Andy !!!</strong>
            </h1>
            <p className={style.highlight}>Desarrollador Frontend</p>
          </header>
          <p>
            +2 años de experiencia.{" "}
            <span className={style.highlight}>Ingeniero Informatico</span>
            .Transformando ideas complejas en experiencias digitales intuitivas
          </p>
        </section>

        <img src="andy2.jpeg" alt="Andy" />
      </article>
      <section className={style.links}>
        {BOTONES.map((boton) => {
          return (
            <a
              href={boton.link}
              target="_blank"
              rel="noopener noreferrer"
              className={style.btn}
            >
              <FontAwesomeIcon icon={boton.icon} /> <p>{boton.nombre}</p>
            </a>
          );
        })}
      </section>
    </header>
  );
}
