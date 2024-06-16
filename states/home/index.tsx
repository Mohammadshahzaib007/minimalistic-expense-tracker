import { createContext, useReducer, useContext } from "react";
import { HomeStateType } from "../types";
import { reducer } from "./reducer";

const initialState: HomeStateType = {
  isAddExpenseOpen: false,
  expenses: {},
} as HomeStateType;

// Create Context
const HomeStateContext = createContext<HomeStateType>(initialState);

export const HomeStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleAddExpenseModal = () =>
    dispatch({ type: "TOGGLE_ADD_EXPENSE_MODAL" });

  const addExpenseHandler = () => {
    const payload = {
      ...state.userInput,
      date: state.userInput.date.toLocaleDateString() as unknown as Date,
    };
    dispatch({ type: "ADD_EXPENSE", payload: { ...payload } });
    toggleAddExpenseModal();
  };

  const inputChangeHandler = (key: string, value: string | number | Date) => {
    dispatch({ type: "USER_INPUT_CHANGE", payload: { key, value } });
  };

  const currMonthExpenses =
    state.expenses[new Date().getFullYear()]?.[new Date().getMonth() + 1] || [];
  const thisMonthTotoalExpenses = +currMonthExpenses
    .reduce((acc, { amount }) => acc + amount, 0)
    .toFixed(2);

  const value = {
    ...state,
    toggleAddExpenseModal,
    addExpenseHandler,
    inputChangeHandler,
    currMonthExpenses,
    thisMonthTotoalExpenses,
  };

  return (
    <HomeStateContext.Provider value={value}>
      {children}
    </HomeStateContext.Provider>
  );
};

// Custom Hook
export const useHomeState = () => useContext(HomeStateContext);
