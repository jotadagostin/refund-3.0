import Button from "../components/button";
import { Input } from "../components/input";
import { InputAmount } from "../components/inputAmount";
import MainHeader from "../components/main-header";
import { NavLink } from "../components/navlink";
import { Select } from "../components/select";
import DownloadReceipt from "../assets/icons/downloadReceipt.svg?react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ConfirmDialog from "../components/ui/confirmDialog";
import { useNavigate, useParams } from "react-router-dom";
import { useRefund } from "../hooks/useRefund";
import { getReceipt, deleteReceipt } from "../utils/indexedDB";

function openBase64InNewTab(base64String: string, errorMessage: string) {
  try {
    const arr = base64String.split(",");
    const mimeMatch = arr[0].match(/:(.*?);/);
    const mimeType = mimeMatch ? mimeMatch[1] : "application/octet-stream";

    const bstr = atob(arr[1]);
    const n = bstr.length;
    const u8arr = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      u8arr[i] = bstr.charCodeAt(i);
    }

    const blob = new Blob([u8arr], { type: mimeType });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  } catch (error) {
    console.error("Erro ao abrir recibo:", error);
    alert(errorMessage);
  }
}

export function DetailsRefund() {
  const { t } = useTranslation();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [receiptBase64, setReceiptBase64] = useState<string | null>(null);
  const { id } = useParams();
  const { state, dispatch } = useRefund();
  const navigate = useNavigate();

  const refund = state.refunds.find((r) => r.id === id);

  useEffect(() => {
    if (refund?.receipt === "stored" && id) {
      getReceipt(id).then((receipt) => {
        if (receipt) {
          setReceiptBase64(receipt);
        }
      });
    }
  }, [refund?.receipt, id]);

  if (!refund) {
    return <p>{t("detailsRefund.notFound")}</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <section className="flex flex-1 items-center justify-center bg-(--gray-400) px-6 py-12">
        <div className="w-full max-w-xl rounded-2xl bg-white p-10 shadow-sm ">
          <div className="">
            <h2 className="text-2xl font-bold mb-6 text-(--gray-100)">
              {t("detailsRefund.title")}
            </h2>
            <p className="text-(--gray-200) text-sm">
              {t("detailsRefund.subtitle")}
            </p>
          </div>
          <div className="pt-10 ">
            <Input
              label={t("detailsRefund.requestName")}
              value={refund?.name || ""}
              readOnly
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-12">
            <Select value={refund?.category} />
            <InputAmount
              label={t("detailsRefund.amount")}
              value={refund?.amount || 0}
              readOnly
            />
          </div>
          <div className="pt-8 flex items-center justify-center gap-2">
            <DownloadReceipt />
            <NavLink
              to=""
              onClick={(e) => {
                e.preventDefault();
                if (receiptBase64) {
                  openBase64InNewTab(
                    receiptBase64,
                    t("detailsRefund.errorOpeningReceipt"),
                  );
                } else {
                  alert(t("detailsRefund.noReceiptAvailable"));
                }
              }}
            >
              {t("detailsRefund.openReceipt")}
            </NavLink>
          </div>
          <div className="pt-8 pb-6">
            <Button size="lg" onClick={() => setOpenDeleteModal(true)}>
              {t("detailsRefund.delete")}
            </Button>
          </div>
        </div>
      </section>
      <ConfirmDialog
        open={openDeleteModal}
        title={t("detailsRefund.deleteTitle")}
        description={t("detailsRefund.deleteDescription")}
        onCancel={() => setOpenDeleteModal(false)}
        onConfirm={async () => {
          if (id) {
            // Remove do IndexedDB se existir
            if (refund.receipt === "stored") {
              await deleteReceipt(id);
            }
            dispatch({ type: "DELETE", payload: id });
          }
          setOpenDeleteModal(false);
          navigate("/");
        }}
      />
    </div>
  );
}
