import { Route, Routes } from "react-router-dom";
import RefundList from "./pages/refundList";
import { NewRefund } from "./pages/newRefund";
import { DetailsRefund } from "./pages/detailsRefund";
import { RequestSent } from "./pages/requestSent";
import { LanguageSwitcher } from "./components/languageSwitcher";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<RefundList />} />
          <Route path="/refund/newrefund" element={<NewRefund />} />
          <Route path="/refund/:id" element={<DetailsRefund />} />
          <Route path="/refund/requestsent" element={<RequestSent />} />
        </Route>
      </Routes>
      <LanguageSwitcher />
    </>
  );
}

export default App;
