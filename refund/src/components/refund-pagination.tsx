interface RefundPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function RefundPagination({
  currentPage,
  totalPages,
  onPageChange,
}: RefundPaginationProps) {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-lg bg-(--green-100) hover:bg-(--green-200) text-white flex items-center justify-center disabled:opacity-50 cursor-pointer"
      >
        {"<"}
      </button>

      <span className="text-gray-700">
        {currentPage}/{totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-lg bg-(--green-100) hover:bg-(--green-200) text-white flex items-center justify-center disabled:opacity-50 cursor-pointer"
      >
        {">"}
      </button>
    </div>
  );
}
