import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className={style.container}>
      <article className={style.about}>
        <section className={style.message}>
          <header>
            <h1>
              Hola, <strong>soy Andy</strong>
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
        <a
          href="https://linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className={style.btn}
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className={style.btn}
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="mailto:andyvallejosgb@gmail.com" className={style.btn}>
          <FontAwesomeIcon icon={faEnvelope} /> andyvallejosgb@gmail.com
        </a>
      </section>
    </header>
  );
}
