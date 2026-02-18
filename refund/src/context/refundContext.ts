import { createContext } from "react";
import type { Refund } from "../types/refund";

export type State = {
  refunds: Refund[];
};

export type Action =
  | { type: "ADD"; payload: Refund }
  | { type: "DELETE"; payload: string };

export const RefundContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);
