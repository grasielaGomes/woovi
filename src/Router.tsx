import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { PaymentMethod, Pix, CreditCard } from "./pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<PaymentMethod />} />
        <Route path="/pix" element={<Pix />} />
        <Route path="/credit-card" element={<CreditCard />} />
      </Route>
    </Routes>
  );
};
