import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/Logo.svg";
import Button from "./button";
import { NavLink } from "./navlink";

export default function MainHeader() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 gap-3 sm:gap-0">
      <div className="cursor-pointer">
        <button className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt={t("header.logoAlt")} className="w-auto  h-8" />
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto ">
        <NavLink to="/">{t("header.refundRequests")}</NavLink>
        <Button
          size="sm"
          onClick={() => navigate("/refund/newrefund")}
          className="w-full sm:w-auto"
        >
          {t("header.newRequest")}
        </Button>
      </div>
    </div>
  );
}
