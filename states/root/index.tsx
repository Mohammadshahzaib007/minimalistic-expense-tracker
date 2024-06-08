import { createContext, useReducer, useMemo, useContext } from "react";

const initialState = {
  user: "Mohammad shahzaib",
};

// Create Context
const RootStateContext = createContext(initialState);

// Reducer
const reducer = () => {
  return { ...initialState };
};

export const RootStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ ...state, dispatch }), []);

  return (
    <RootStateContext.Provider value={value}>
      {children}
    </RootStateContext.Provider>
  );
};

// Custom Hook
export const useRootState = () => useContext(RootStateContext);
