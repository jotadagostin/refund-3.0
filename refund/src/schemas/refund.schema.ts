import { z } from "zod";

export const refundSchema = z.object({
  requestName: z.string().min(3, "Request name is required"),
  category: z.string().min(1, "Select a categoryy"),
  //   amount: z.number().positive("Amount must be greater than 0"),
  amount: z
    .string()
    .min(1, "Amount is required")
    .transform((value) => Number(value.replace(".", "").replace(",", ".")))
    .refine((value) => value > 0, {
      message: "Amount must be greater than 0",
    }),

  receipt: z.string().min(1, "Receipt is required"),
});

export type RefundFormData = z.infer<typeof refundSchema>;
