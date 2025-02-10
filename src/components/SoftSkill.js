import styles from "./SoftSkill.module.css";

export default function SoftSkill({ skill }) {
  return <p className={styles.softSkill}>{skill}</p>;
}
