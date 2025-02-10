"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import "devicon/devicon.min.css";
import { gsap } from "gsap";
import TimelineItem from "@/components/TimelineItem";
import Skill from "@/components/Skill";
import SoftSkill from "@/components/SoftSkill";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
    <div className={styles.container}>
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
