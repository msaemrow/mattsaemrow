import styles from "./Footer.module.css";
import "devicon/devicon.min.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.contactTitle}>Contact Info</p>
      <p className={styles.contactData}>Email: mattsaemrow@gmail.com</p>
      <p className={styles.contactData}>Phone: (507) 491-6709</p>
      <p className={styles.contactData}>
        <a
          href="https://www.linkedin.com/in/mattsaemrow/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="50"
            height="50"
            fill="#0077B5"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>
      </p>
      <p className={styles.techStack}>
        This website was built with Next.js{" "}
        <i className={`devicon-nextjs-plain colored tech-icon`}></i>, React{" "}
        <i className={`devicon-react-plain colored tech-icon`}></i>, styled with
        CSS Modules
        <i className={`devicon-css3-plain colored tech-icon`}></i> and deployed
        on Vercel <i className={`devicon-vercel-plain colored tech-icon`}></i>
      </p>
    </div>
  );
}
