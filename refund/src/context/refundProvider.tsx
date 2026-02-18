import { useReducer, type ReactNode } from "react";
import { RefundContext, type Action, type State } from "./refundContext";

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
  const [state, dispatch] = useReducer(refundReducer, {
    refunds: [],
  });

  return (
    <RefundContext.Provider value={{ state, dispatch }}>
      {children}
    </RefundContext.Provider>
  );
}
