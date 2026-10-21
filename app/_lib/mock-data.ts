// Mock data until the banking API is wired up.

export type Trend = {
  /** Percent change vs. previous month */
  change: number;
  /** Whether an increase is good for the business (false for expenses) */
  increaseIsPositive: boolean;
};

export type Kpi = {
  id: "revenue" | "expenses" | "cash" | "pending";
  label: string;
  amount: number;
  trend?: Trend;
  caption: string;
};

export type TransactionStatus = "completed" | "pending" | "failed";

export type Transaction = {
  id: string;
  date: string; // ISO date
  counterparty: string;
  category: string;
  amount: number; // positive = incoming, negative = outgoing
  status: TransactionStatus;
};

export type ConnectionStatus = "connected" | "pending";

export type BankAccount = {
  id: string;
  name: string;
  bank: string;
  iban: string;
  currency: "AZN" | "USD" | "EUR";
  balance: number | null;
  status: ConnectionStatus;
  lastSync: string | null; // ISO datetime
};

export const currentUser = {
  name: "Leyla Həsənova",
  role: "Maliyyə meneceri",
  company: "Araz Trade MMC",
  initials: "LH",
};

export const kpis: Kpi[] = [
  {
    id: "revenue",
    label: "Aylıq gəlir",
    amount: 48250,
    trend: { change: 12.4, increaseIsPositive: true },
    caption: "ötən aya görə",
  },
  {
    id: "expenses",
    label: "Xərclər",
    amount: 31870.5,
    trend: { change: 4.1, increaseIsPositive: false },
    caption: "ötən aya görə",
  },
  {
    id: "cash",
    label: "Nağd qalıq",
    amount: 126430.75,
    trend: { change: 6.8, increaseIsPositive: true },
    caption: "bütün hesablar üzrə",
  },
  {
    id: "pending",
    label: "Gözləyən ödənişlər",
    amount: 7850,
    caption: "5 ödəniş təsdiq gözləyir",
  },
];

export const transactions: Transaction[] = [
  {
    id: "TRX-208341",
    date: "2026-10-21",
    counterparty: "Bakı Logistika MMC",
    category: "Satış",
    amount: 12400,
    status: "completed",
  },
  {
    id: "TRX-208337",
    date: "2026-10-20",
    counterparty: "Azərenerji ödənişi",
    category: "Kommunal",
    amount: -864.2,
    status: "completed",
  },
  {
    id: "TRX-208329",
    date: "2026-10-20",
    counterparty: "Əmək haqqı — oktyabr",
    category: "Maaş",
    amount: -18250,
    status: "pending",
  },
  {
    id: "TRX-208318",
    date: "2026-10-19",
    counterparty: "Gəncə Tekstil ASC",
    category: "Satış",
    amount: 5730,
    status: "completed",
  },
  {
    id: "TRX-208305",
    date: "2026-10-18",
    counterparty: "Ofis icarəsi",
    category: "İcarə",
    amount: -3200,
    status: "failed",
  },
  {
    id: "TRX-208296",
    date: "2026-10-17",
    counterparty: "Xəzər Marketinq",
    category: "Xidmətlər",
    amount: -1150,
    status: "completed",
  },
];

export const bankAccounts: BankAccount[] = [
  {
    id: "acc-main",
    name: "Əsas cari hesab",
    bank: "Nova Business",
    iban: "AZ21NOVA00000000001234564821",
    currency: "AZN",
    balance: 98210.4,
    status: "connected",
    lastSync: "2026-10-21T09:42:00Z",
  },
  {
    id: "acc-usd",
    name: "Valyuta hesabı",
    bank: "Nova Business",
    iban: "AZ47NOVA00000000009876540317",
    currency: "USD",
    balance: 16620.35,
    status: "connected",
    lastSync: "2026-10-21T09:40:00Z",
  },
  {
    id: "acc-external",
    name: "Xarici bank hesabı",
    bank: "Digər bank",
    iban: "AZ83BANK00000000005551230962",
    currency: "AZN",
    balance: null,
    status: "pending",
    lastSync: null,
  },
];
