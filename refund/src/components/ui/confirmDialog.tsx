import Button from "../button";
import Modal from "./modal";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  description,
  onCancel,
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <Modal open={open} onClose={onCancel}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-sm text-zinc-600 mb-8">{description}</p>

      <div className="flex justify-end gap-8 ">
        <button
          onClick={onCancel}
          className="text-(--green-100) font-medium cursor-pointer"
        >
          Cancel
        </button>

        {/* <button
          onClick={onConfirm}
          className="bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          Confirm
        </button> */}
        <Button size="sm" onClick={onConfirm}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
}
