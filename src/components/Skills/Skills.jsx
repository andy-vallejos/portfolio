import style from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills, types } from "../../data/skills";

export function Skills() {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Skills</h2>

      <div className={style.container__grid}>
        {types.map((type) => (
          <div
            key={type}
            className={`${style.iconGrid} ${style[`card__${type.toLowerCase()}`]}`}
          >
            <h3 className={style.typeLabel}>{type}</h3>
            <div className={style.iconsWrapper}>
              {skills
                .filter((skill) => skill.type === type)
                .map((skill, i) => (
                  <a
                    key={i}
                    className={style.skillLink}
                    href="#"
                    style={{ "--hover-color": skill.color }}
                  >
                    <FontAwesomeIcon icon={skill.icon} />
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
