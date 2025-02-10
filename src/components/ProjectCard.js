import styles from "./ProjectCard.module.css";
import "devicon/devicon.min.css";

export default function ProjectCard({ title, description, techStack, link }) {
  return (
    <div className={styles.projectContainer}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.techStackContainer}>
        {techStack.map((tech) => (
          <p className={`${styles.tech} tech`}>
            {tech}{" "}
            <i
              className={`devicon-${tech
                .split(" ")
                .join("")
                .replace(/[.-]/g, "")
                .toLowerCase()}-plain colored tech-icon`}
            ></i>
          </p>
        ))}
      </div>
      <p className={styles.linkText}>
        Link:{" "}
        <a
          className={styles.projectLink}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </p>
    </div>
  );
}
