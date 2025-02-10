import styles from "./Skill.module.css";
import "devicon/devicon.min.css";

export default function Skill({ skill }) {
  return (
    <p className={`${styles.skillText} skill`}>
      {skill}{" "}
      <i
        className={`devicon-${skill
          .split(" ")
          .join("")
          .replace(/[.-]/g, "")
          .toLowerCase()}-plain colored tech-icon`}
      ></i>
    </p>
  );
}
