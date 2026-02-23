import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const iconUrl = categoryIcons[item.category] || categoryIcons.other;
  const navigate = useNavigate();
  const categoryLabel =
    item.category in categoryIcons
      ? t(`categories.${item.category}`)
      : item.category;

  return (
    <div
      onClick={() => navigate(`/refund/${item.id}`)}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4 px-4 hover:bg-gray-50 rounded-lg transition-colors"
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4 flex-1">
        {/* ICON */}
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

        {/* NAME + CATEGORY */}
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{item.name}</p>
          <p className="text-sm text-gray-500">{categoryLabel}</p>
        </div>
      </div>

      {/* VALOR */}
      <div className="font-medium text-gray-800 whitespace-nowrap ml-4">
        R$ {item.amount.toFixed(2)}
      </div>
    </div>
  );
}
