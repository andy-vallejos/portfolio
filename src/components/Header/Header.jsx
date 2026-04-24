import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTACT } from "../../data/contact.js";

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
            <span className={style.highlight}>
              Estudiante de Ing. Informatica
            </span>
            .Transformando ideas complejas en experiencias digitales intuitivas
          </p>
        </section>

        <img src="andy2.jpeg" alt="Andy" />
      </article>
      <section className={style.links}>
        {CONTACT.map((boton) => {
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
