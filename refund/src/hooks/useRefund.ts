import { useContext } from "react";
import { RefundContext } from "../context/refundContext";

export function useRefund() {
  const context = useContext(RefundContext);

  if (!context) {
    throw new Error("useRefund must be used within a RefundProvider");
  }

  return context;
}
