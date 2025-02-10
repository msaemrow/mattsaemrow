"use client";
import { useEffect, useRef } from "react";
import styles from "./Skill.module.css";
import "devicon/devicon.min.css";
import { gsap } from "gsap";

export default function Skill({ skill }) {
  const skillRef = useRef(null);
  useEffect(() => {
    gsap.to(".skill", {
      x: 0,
      rotation: 360,
      duration: 1,
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.set(skillRef.current, { clearProps: "all" });
  };

  return (
    <p
      ref={skillRef}
      className={`${styles.skillText} skill`}
      onMouseEnter={handleMouseEnter}
    >
      {skill}
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
