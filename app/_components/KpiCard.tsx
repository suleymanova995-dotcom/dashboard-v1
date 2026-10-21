import {
  ArrowDownRight,
  ArrowUpRight,
  Clock,
  TrendingDown,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { Kpi } from "../_lib/mock-data";
import { formatMoney, formatPercent } from "../_lib/format";
import cardStyles from "./Card.module.css";
import styles from "./KpiCard.module.css";

const icons: Record<Kpi["id"], LucideIcon> = {
  revenue: TrendingUp,
  expenses: TrendingDown,
  cash: Wallet,
  pending: Clock,
};

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const Icon = icons[kpi.id];
  const { trend } = kpi;

  return (
    <article className={`${cardStyles.card} ${styles.kpi}`}>
      <div className={styles.top}>
        <h3 className={styles.label}>{kpi.label}</h3>
        <span className={styles.iconWrap} aria-hidden="true">
          <Icon size={20} strokeWidth={1.5} />
        </span>
      </div>

      <p className={styles.amount}>{formatMoney(kpi.amount)}</p>

      <p className={styles.meta}>
        {trend && <TrendBadge trend={trend} />}
        <span>{kpi.caption}</span>
      </p>
    </article>
  );
}

function TrendBadge({ trend }: { trend: NonNullable<Kpi["trend"]> }) {
  const isUp = trend.change >= 0;
  const isGood = isUp === trend.increaseIsPositive;
  const Arrow = isUp ? ArrowUpRight : ArrowDownRight;
  const label = `${isUp ? "Artım" : "Azalma"} ${formatPercent(Math.abs(trend.change))}%`;

  return (
    <span
      className={`${styles.trend} ${isGood ? styles.trendGood : styles.trendBad}`}
      aria-label={label}
    >
      <Arrow size={16} strokeWidth={1.5} aria-hidden="true" />
      {isUp ? "+" : "−"}
      {formatPercent(Math.abs(trend.change))}%
    </span>
  );
}
