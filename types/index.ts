export interface ExpenseType {
  id: string | number;
  date: Date;
  amount: number;
  note?: string;
  category: string;
}

export interface AllExpensesType {
  [key: string]: { [key: string]: ExpenseType[] };
}
