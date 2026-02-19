import { useNavigate } from "react-router-dom";

interface RefundItemProps {
  item: {
    id: string;
    name: string;
    category: string;
    amount: number;
    icon?: string;
  };
}

const categoryIcons: Record<string, string> = {
  food: new URL("../assets/icons/forkKnife.svg", import.meta.url).href,
  accommodation: new URL("../assets/icons/bed.svg", import.meta.url).href,
  transportation: new URL("../assets/icons/car.svg", import.meta.url).href,
  tech: new URL("../assets/icons/desktop.svg", import.meta.url).href,
  services: new URL("../assets/icons/wrench.svg", import.meta.url).href,
  other: new URL("../assets/icons/receipt.svg", import.meta.url).href,
};

export function RefundItem({ item }: RefundItemProps) {
  const iconUrl = categoryIcons[item.category] || categoryIcons.other;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/refund/${item.id}`)}
      className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 rounded-lg transition-colors"
    >
      {/* LADO ESQUERDO */}
      <div className="flex items-center gap-4 flex-1">
        {/* Ícone */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: "var(--gray-400)" }}
        >
          <img
            src={iconUrl}
            alt={item.category}
            className="w-6 h-6 icon-refund"
          />
        </div>

        {/* Nome + Categoria */}
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{item.name}</p>
          <p className="text-sm text-gray-500 capitalize">{item.category}</p>
        </div>
      </div>

      {/* VALOR */}
      <div className="font-medium text-gray-800 whitespace-nowrap ml-4">
        R$ {item.amount.toFixed(2)}
      </div>
    </div>
  );
}
