import { Input } from "../components/input";
import { InputAmount } from "../components/inputAmount";
import MainHeader from "../components/main-header";
import { Select } from "../components/select";

export function NewRefund() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <section className="flex flex-1 items-center justify-center bg-[var(--gray-400)] px-6 py-10">
        <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm">
          <div className="">
            <h2 className="text-2xl font-bold mb-6 text-(--gray-100)">
              New refund request
            </h2>
            <p className="text-(--gray-200) text-sm">
              Expense details for requesting reimbursement.
            </p>
          </div>
          <div className="pt-10 ">
            <Input label="Request name" />
          </div>
          <div className="flex gap-4 pt-12">
            <Select />
            <InputAmount label="Amount" />
          </div>
        </div>
      </section>
    </div>
  );
}
