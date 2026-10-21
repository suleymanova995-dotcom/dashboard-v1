const LOCALE = "az-AZ";

export function formatMoney(amount: number, currency = "AZN") {
  return new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatSignedMoney(amount: number, currency = "AZN") {
  const sign = amount > 0 ? "+" : amount < 0 ? "−" : "";
  return `${sign}${formatMoney(Math.abs(amount), currency)}`;
}

export function formatPercent(value: number) {
  return new Intl.NumberFormat(LOCALE, {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }).format(value);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat(LOCALE, {
    day: "numeric",
    month: "short",
    timeZone: "Asia/Baku",
  }).format(new Date(iso));
}

export function formatTime(iso: string) {
  return new Intl.DateTimeFormat(LOCALE, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Baku",
  }).format(new Date(iso));
}

/** Shows only the country code and last 4 digits: "AZ21 •••• 4821" */
export function maskIban(iban: string) {
  return `${iban.slice(0, 4)} •••• ${iban.slice(-4)}`;
}
