import Link from "next/link";
import { Search } from "lucide-react";
import { currentUser } from "../_lib/mock-data";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <header className={styles.topBar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Nova Business Banking — ana səhifə">
          <svg
            className={styles.logoMark}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <path
              d="M10 22V10l12 12V10"
              fill="none"
              stroke="var(--color-text-on-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.logoText}>
            Nova <span className={styles.logoSuffix}>Business</span>
          </span>
        </Link>

        <form className={styles.search} role="search" action="/">
          <label htmlFor="global-search" className="visually-hidden">
            Əməliyyat, hesab və ya kontragent axtar
          </label>
          <Search className={styles.searchIcon} size={20} strokeWidth={1.5} aria-hidden="true" />
          <input
            id="global-search"
            name="q"
            type="search"
            className={styles.searchInput}
            placeholder="Axtar…"
            autoComplete="off"
          />
        </form>

        <div className={styles.user}>
          <span className={styles.avatar} aria-hidden="true">
            {currentUser.initials}
          </span>
          <div className={styles.userMeta}>
            <p className={styles.userName}>{currentUser.name}</p>
            <p className={styles.userCompany}>{currentUser.company}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
