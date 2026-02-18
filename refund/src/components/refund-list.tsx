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
  if (data.length === 0) {
    return (
      <div className="mt-4 text-center text-gray-500">
        No refund requests yet.
      </div>
    );
  }
  return (
    <div className="bg-white rounded-xl  mt-4 overflow-hidden cursor-pointer">
      <div className="">
        {data.map((item) => (
          <RefundItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
