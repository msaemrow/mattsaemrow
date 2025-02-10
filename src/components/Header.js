"use client";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const currentPath = usePathname();
  console.log("CurrentPath", currentPath);
  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>Matt Saemrow</h1>
      <div className={styles.linkContainer}>
        {currentPath === "/samples" ? (
          <>
            <Link className={styles.link} href="/">
              Home
            </Link>
            <Link className={styles.link} href="/resume">
              Resume
            </Link>
          </>
        ) : currentPath === "/" ? (
          <>
            <Link className={styles.link} href="/samples">
              Work Samples
            </Link>
            <Link className={styles.link} href="/resume">
              Resume
            </Link>
          </>
        ) : currentPath === "/resume" ? (
          <>
            <Link className={styles.link} href="/">
              Home
            </Link>
            <Link className={styles.link} href="/samples">
              Work Samples
            </Link>
          </>
        ) : (
          <></> // You can add default links or handle other cases if needed
        )}
      </div>
    </div>
  );
}
