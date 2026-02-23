import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/Logo.svg";
import Button from "./button";
import { NavLink } from "./navlink";
import { useLanguage } from "../hooks/useLanguage";

export default function MainHeader() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const isEn = language === "en";
  const isPt = language === "pt";

  return (
    <div className="flex items-center  justify-around pt-4 pb-4">
      <div className="cursor-pointer">
        <button className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt={t("header.logoAlt")} className="w-25  h-8" />
        </button>
      </div>
      <div className=" flex items-center space-x-4 gap-4  pb-2 ">
        <NavLink to="/">{t("header.refundRequests")}</NavLink>
        <Button size="sm" onClick={() => navigate("/refund/newrefund")}>
          {t("header.newRequest")}
        </Button>
        <div className="flex items-center gap-1 border border-[var(--gray-300)] rounded-md overflow-hidden bg-[var(--gray-500)]">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`px-3 py-2 text-sm cursor-pointer font-semibold transition-colors ${
              isEn
                ? "bg-[var(--green-100)] text-[var(--white)]"
                : "text-[var(--gray-100)] hover:bg-[var(--gray-300)]"
            }`}
            title="English"
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("pt")}
            className={`px-3 py-2 text-sm font-semibold transition-colors ${
              isPt
                ? "bg-[var(--green-100)] text-[var(--white)]"
                : "text-[var(--gray-100)] hover:bg-[var(--gray-300)]"
            }`}
            title="Português"
          >
            PT
          </button>
        </div>
      </div>
    </div>
  );
}
