import style from "./Nav.module.css";

const LINKS = [
  { nombre: "Proyectos", url: "" },
  { nombre: "Sobre mi", url: "" },
  { nombre: "Contacto", url: "" },
];

export function Nav() {
  return (
    <nav className={style.container}>
      <ul className={style.links}>
        {LINKS.map((el) => {
          return (
            <li>
              <a href={el.url}>{el.nombre}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
