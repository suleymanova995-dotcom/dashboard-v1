import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import type { Transaction, TransactionStatus } from "../_lib/mock-data";
import { formatDate, formatSignedMoney } from "../_lib/format";
import { StatusBadge, type BadgeTone } from "./StatusBadge";
import cardStyles from "./Card.module.css";
import styles from "./TransactionsTable.module.css";

const statusMap: Record<TransactionStatus, { label: string; tone: BadgeTone }> = {
  completed: { label: "Tamamlandı", tone: "success" },
  pending: { label: "Gözləyir", tone: "warning" },
  failed: { label: "Uğursuz", tone: "error" },
};

export function TransactionsTable({ transactions }: { transactions: Transaction[] }) {
  return (
    <section className={cardStyles.card} aria-labelledby="transactions-title">
      <div className={cardStyles.header}>
        <div>
          <h2 id="transactions-title" className={cardStyles.title}>
            Son əməliyyatlar
          </h2>
          <p className={cardStyles.subtitle}>Son 7 gündə {transactions.length} əməliyyat</p>
        </div>
      </div>

      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Tarix</th>
              <th scope="col">Kontragent</th>
              <th scope="col" className={styles.hideSm}>
                Kateqoriya
              </th>
              <th scope="col" className={styles.hideSm}>
                ID
              </th>
              <th scope="col">Status</th>
              <th scope="col" className={styles.alignEnd}>
                Məbləğ
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => {
              const incoming = tx.amount > 0;
              const status = statusMap[tx.status];
              const DirectionIcon = incoming ? ArrowDownLeft : ArrowUpRight;

              return (
                <tr key={tx.id}>
                  <td className={styles.date}>
                    <time dateTime={tx.date}>{formatDate(tx.date)}</time>
                  </td>
                  <td>
                    <div className={styles.counterparty}>
                      <span
                        className={`${styles.direction} ${incoming ? styles.incoming : ""}`}
                        aria-hidden="true"
                      >
                        <DirectionIcon size={16} strokeWidth={1.5} />
                      </span>
                      <span>{tx.counterparty}</span>
                    </div>
                  </td>
                  <td className={`${styles.muted} ${styles.hideSm}`}>{tx.category}</td>
                  <td className={`${styles.mono} ${styles.hideSm}`}>{tx.id}</td>
                  <td>
                    <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                  </td>
                  <td className={`${styles.amount} ${styles.alignEnd}`}>
                    <span className="visually-hidden">{incoming ? "Daxilolma" : "Ödəniş"}: </span>
                    {formatSignedMoney(tx.amount)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
