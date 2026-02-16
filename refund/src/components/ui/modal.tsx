interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* content */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">
        {children}
      </div>
    </div>
  );
}
