import Button from "../components/button";
import { FileUploadButton } from "../components/fileUploadButton";
import { Input } from "../components/input";
import { InputAmount } from "../components/inputAmount";
import MainHeader from "../components/main-header";
import { Select } from "../components/select";

export function NewRefund() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <section className="flex flex-1 items-center justify-center bg-(--gray-400) px-6 py-12">
        <div className="w-full max-w-xl rounded-2xl bg-white p-10 shadow-sm ">
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
          <div className="pt-6 flex items-end ">
            <Input
              label="Receipt"
              className=""
              placeholder="file name.pdf"
              rightElement={<FileUploadButton size="sm" />}
            />
          </div>
          <div className="pt-6 pb-6">
            <Button size="lg">Send</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
