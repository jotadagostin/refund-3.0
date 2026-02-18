import { useEffect, useReducer, type ReactNode } from "react";
import { RefundContext, type Action, type State } from "./refundContext";

const LOCAL_STORAGE_KEY = "refunds";

function loadInitialState(): State {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!stored) {
    return { refunds: [] };
  }

  try {
    return { refunds: JSON.parse(stored) };
  } catch {
    return { refunds: [] };
  }
}

function refundReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        refunds: [...state.refunds, action.payload],
      };

    case "DELETE":
      return {
        ...state,
        refunds: state.refunds.filter((refund) => refund.id !== action.payload),
      };

    default:
      return state;
  }
}

export function RefundProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    refundReducer,
    undefined,
    loadInitialState,
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.refunds));
  }, [state.refunds]);

  return (
    <RefundContext.Provider value={{ state, dispatch }}>
      {children}
    </RefundContext.Provider>
  );
}
