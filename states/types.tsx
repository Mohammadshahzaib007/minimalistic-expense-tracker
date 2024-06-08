export interface HomeStateType {
  isAddExpenseOpen: boolean;
  toggleAddExpenseModal?: () => void;
}

export type HomeActionType = { type: "TOGGLE_ADD_EXPENSE_MODAL" };
