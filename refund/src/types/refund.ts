export type RefundStatus = "pending" | "approved" | "rejected";

export interface Refund {
  id: string;
  name: string;
  category: string;
  amount: number;
  receipt?: string;
  status: RefundStatus;
  createdAt: Date;
}
