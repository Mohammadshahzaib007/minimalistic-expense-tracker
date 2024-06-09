import { ExpenseType } from "@/types";
import { HomeActionType, HomeStateType } from "../types";

// Reducer
export const reducer = (
  state: HomeStateType,
  action: HomeActionType
): HomeStateType => {
  switch (action.type) {
    case "TOGGLE_ADD_EXPENSE_MODAL":
      return { ...state, isAddExpenseOpen: !state.isAddExpenseOpen };
    case "ADD_EXPENSE":
      const updatedState = addExpense(state, action.payload);
      return { ...updatedState };

    case "USER_INPUT_CHANGE":
      return {
        ...state,
        userInput: {
          ...state.userInput,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

// Helper function to add expense and update state
function addExpense(state: HomeStateType, expense: ExpenseType) {
  const date = expense.date as unknown as string;
  const [_, month, year] = date.split("/");

  const allPrevExpenses = state.expenses;
  const prevYearExpenses = allPrevExpenses[year];
  const prevMonthExpenses = prevYearExpenses?.[month] || [];
  const id = (prevMonthExpenses.at(-1)?.id as number) + 1 || 0;

  return {
    ...state,
    expenses: {
      ...allPrevExpenses,
      [year]: {
        ...prevYearExpenses,
        [month]: [...prevMonthExpenses, { ...expense, id }],
      },
    },
  };
}
