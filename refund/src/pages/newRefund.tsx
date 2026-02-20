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
import { useRefund } from "../hooks/useRefund";
import { useRef } from "react";

export function NewRefund() {
  const navigate = useNavigate();
  const { dispatch } = useRefund();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(refundSchema),
  });

  function onSubmit(data: RefundFormData) {
    dispatch({
      type: "ADD",
      payload: {
        id: crypto.randomUUID(),
        name: data.requestName,
        category: data.category.toLowerCase(),
        amount: Number(data.amount),
        receipt: data.receipt,
        status: "pending",
        createdAt: new Date(),
      },
    });

    navigate("/refund/requestsent");
  }

  function handleFileClick() {
    fileInputRef.current?.click();
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
              readOnly
              placeholder="file name.pdf"
              {...register("receipt")}
              error={errors.receipt?.message}
              rightElement={
                <FileUploadButton size="sm" onClick={handleFileClick} />
              }
            />
            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const base64 = event.target?.result as string;
                    setValue("receipt", base64);
                  };
                  reader.readAsDataURL(file);
                }
              }}
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
