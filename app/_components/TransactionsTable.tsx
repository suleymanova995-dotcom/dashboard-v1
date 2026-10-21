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
              <th scope="col" className={styles.hideSm}>
                Tarix
              </th>
              <th scope="col">Kontragent</th>
              <th scope="col" className={styles.hideSm}>
                ID
              </th>
              <th scope="col" className={styles.hideSm}>
                Status
              </th>
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
                  <td className={`${styles.date} ${styles.hideSm}`}>
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
                      <div className={styles.counterpartyText}>
                        <span className={styles.counterpartyName}>{tx.counterparty}</span>
                        <span className={styles.meta}>
                          <span className={styles.showSm}>
                            <time dateTime={tx.date}>{formatDate(tx.date)}</time> ·{" "}
                          </span>
                          {tx.category}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className={`${styles.mono} ${styles.hideSm}`}>{tx.id}</td>
                  <td className={styles.hideSm}>
                    <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                  </td>
                  <td className={styles.alignEnd}>
                    <div className={styles.amountCell}>
                      <span className={styles.amount}>
                        <span className="visually-hidden">
                          {incoming ? "Daxilolma" : "Ödəniş"}:{" "}
                        </span>
                        {formatSignedMoney(tx.amount)}
                      </span>
                      <span className={styles.showSm}>
                        <StatusBadge tone={status.tone}>{status.label}</StatusBadge>
                      </span>
                    </div>
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
