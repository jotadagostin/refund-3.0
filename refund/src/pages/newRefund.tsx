import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import { FileUploadButton } from "../components/fileUploadButton";
import { Input } from "../components/input";
import { InputAmount } from "../components/inputAmount";
import MainHeader from "../components/main-header";
import { Select } from "../components/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { refundSchema, type RefundFormData } from "../schemas/refund.schema";

export function NewRefund() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RefundFormData>({
    resolver: zodResolver(refundSchema),
  });

  function onSubmit(data: RefundFormData) {
    console.log(data);
    navigate("/refund/requestsent");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <section className="flex flex-1 items-center justify-center bg-(--gray-400) px-6 py-12">
        <form
          className="w-full max-w-xl rounded-2xl bg-white p-10 shadow-sm b"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <h2 className="text-2xl font-bold mb-6 text-(--gray-100) ">
              New refund request
            </h2>
            <p className="text-(--gray-200) text-sm">
              Expense details for requesting reimbursement.
            </p>
          </div>
          <div className="pt-10 ">
            <Input
              label="Request name"
              {...register("requestName")}
              error={errors.requestName?.message}
            />
          </div>
          <div className="flex gap-4 pt-12">
            <Select
              {...register("category")}
              error={errors.category?.message}
            />
            <InputAmount
              label="Amount"
              {...register("amount")}
              error={errors.amount?.message}
            />
          </div>
          <div className="pt-6 flex items-end ">
            <Input
              label="Receipt"
              className=""
              placeholder="file name.pdf"
              rightElement={
                <FileUploadButton
                  size="sm"
                  {...register("receipt")}
                  error={errors.receipt?.message}
                />
              }
            />
          </div>
          <div className="pt-6 pb-6">
            <Button size="lg" type="submit">
              Send
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
