import { Landmark, Link2 } from "lucide-react";
import type { BankAccount } from "../_lib/mock-data";
import { formatMoney, formatTime, maskIban } from "../_lib/format";
import { StateMessage } from "./StateMessage";
import { StatusBadge } from "./StatusBadge";
import cardStyles from "./Card.module.css";
import styles from "./AccountConnections.module.css";

type AccountConnectionsProps = {
  accounts: BankAccount[];
  /** Set when the accounts request failed */
  error?: boolean;
};

export function AccountConnections({ accounts, error = false }: AccountConnectionsProps) {
  const pendingCount = accounts.filter((a) => a.status === "pending").length;

  return (
    <section className={cardStyles.card} aria-labelledby="accounts-title">
      <div className={cardStyles.header}>
        <div>
          <h2 id="accounts-title" className={cardStyles.title}>
            Hesab bağlantıları
          </h2>
          {!error && accounts.length > 0 && (
            <p className={cardStyles.subtitle}>
              {pendingCount > 0
                ? `${pendingCount} hesab bağlantısı gözləyir.`
                : "Bütün hesablar qoşulub."}
            </p>
          )}
        </div>
      </div>

      {error ? (
        <StateMessage
          tone="error"
          title="Hesablar yüklənmədi"
          description="Bank bağlantılarını yoxlamaq alınmadı. Bir az sonra yenidən cəhd et."
          retryHref="/"
        />
      ) : accounts.length === 0 ? (
        <StateMessage
          tone="empty"
          title="Bağlı hesab yoxdur"
          description="Bank hesabını qoşduqdan sonra qalıq və sinxronizasiya vaxtı burada görünəcək."
        />
      ) : (
        <ul className={`${cardStyles.body} ${styles.list}`}>
          {accounts.map((account) => (
            <li key={account.id} className={styles.item}>
              <span className={styles.bankIcon} aria-hidden="true">
                <Landmark size={20} strokeWidth={1.5} />
              </span>

              <div className={styles.details}>
                <div className={styles.row}>
                  <h3 className={styles.name}>{account.name}</h3>
                  {account.status === "connected" ? (
                    <StatusBadge tone="success">Qoşulub</StatusBadge>
                  ) : (
                    <StatusBadge tone="warning">Bağlantı gözləyir</StatusBadge>
                  )}
                </div>

                <p className={styles.iban}>
                  <span className="visually-hidden">IBAN, son rəqəmlər: </span>
                  {maskIban(account.iban)} · {account.currency}
                </p>

                {account.status === "connected" && account.balance !== null ? (
                  <div className={styles.row}>
                    <p className={styles.balance}>{formatMoney(account.balance, account.currency)}</p>
                    {account.lastSync && (
                      <p className={styles.sync}>
                        Yeniləndi: <time dateTime={account.lastSync}>{formatTime(account.lastSync)}</time>
                      </p>
                    )}
                  </div>
                ) : (
                  <div className={styles.pending}>
                    <p className={styles.sync}>
                      {account.bank} bağlantını təsdiqləməlidir. Təsdiqdən sonra qalıq burada
                      görünəcək.
                    </p>
                    <button type="button" className={styles.button}>
                      <Link2 size={20} strokeWidth={1.5} aria-hidden="true" />
                      Bağlantını tamamla
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
