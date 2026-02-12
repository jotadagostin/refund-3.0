import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import Button from "./button";
import { NavLink } from "./navlink";

export default function MainHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center  justify-around pt-4">
      <div>
        <button className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" className="w-25  h-8" />
        </button>
      </div>
      <div className="flex items-center space-x-4 gap-4">
        <NavLink to="/request">Refund requests</NavLink>
        <Button size="sm">New Request</Button>
      </div>
    </div>
  );
}
