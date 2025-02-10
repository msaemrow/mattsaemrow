import styles from "./TimelineItem.module.css";

export default function TimelineItem({ date, title, description }) {
  return (
    <div className={`${styles.timelineItem} timelineItem`}>
      <h3 className={styles.dateTitle}>
        {date}: {title}
      </h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
