import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../components/button";
import { FileUploadButton } from "../components/fileUploadButton";
import { Input } from "../components/input";
import { InputAmount } from "../components/inputAmount";
import MainHeader from "../components/main-header";
import { Select } from "../components/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRefundSchema, type RefundFormData } from "../schemas/refund.schema";
import { useRefund } from "../hooks/useRefund";
import { useRef, useState } from "react";
import { saveReceipt } from "../utils/indexedDB";

export function NewRefund() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { dispatch } = useRefund();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [receiptBase64, setReceiptBase64] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(getRefundSchema(t)),
  });

  const categoryValue = watch("category");

  async function onSubmit(data: RefundFormData) {
    const refundId = crypto.randomUUID();

    // Salva o arquivo em IndexedDB se existir
    if (receiptBase64) {
      await saveReceipt(refundId, receiptBase64);
    }

    dispatch({
      type: "ADD",
      payload: {
        id: refundId,
        name: data.requestName,
        category: data.category.toLowerCase(),
        amount: Number(data.amount),
        receipt: receiptBase64 ? "stored" : undefined, // Marca como armazenado em IndexedDB
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
              {t("newRefund.title")}
            </h2>
            <p className="text-(--gray-200) text-sm">
              {t("newRefund.subtitle")}
            </p>
          </div>
          <div className="pt-10 ">
            <Input
              label={t("newRefund.requestName")}
              {...register("requestName")}
              error={errors.requestName?.message}
            />
          </div>
          <div className="flex gap-4 pt-12">
            <Select
              {...register("category")}
              value={categoryValue}
              error={errors.category?.message}
            />
            <InputAmount
              label={t("newRefund.amount")}
              {...register("amount")}
              error={errors.amount?.message}
            />
          </div>
          <div className="pt-6 flex items-end ">
            <Input
              label={t("newRefund.receipt")}
              readOnly
              placeholder={t("newRefund.receiptPlaceholder")}
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
                    setReceiptBase64(base64);
                    setValue("receipt", file.name);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
          <div className="pt-6 pb-6">
            <Button size="lg" type="submit">
              {t("newRefund.send")}
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
