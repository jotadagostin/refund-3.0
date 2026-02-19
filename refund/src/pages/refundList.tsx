import { useState } from "react";
import { ButtonSearch } from "../components/buttonSearch";
import { Input } from "../components/input";
import MainHeader from "../components/main-header";
import { RefundItems } from "../components/refund-list";
import { RefundPagination } from "../components/refund-pagination";
import { useRefund } from "../hooks/useRefund";

export default function RefundList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { state } = useRefund();

  const ITEMS_PER_PAGE = 5;

  const filteredRefunds = state.refunds.filter((refund) =>
    refund.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRefunds.length / ITEMS_PER_PAGE),
  );

  const paginatedRefunds = filteredRefunds.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Página alterada para:", page);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />

      <section className="flex-1 bg-(--gray-400) px-16 py-8">
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 className="text-(--gray-100) text-[20px] font-bold mb-6 ">
              Requests
            </h1>
            <div className="flex items-end gap-2  justify-center pb-5 border-b border-gray-200 ">
              <Input
                inputSize="md"
                label=""
                placeholder="Search for the name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ButtonSearch size="sm" />
            </div>
            {filteredRefunds.length === 0 ? (
              search ? (
                <div className="mt-6 text-center text-gray-500">
                  No results found.
                </div>
              ) : (
                <div className="mt-6 text-center text-gray-500">
                  No refund requests yet.
                </div>
              )
            ) : (
              <RefundItems data={paginatedRefunds} />
            )}
            <RefundPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
