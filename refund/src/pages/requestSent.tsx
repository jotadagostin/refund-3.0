import Button from "../components/button";
import MainHeader from "../components/main-header";
import RequestCheckIcon from "../assets/icons/requestCheck.svg?react";
import { useNavigate } from "react-router-dom";

export function RequestSent() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <section className="flex flex-1 items-center justify-center bg-(--gray-400) px-6 py-12">
        <div className="w-full max-w-xl rounded-2xl bg-white p-10 shadow-sm ">
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold mb-6 text-(--green-100)">
              Request sent!
            </h2>
          </div>
          <div className="flex flex-col justify-center  items-center pt-6 gap-4">
            <RequestCheckIcon />
            <p className="text-(--gray-200) text-sm text-center">
              Now just wait! Your request will be analyzed and the financial
              sector will contact you shortly.
            </p>
          </div>

          <div className="pt-13 pb-6">
            <Button size="lg" onClick={() => navigate("/refund/newrefund")}>
              New solicitation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
