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
          description="A production-level application for anglers to log fish catches, review historical data, and participate in a Master Angler catch program. Generates a custom PDF certificate for qualifying catches. Implemented JWT authentication for secure user authorization."
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
          description="A production website built for a small agriculture business, featuring a custom frontend and backend. Integrated Square Checkout API for seamless payments and developed an admin dashboard for easy product management. Implemented SEO best practices to enhance organic reach and added Google Analytics for tracking user traffic and engagement."
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
        <ProjectCard
          key="Project 3"
          title="Fishing Planner"
          description="Mobile-responsive web application that provides a 3-day weather forecast based on location and moon phase data for a selected date. Built with Next.js, leveraging API routes to fetch real-time weather and location data from the OpenWeather API. Optimized for seamless usability across small, medium, and large screens."
          techStack={[
            "Typescript",
            "React",
            "HTML5",
            "CSS3",
            "Next.js",
            "Vercel",
          ]}
          link="https://fishing-planner.vercel.app/"
        />
      </div>
    </div>
  );
}
