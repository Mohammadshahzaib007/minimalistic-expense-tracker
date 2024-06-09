import {
  createContext,
  useReducer,
  useMemo,
  useContext,
  useCallback,
} from "react";
import { HomeActionType, HomeStateType } from "../types";

const initialState = {
  isAddExpenseOpen: false,
};

// Create Context
const HomeStateContext = createContext<HomeStateType>(initialState);

// Reducer
const reducer = (state: HomeStateType, action: HomeActionType) => {
  switch (action.type) {
    case "TOGGLE_ADD_EXPENSE_MODAL":
      return { ...state, isAddExpenseOpen: !state.isAddExpenseOpen };
    default:
      return state;
  }
};

export const HomeStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleAddExpenseModal = useCallback(
    () => dispatch({ type: "TOGGLE_ADD_EXPENSE_MODAL" }),
    []
  );

  const value = useMemo(
    () => ({ ...state, toggleAddExpenseModal }),
    [state, toggleAddExpenseModal]
  );

  return (
    <HomeStateContext.Provider value={value}>
      {children}
    </HomeStateContext.Provider>
  );
};

// Custom Hook
export const useHomeState = () => useContext(HomeStateContext);
