interface RefundPaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

export function RefundPagination({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}: RefundPaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-lg bg-(--green-100) text-white flex items-center justify-center disabled:opacity-50"
      >
        {"<"}
      </button>

      <span className="text-gray-700">
        {currentPage}/{totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-lg bg-(--green-100) text-white flex items-center justify-center disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
}
