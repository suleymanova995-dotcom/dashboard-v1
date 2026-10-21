import { AccountConnections } from "./_components/AccountConnections";
import { KpiCard } from "./_components/KpiCard";
import { TopBar } from "./_components/TopBar";
import { TransactionsTable } from "./_components/TransactionsTable";
import { bankAccounts, currentUser, kpis, transactions } from "./_lib/mock-data";
import styles from "./page.module.css";

export default function DashboardPage() {
  return (
    <>
      <TopBar />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Ümumi baxış</h1>
          <p className={styles.subtitle}>
            {currentUser.company} · Oktyabr 2026 üzrə maliyyə göstəriciləri
          </p>
        </div>

        <section aria-labelledby="kpi-title">
          <h2 id="kpi-title" className="visually-hidden">
            Əsas göstəricilər
          </h2>
          <div className={styles.kpiGrid}>
            {kpis.map((kpi) => (
              <KpiCard key={kpi.id} kpi={kpi} />
            ))}
          </div>
        </section>

        <div className={styles.contentGrid}>
          <TransactionsTable transactions={transactions} />
          <AccountConnections accounts={bankAccounts} />
        </div>
      </main>
    </>
  );
}
