import { Route, Routes } from "react-router-dom";
import RefundList from "./pages/refundList";
import { NewRefund } from "./pages/newRefund";
import { DetailsRefund } from "./pages/detailsRefund";

function App() {
  return (
    <Routes>
      <Route>
        <Route index element={<RefundList />} />
        <Route path="/refund/newrefund" element={<NewRefund />} />
        <Route path="/refund/detailsrefund" element={<DetailsRefund />} />
      </Route>
    </Routes>
  );
}

export default App;
