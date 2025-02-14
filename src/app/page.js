import styles from "./page.module.css";
import "devicon/devicon.min.css";
import TimelineItem from "@/components/TimelineItem";

// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMeContainer}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.aboutMeText}>
          I'm Matt Saemrow, a former athletic trainer turned software engineer
          with a passion for problem-solving and teamwork. I grew up on a farm,
          where I learned the value of hard work, resilience, and finding
          creative solutions—skills that have shaped my journey from athletic
          training to safety management and, ultimately, software development,
          where. I thrive in collaborative environments, embrace challenges head
          on and am continuously learning to build impactful solutions.
          <br />
          Outside of work, I'm a husband, father, avid angler, fitness
          enthusiast, National Park lover and sports fan. Whether coding,
          fishing, traveling, or working out, I bring the same dedication and
          drive to everything I do.
          <br />
          <br />
          <span className={styles.letsConnect}>
            <em>Let's connect! </em>
            <a
              href="https://www.linkedin.com/in/mattsaemrow/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="25"
                height="25"
                fill="#0077B5"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
          </span>
        </p>
      </div>
      <div className={styles.timelineContainer}>
        <h2 className={styles.title}> Career Timeline</h2>
        <div className={styles.timeline}>
          <TimelineItem
            date="2014"
            title="Bachelors Degree"
            description="Bachelors of Athletic Training and Bachelors of Exercise Science from Gustavus Adolphus College"
          />
          <TimelineItem
            date="2026"
            title="Masters Degree"
            description="Masters of Athletic Training from North Dakota State University"
          />
          <TimelineItem
            date="2016-2022"
            title="Atletic Trainer"
            description="Work as an athletic training in multiple settings including a physical therapy clinic, boarding school and warehouse"
          />
          <TimelineItem
            date="2023"
            title="Site Safety Manager"
            description="Safety manager at Amazon warehouse supporting a team of 7 safety professionals"
          />
          <TimelineItem
            date="2023-2024"
            title="Software Engineering Bootcamp"
            description="Completed Springboards 9 month Software Engineering bootcamp learning full stack development"
          />
          <TimelineItem
            date="2024-Current"
            title="Freelance"
            description="Completing freelance software engineering projects"
          />
        </div>
      </div>
    </div>
  );
}
