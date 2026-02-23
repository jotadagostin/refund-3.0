import { z } from "zod";
import type { TFunction } from "i18next";

export function getRefundSchema(t: TFunction) {
  return z.object({
    requestName: z.string().min(3, t("validation.requestNameRequired")),
    category: z.string().min(1, t("validation.categoryRequired")),
    amount: z
      .string()
      .min(1, t("validation.amountRequired"))
      .transform((value) => Number(value.replace(".", "").replace(",", ".")))
      .refine((value) => value > 0, {
        message: t("validation.amountPositive"),
      }),
    receipt: z.string().min(1, t("validation.receiptRequired")),
  });
}

export type RefundFormData = z.infer<ReturnType<typeof getRefundSchema>>;
