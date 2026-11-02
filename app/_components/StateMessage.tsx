import { CircleAlert, Inbox } from "lucide-react";
import styles from "./StateMessage.module.css";

type StateMessageProps = {
  tone: "empty" | "error";
  title: string;
  description: string;
  /** Error states offer a retry; reloading the page refetches the data. */
  retryHref?: string;
};

/** Empty / error placeholder shown inside a card body. */
export function StateMessage({ tone, title, description, retryHref }: StateMessageProps) {
  const Icon = tone === "error" ? CircleAlert : Inbox;

  return (
    <div
      className={tone === "error" ? `${styles.state} ${styles.error}` : styles.state}
      role={tone === "error" ? "alert" : "status"}
    >
      <Icon className={styles.icon} size={24} strokeWidth={1.5} aria-hidden="true" />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      {retryHref && (
        <a href={retryHref} className={styles.retry}>
          Yenidən cəhd et
        </a>
      )}
    </div>
  );
}
