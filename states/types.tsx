import { AllExpensesType, ExpenseType } from "@/types";

export interface InputChangeHandlerType {
  key: string;
  value: string | number | Date;
}

export interface HomeStateType {
  isAddExpenseOpen: boolean;
  expenses: AllExpensesType;
  userInput: ExpenseType;
  currMonthExpenses: ExpenseType[];
  thisMonthTotoalExpenses: number;

  // handlers
  toggleAddExpenseModal: () => void;
  addExpenseHandler: () => void;
  inputChangeHandler: (key: string, value: string | number | Date) => void;
}

export type HomeActionType =
  | { type: "TOGGLE_ADD_EXPENSE_MODAL" }
  | { type: "ADD_EXPENSE"; payload: ExpenseType }
  | { type: "USER_INPUT_CHANGE"; payload: InputChangeHandlerType };
