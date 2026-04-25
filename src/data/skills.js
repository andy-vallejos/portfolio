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

import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

export const types = ["frontend", "backend", "language", "tool", "design"];

export const skills = [
  { name: "Html", icon: faHtml5, color: "#e34f26", type: "frontend" },
  { name: "Css", icon: faCss3Alt, color: "#1572b6", type: "frontend" },
  { name: "JavaScript", icon: faJs, color: "#f7df1e", type: "frontend" },
  { name: "React", icon: faReact, color: "#61dafb", type: "frontend" },
  { name: "Node.js", icon: faNodeJs, color: "#68a063", type: "backend" },
  { name: "Java", icon: faJava, color: "#f89820", type: "language" },
  { name: "Python", icon: faPython, color: "#3776ab", type: "language" },
  { name: "C++", icon: faCode, color: "#00599c", type: "language" },
  { name: "Git", icon: faGitAlt, color: "#f1502f", type: "tool" },
  { name: "Linux", icon: faLinux, color: "#ffffff", type: "tool" },
  { name: "Figma", icon: faFigma, color: "#F24E1E", type: "design" },
  { name: "Firebase", icon: faDatabase, color: "#FFCA28", type: "backend" },
];
