import style from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={style.container}>
      <ul className={style.links}>
        <li>
          <a href="">Proyectos</a>
        </li>
        <li>
          <a href="">Sobre mi</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
