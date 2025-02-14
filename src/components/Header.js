"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const currentPath = usePathname();
  return (
    <div className={styles.container}>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={styles.themeButton}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
      <h1 className={styles.headerTitle}>Matt Saemrow</h1>
      <div className={styles.linkContainer}>
        {currentPath === "/samples" ? (
          <>
            <Link className={styles.link} href="/">
              About Me
            </Link>
            <Link className={styles.link} href="/skills">
              Skills
            </Link>
          </>
        ) : currentPath === "/" ? (
          <>
            <Link className={styles.link} href="/skills">
              Skills
            </Link>
            <Link className={styles.link} href="/samples">
              Work Samples
            </Link>
          </>
        ) : currentPath === "/skills" ? (
          <>
            <Link className={styles.link} href="/">
              About Me
            </Link>
            <Link className={styles.link} href="/samples">
              Work Samples
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
