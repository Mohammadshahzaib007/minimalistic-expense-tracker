import {
  createContext,
  useReducer,
  useMemo,
  useContext,
  useCallback,
} from "react";
import { HomeActionType, HomeStateType } from "../types";
import { ExpenseType } from "@/types";

const initialState: HomeStateType = {
  isAddExpenseOpen: false,
  expenses: {},
} as HomeStateType;

// Create Context
const HomeStateContext = createContext<HomeStateType>(initialState);

// Reducer
const reducer = (
  state: HomeStateType,
  action: HomeActionType
): HomeStateType => {
  switch (action.type) {
    case "TOGGLE_ADD_EXPENSE_MODAL":
      return { ...state, isAddExpenseOpen: !state.isAddExpenseOpen };
    case "ADD_EXPENSE":
      console.log(action.payload);
      return { ...state };

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

  const value = {
    ...state,
    toggleAddExpenseModal,
    addExpenseHandler,
    inputChangeHandler,
  };

  return (
    <HomeStateContext.Provider value={value}>
      {children}
    </HomeStateContext.Provider>
  );
};

// Custom Hook
export const useHomeState = () => useContext(HomeStateContext);
