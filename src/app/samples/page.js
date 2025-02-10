import React from "react";
import styles from "./Sample.module.css";
import ProjectCard from "@/components/ProjectCard";

export default function WorkSample() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Work Samples</h1>
      <div className={styles.workContainer}>
        <ProjectCard
          key="Project 1"
          title="Anglers Index"
          description="Production level application. Allows anglers to log their fish catches, review historical catch data, and particpate in a master angler catch program. Application generates custom PDF certificate if meets master angler requirements."
          techStack={[
            "Javascript",
            "React",
            "Python",
            "Flask",
            "CSS3",
            "Next.js",
            "Amazon Web Services",
            "Bootstrap",
            "HTML5",
            "Google",
            "Postgresql",
            "Vercel",
          ]}
          link="https://www.anglersindex.com"
        />
        <ProjectCard
          key="Project 2"
          title="Ty's Ginseng"
          description="Production website for small agriculture business. Build both frontend and backend. Integrated Square Checkout API for seamless payment to clients existing account. Created admin backend so client can update products as needed. Integrated SEO techniques to improve organic business reach. Added Google Analyics so client can view user traffic."
          techStack={[
            "Javascript",
            "React",
            "Node.js",
            "CSS3",
            "Vite",
            "Amazon Web Services",
            "Bootstrap",
            "HTML5",
            "Google",
            "Postgresql",
          ]}
          link="https://www.tysginseng.com"
        />
      </div>
    </div>
  );
}
