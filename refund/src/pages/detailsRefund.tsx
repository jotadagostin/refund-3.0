import Button from "../components/button";
import { Input } from "../components/input";
import { InputAmount } from "../components/inputAmount";
import MainHeader from "../components/main-header";
import { NavLink } from "../components/navLink";
import { Select } from "../components/select";
import DownloadReceipt from "../assets/icons/downloadReceipt.svg?react";
import { useState } from "react";
import ConfirmDialog from "../components/ui/confirmDialog";
import { useNavigate, useParams } from "react-router-dom";
import { useRefund } from "../hooks/useRefund";

export function DetailsRefund() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { id } = useParams();
  const { state, dispatch } = useRefund();
  const navigate = useNavigate();

  const refund = state.refunds.find((r) => r.id === id);

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <section className="flex flex-1 items-center justify-center bg-(--gray-400) px-6 py-12">
        <div className="w-full max-w-xl rounded-2xl bg-white p-10 shadow-sm ">
          <div className="">
            <h2 className="text-2xl font-bold mb-6 text-(--gray-100)">
              Refund request
            </h2>
            <p className="text-(--gray-200) text-sm">
              Expense details for requesting reimbursement.
            </p>
          </div>
          <div className="pt-10 ">
            <Input label="Request name" value={refund?.name || ""} readOnly />
          </div>
          <div className="flex gap-4 pt-12">
            <Select value={refund?.category} />
            <InputAmount label="Amount" value={refund?.amount || 0} readOnly />
          </div>
          <div className="pt-8 flex items-center justify-center gap-2">
            <DownloadReceipt />
            <NavLink to="">Open receipt</NavLink>
          </div>
          <div className="pt-8 pb-6">
            <Button size="lg" onClick={() => setOpenDeleteModal(true)}>
              Delete
            </Button>
          </div>
        </div>
      </section>
      <ConfirmDialog
        open={openDeleteModal}
        title="Delete refund request"
        description="Are you sure you want to delete this refund request?"
        onCancel={() => setOpenDeleteModal(false)}
        onConfirm={() => {
          if (id) {
            dispatch({ type: "DELETE", payload: id });
          }
          setOpenDeleteModal(false);
          navigate("/");
        }}
      />
    </div>
  );
}
