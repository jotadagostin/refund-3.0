import { RefundItem } from "./refund-item";

interface Refund {
  id: string;
  name: string;
  category: string;
  amount: number;
  icon?: string;
}

interface RefundListProps {
  data: Refund[];
}

export function RefundItems({ data }: RefundListProps) {
  return (
    <div className="bg-white rounded-xl mt-4 overflow-hidden cursor-pointer">
      {data.map((item) => (
        <RefundItem key={item.id} item={item} />
      ))}
    </div>
  );
}
