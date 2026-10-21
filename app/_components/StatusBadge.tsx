import styles from "./StatusBadge.module.css";

export type BadgeTone = "success" | "warning" | "error";

/** Status shown as text + colored dot, so meaning never relies on color alone. */
export function StatusBadge({ tone, children }: { tone: BadgeTone; children: React.ReactNode }) {
  return (
    <span className={`${styles.badge} ${styles[tone]}`}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </span>
  );
}
