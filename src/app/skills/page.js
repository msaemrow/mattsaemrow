import Skill from "@/components/Skill";
import SoftSkill from "@/components/SoftSkill";
import "devicon/devicon.min.css";
import styles from "./Skills.module.css";

export default function AboutMe() {
  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "Flask",
    "HTML5",
    "CSS3",
    "Next.js",
    "PostgreSQL",
    "Bootstrap",
    "VSCode",
  ];
  const softSkills = [
    "Team Work",
    "Communication",
    "Dependable",
    "Fast Pace Environment",
    "Task Prioritization and Management",
    "People Manager",
    "Problem Solving",
    "Resourceful",
  ];
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.title}>Technologies and Languages</h2>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
      <h2 className={styles.title}>Soft Skills</h2>
      <div className={styles.softSkills}>
        {softSkills.map((skill, index) => (
          <SoftSkill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
