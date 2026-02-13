import { RefundItem } from "./refund-item";

interface Refund {
  id: string;
  name: string;
  category: string;
  amount: number;
  icon?: string;
}

interface RefundListProps {
  data?: Refund[];
}

const defaultData: Refund[] = [
  {
    id: "1",
    name: "Rodrigo",
    category: "car",
    amount: 45.5,
  },
  {
    id: "2",
    name: "Ana",
    category: "restaurant",
    amount: 89.9,
  },
  {
    id: "3",
    name: "Lara",
    category: "tech",
    amount: 1299.0,
  },
  {
    id: "4",
    name: "Marco",
    category: "tools",
    amount: 156.75,
  },
  {
    id: "5",
    name: "Peter",
    category: "receipt",
    amount: 230.0,
  },
];

export function RefundItems({ data = defaultData }: RefundListProps) {
  return (
    <div className="bg-white rounded-xl  mt-4 overflow-hidden">
      <div className="">
        {data.map((item) => (
          <RefundItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
